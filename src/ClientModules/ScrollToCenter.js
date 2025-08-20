export function onRouteDidUpdate({ location, previousLocation }) {
    if (location.pathname !== previousLocation?.pathname) {
        setTimeout(() => {
            const el = document.querySelector('mark[data-markjs="true"]');
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }, 400); // wait a bit so highlights are injected
    }
}