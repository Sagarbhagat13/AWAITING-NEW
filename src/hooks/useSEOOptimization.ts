
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOOptimizationOptions {
  enableAutoInternalLinking?: boolean;
  enableHeadingOptimization?: boolean;
  enableImageAltOptimization?: boolean;
}

export const useSEOOptimization = (options: SEOOptimizationOptions = {}) => {
  const location = useLocation();
  const {
    enableAutoInternalLinking = true,
    enableHeadingOptimization = true,
    enableImageAltOptimization = true
  } = options;

  useEffect(() => {
    const optimizePage = () => {
      // Optimize heading structure
      if (enableHeadingOptimization) {
        optimizeHeadingStructure();
      }

      // Add internal links
      if (enableAutoInternalLinking) {
        addInternalLinks();
      }

      // Optimize image alt texts
      if (enableImageAltOptimization) {
        optimizeImageAlts();
      }

      // Add structured data for current page
      addPageSpecificStructuredData();
    };

    // Run optimization after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(optimizePage, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  const optimizeHeadingStructure = () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let hasH1 = false;

    headings.forEach((heading) => {
      const tagName = heading.tagName.toLowerCase();
      
      // Ensure only one H1 per page
      if (tagName === 'h1') {
        if (hasH1) {
          // Convert additional H1s to H2s
          const newH2 = document.createElement('h2');
          newH2.innerHTML = heading.innerHTML;
          newH2.className = heading.className;
          heading.parentNode?.replaceChild(newH2, heading);
        } else {
          hasH1 = true;
        }
      }

      // Add aria-labels for better accessibility
      if (!heading.getAttribute('aria-label') && heading.textContent) {
        heading.setAttribute('aria-label', heading.textContent.trim());
      }
    });
  };

  const addInternalLinks = () => {
    const content = document.querySelector('main');
    if (!content) return;

    // Keywords and their corresponding internal links
    const internalLinks = {
      'backpacking': '/backpacking',
      'honeymoon': '/honeymoon-packages',
      'family tours': '/family-tours',
      'long weekend': '/long-weekend-trips',
      'ladakh': '/india/ladakh',
      'himachal pradesh': '/india/himachal-pradesh',
      'kerala': '/india/kerala',
      'goa': '/india/goa',
      'thailand': '/world/thailand',
      'singapore': '/world/singapore',
      'bali': '/world/bali',
      'maldives': '/world/maldives',
      'customized trips': '/customized'
    };

    const textNodes = getTextNodes(content);
    
    textNodes.forEach(node => {
      if (node.parentElement?.tagName.toLowerCase() === 'a') return; // Skip if already a link
      
      let text = node.textContent || '';
      let hasChanges = false;
      
      Object.entries(internalLinks).forEach(([keyword, url]) => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        if (regex.test(text) && !text.includes(`href="${url}"`)) {
          text = text.replace(regex, `<a href="${url}" class="text-wanderon-orange hover:underline">${keyword}</a>`);
          hasChanges = true;
        }
      });
      
      if (hasChanges) {
        const wrapper = document.createElement('span');
        wrapper.innerHTML = text;
        node.parentNode?.replaceChild(wrapper, node);
      }
    });
  };

  const getTextNodes = (element: Element): Text[] => {
    const textNodes: Text[] = [];
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null
    );
    
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent?.trim()) {
        textNodes.push(node as Text);
      }
    }
    
    return textNodes;
  };

  const optimizeImageAlts = () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      if (!img.alt || img.alt.trim() === '') {
        // Generate alt text based on src or nearby content
        const src = img.src;
        const figcaption = img.closest('figure')?.querySelector('figcaption');
        const nearbyHeading = img.closest('section')?.querySelector('h1, h2, h3');
        
        if (figcaption?.textContent) {
          img.alt = figcaption.textContent.trim();
        } else if (nearbyHeading?.textContent) {
          img.alt = `Image related to ${nearbyHeading.textContent.trim()}`;
        } else if (src.includes('unsplash')) {
          img.alt = 'Travel destination image - Awaiting Adventures';
        } else {
          img.alt = 'Awaiting Adventures - Travel and Adventure';
        }
      }
      
      // Add loading="lazy" if not present
      if (!img.getAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.getAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  };

  const addPageSpecificStructuredData = () => {
    const pathname = location.pathname;
    
    // Add WebPage schema for all pages
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": document.title,
      "description": document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      "url": window.location.href,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Awaiting Adventures",
        "url": "https://awaitingadventures.com"
      },
      "dateModified": new Date().toISOString()
    };

    // Remove existing WebPage schema if present
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-schema="webpage"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new WebPage schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'webpage');
    script.textContent = JSON.stringify(webPageSchema);
    document.head.appendChild(script);
  };

  return {
    optimizeHeadingStructure,
    addInternalLinks,
    optimizeImageAlts,
    addPageSpecificStructuredData
  };
};
