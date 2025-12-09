import React, { useEffect, useState } from 'react';
import DefaultDropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';

export default function DropdownNavbarItem(props) {
    const [mode, setMode] = useState("Fitness");

    useEffect(() => {
        const saved = localStorage.getItem("HelpCenterMode");
        if (saved) setMode(saved);
    }, []);

    const handleSelect = (selectedMode) => {
        localStorage.setItem("HelpCenterMode", selectedMode);
        setMode(selectedMode);
    };

    return (
        <DefaultDropdownNavbarItem
            {...props}
            label={mode}
            items={props.items.map(item => ({
                ...item,
                onClick: () => handleSelect(item.label),
            }))}
        />
    );
}