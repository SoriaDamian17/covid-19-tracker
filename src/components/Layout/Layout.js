import React, { useEffect } from 'react';
import './Layout.scss';

import Logo from '../Logo';

const Layout = (props) => {
  const { title, children } = props;

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="layout">
      <div className="main-header">
        <Logo width={400} height={88.649} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
