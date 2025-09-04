// Enhanced search functionality for better navigation and highlighting
export function onRouteDidUpdate({ location, previousLocation }) {
    // Handle search result navigation
    handleSearchNavigation(location, previousLocation);
}

function handleSearchNavigation(location, previousLocation) {
    // Check if this is a new page navigation
    const isNewPage = location.pathname !== previousLocation?.pathname;
    const hasNewHash = location.hash !== previousLocation?.hash;
    
    if (isNewPage || hasNewHash) {
        // Use multiple timeouts to handle different rendering scenarios
        setTimeout(() => scrollToTarget(location), 300);
        setTimeout(() => scrollToTarget(location), 600);
        setTimeout(() => scrollToTarget(location), 1000);
    }
}

function scrollToTarget(location) {
    // Priority 1: Scroll to hash anchor if present
    if (location.hash) {
        const hashElement = document.querySelector(location.hash);
        if (hashElement) {
            hashElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
            return true;
        }
    }

    // Priority 2: Scroll to search highlights
    const searchSelectors = [
        'mark[data-markjs="true"]',
        '.search-result-match',
        'mark:not([data-markjs="false"])',
        '.docusaurus-highlight-code-line'
    ];

    for (const selector of searchSelectors) {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            // Scroll to the first visible highlight
            const visibleElement = Array.from(elements).find(el => {
                const rect = el.getBoundingClientRect();
                return rect.height > 0 && rect.width > 0;
            });
            
            if (visibleElement) {
                visibleElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest'
                });
                return true;
            }
        }
    }

    return false;
}

// Additional function to handle search result clicks
export function onRouteUpdate({ location }) {
    // Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Add click handlers for search results
    setTimeout(() => {
        const searchResults = document.querySelectorAll('.DocSearch-Hit a, [class*="searchResult"] a');
        searchResults.forEach(link => {
            if (!link.hasAttribute('data-enhanced')) {
                link.setAttribute('data-enhanced', 'true');
                link.addEventListener('click', (e) => {
                    // Small delay to ensure navigation completes
                    setTimeout(() => {
                        const targetUrl = new URL(link.href);
                        if (targetUrl.hash) {
                            const targetElement = document.querySelector(targetUrl.hash);
                            if (targetElement) {
                                targetElement.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center'
                                });
                            }
                        }
                    }, 100);
                });
            }
        });
    }, 500);
}