export function onRouteDidUpdate({ location, previousLocation }) {
    // Handle search result navigation and highlighting
    if (location.pathname !== previousLocation?.pathname || location.hash !== previousLocation?.hash) {
        setTimeout(() => {
            // First try to scroll to hash if present
            if (location.hash) {
                const hashElement = document.querySelector(location.hash);
                if (hashElement) {
                    hashElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                    return;
                }
            }

            // Then try to find highlighted search terms
            const searchSelectors = [
                'mark[data-markjs="true"]',
                '.search-result-match',
                'mark',
                '.docusaurus-highlight-code-line'
            ];

            for (const selector of searchSelectors) {
                const el = document.querySelector(selector);
                if (el) {
                    el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                    break;
                }
            }
        }, 600); // Increased timeout to ensure highlights are rendered
    }
}