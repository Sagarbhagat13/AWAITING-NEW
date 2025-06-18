
import { useEffect, RefObject } from 'react';

interface UseAccessibilityOptions {
  trapFocus?: boolean;
  announceChanges?: boolean;
  restoreFocus?: boolean;
}

export const useAccessibility = (
  containerRef: RefObject<HTMLElement>, 
  isActive: boolean,
  options: UseAccessibilityOptions = {}
) => {
  const { trapFocus = false, announceChanges = false, restoreFocus = false } = options;

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    let previousActiveElement: Element | null = null;

    // Store the previously focused element
    if (restoreFocus) {
      previousActiveElement = document.activeElement;
    }

    // Focus the container or first focusable element
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }

    // Handle keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!trapFocus) return;

      if (event.key === 'Tab') {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

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
        // Allow parent component to handle escape
        const escapeEvent = new CustomEvent('accessibilityEscape');
        container.dispatchEvent(escapeEvent);
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      
      // Restore focus to previous element
      if (restoreFocus && previousActiveElement) {
        (previousActiveElement as HTMLElement).focus?.();
      }
    };
  }, [isActive, containerRef, trapFocus, restoreFocus]);

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    if (!announceChanges) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return { announceToScreenReader };
};
