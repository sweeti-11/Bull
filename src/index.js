import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import HeaderNav from './components/HeaderNav';
import "swiper/css/bundle";
import Footer from './components/Footer';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppProvider} from './Context/Context'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>

   <HeaderNav />
   <AppProvider>
   <App/>
   </AppProvider>
   <Footer/>
   </BrowserRouter>
);


