import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';

export default function DocSidebarWrapper(props) {
    // Deep clone the sidebar to avoid mutating original
    const sidebar = JSON.parse(JSON.stringify(props.sidebar));

    // if current path includes /product-tour
    if (props.path.includes('/product-tour')) {
        sidebar.forEach((item) => {
            if (item.label === 'Product Tour' && item.className === 'new-featurep') {
                delete item.className; // remove the class
            }
        });
    }
  return (
    <>
      <DocSidebar {...props} sidebar={sidebar} />
    </>
  );
}
