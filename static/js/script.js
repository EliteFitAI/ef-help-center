(function () {
    try {
        const params = new URLSearchParams(window.location.search);
        const mode = params.get("mode")?.toLowerCase();

        if (!mode) {
            // No mode parameter → default to fitness
            localStorage.setItem("HelpCenterMode", "Fitness");
            return;
        }
        console.log('mode: ' + mode);

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
