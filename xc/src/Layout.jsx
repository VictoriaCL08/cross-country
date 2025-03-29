import {Outlet} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/ContentGarnetL';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;