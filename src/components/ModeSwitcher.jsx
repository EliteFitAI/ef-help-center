import React from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import DocSidebar from '@theme/NavbarItem/DocSidebarNavbarItem';

export default function RedirectSidebarButton(props) {
    const location = useLocation();
    const history = useHistory();

    const isHomePage = location.pathname === '/' ||
        location.pathname === '' ||
        location.pathname === '/index.html';

    const handleClick = (e) => {
        if (!isHomePage) {
            e.preventDefault();
            e.stopPropagation();
            history.push('/');
        }
    };

    // Always render the DocSidebar, but override onClick when not on home page
    return (
        <div
            onClick={!isHomePage ? handleClick : undefined}
            style={!isHomePage ? { cursor: 'pointer' } : {}}
        >
            <DocSidebar {...props} label={!!isHomePage ? 'Help Center' : 'Home page'} />
        </div>
    );
}