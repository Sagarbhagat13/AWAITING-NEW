
import { useEffect, useCallback, RefObject } from 'react';

interface UseEnhancedAccessibilityOptions {
  trapFocus?: boolean;
  announceChanges?: boolean;
  restoreFocus?: boolean;
  escapeKeyHandler?: () => void;
  ariaLabel?: string;
  role?: string;
}

export const useEnhancedAccessibility = (
  containerRef: RefObject<HTMLElement>,
  isActive: boolean,
  options: UseEnhancedAccessibilityOptions = {}
) => {
  const {
    trapFocus = false,
    announceChanges = false,
    restoreFocus = false,
    escapeKeyHandler,
    ariaLabel,
    role
  } = options;

  // Create live region for announcements
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (!announceChanges) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only absolute -left-[10000px] w-[1px] h-[1px] overflow-hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  }, [announceChanges]);

  // Enhanced focus management
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    let previousActiveElement: Element | null = null;

    // Store the previously focused element
    if (restoreFocus) {
      previousActiveElement = document.activeElement;
    }

    // Set ARIA attributes
    if (ariaLabel) {
      container.setAttribute('aria-label', ariaLabel);
    }
    if (role) {
      container.setAttribute('role', role);
    }

    // Get all focusable elements
    const getFocusableElements = () => {
      return container.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), [contenteditable="true"]'
      ) as NodeListOf<HTMLElement>;
    };

    // Focus the first focusable element
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
      announceToScreenReader(`${ariaLabel || 'Dialog'} opened`, 'assertive');
    }

    // Enhanced keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.key === 'Tab' && trapFocus) {
        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        if (escapeKeyHandler) {
          escapeKeyHandler();
        } else {
          // Default escape behavior
          const escapeEvent = new CustomEvent('accessibilityEscape');
          container.dispatchEvent(escapeEvent);
        }
      }

      // Arrow key navigation for certain components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as HTMLElement);
        if (currentIndex !== -1) {
          let nextIndex = currentIndex;
          
          if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % focusableElements.length;
          } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
          }

          if (nextIndex !== currentIndex) {
            event.preventDefault();
            focusableElements[nextIndex].focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      
      // Remove ARIA attributes
      if (ariaLabel) {
        container.removeAttribute('aria-label');
      }
      if (role) {
        container.removeAttribute('role');
      }
      
      // Restore focus to previous element
      if (restoreFocus && previousActiveElement && document.contains(previousActiveElement)) {
        (previousActiveElement as HTMLElement).focus?.();
        announceToScreenReader(`${ariaLabel || 'Dialog'} closed`);
      }
    };
  }, [isActive, containerRef, trapFocus, restoreFocus, escapeKeyHandler, ariaLabel, role, announceToScreenReader]);

  return { announceToScreenReader };
};
