import Header from '../../Items/Header/Header';
import Footer from '../../Items/Footer/Footer';
import { Outlet } from 'react-router-dom';
// import PasswordProtect from '../../../PasswordProtect';

function Layout() {
    return (
        // <PasswordProtect>
        <div className="bg-black min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
        // </PasswordProtect>
    );
}

export default Layout;

