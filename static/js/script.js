(function () {
    try {
        // Only run in browser environment
        if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
            return;
        }

        // First check: Check if specific keywords are in the URL path
        const currentPath = window.location.pathname.toLowerCase();

        if (currentPath.includes('assessment')) {
            localStorage.setItem("HelpCenterMode", "Assessment");
            return; // Exit early if found in path
        }

        if (currentPath.includes('physiotherapy')) {
            localStorage.setItem("HelpCenterMode", "Physiotherapy");
            return; // Exit early if found in path
        }

        // Second check: Check query parameter mode (original logic)
        const params = new URLSearchParams(window.location.search);
        const mode = params.get("mode")?.toLowerCase();

        if (!mode) {
            // No mode parameter → default to fitness
            localStorage.setItem("HelpCenterMode", "Fitness");
            return;
        }
        console.log('mode from query param: ' + mode);

        switch (mode) {
            case "assessment":
                localStorage.setItem("HelpCenterMode", "Assessment");
                break;
            case "physiotherapy":
                localStorage.setItem("HelpCenterMode", "Physiotherapy");
                break;
            default:
                localStorage.setItem("HelpCenterMode", "Fitness");
                break;
        }
    } catch (e) {
        console.error("Mode handler error:", e);
    }
})();