import React from 'react';
import Header from './PageModel/Header';
import Body from './PageModel/Body';
import Footer from './PageModel/Footer';

const HomePage = () => {
  return (
    <>
        <header> <Header/></header>
        <body><Body/> </body>
        <footer><Footer/></footer>
    </>
  );
}

export default HomePage;
