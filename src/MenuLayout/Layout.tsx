import React, { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

// In this example, {children} is a special prop in React that allows us to pass components as data to other components. 
type Props = {
    children: ReactNode
}

  const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;