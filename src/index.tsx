// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// // import { Helmet } from 'react-helmet';
// // import { Provider } from 'react-redux';
// // import Icon16 from 'public/images_png/favicon_16x16.png';
// // import Icon32 from 'public/images_png/favicon_32x32.png';
// // import IconTouch from 'public/images_png/favicon_big.png';
// // import Safari from 'public/images_svg/favicon_for_safari.svg';
// import App from './App';
// // import store from '@/store';
// import '@/index.scss';

// ReactDOM.render(
//   // <Helmet>
//   //   <link rel="apple-touch-icon" sizes="180x180" href={IconTouch} />
//   //   <link rel="icon" type="image/png" sizes="32x32" href={Icon32} />
//   //   <link rel="icon" type="image/png" sizes="16x16" href={Icon16} />
//   //   <link rel="mask-icon" href={Safari} color="#439e45" />
//   //   <meta name="msapplication-TileColor" content="#00aba9" />
//   //   <meta name="theme-color" content="#ffffff" />
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('app'),
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const container = document.getElementById('app');

ReactDOM.render(element, container);
