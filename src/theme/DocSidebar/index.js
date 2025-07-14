import React, { useEffect, useState } from 'react';
import OriginalSidebar from '@theme-original/DocSidebar';

function filterSidebarItems(items, role) {
    if (!Array.isArray(items)) return [];

    return items
        .map(item => {
            if (item.type === 'category') {
                const filteredSubItems = filterSidebarItems(item.items, role);
                return {
                    ...item,
                    items: filteredSubItems || [],
                };
            }

            if (
                item.type === 'link' &&
                item.docId === 'FAQs/FAQs2' &&
                role !== 'physio'
            ) {
                return null;
            }

            return item;
        })
        .filter(Boolean);
}

export default function DocSidebar(props) {
    const [filteredSidebar, setFilteredSidebar] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const role = params.get('role') || 'user';

        // SAFELY clone and filter
        const sidebar = props.sidebar;
        const filteredItems = filterSidebarItems(sidebar, role);
        console.log(filteredItems);
        // Replace only `.items`, rest untouched
        setFilteredSidebar(filteredItems);
    }, [props.sidebar]);

    if (!filteredSidebar) return null; // Wait for filtering to complete

    return <OriginalSidebar {...props} sidebar={filteredSidebar} />;
}
