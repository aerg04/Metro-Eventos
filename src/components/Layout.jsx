import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import Footer from './Footer';
import { getUserInfo } from '../models/user';

function Layout({ children }){
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const showSidebar = location.pathname !== '/register' && location.pathname !== '/login';
    const userInfo = getUserInfo();
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    

    return (
        <>
        <Header toggleSidebar={toggleSidebar} toggled={isOpen} showSidebar={showSidebar}></Header>
        <div className="flex">
            {showSidebar && <SideBar is_open={isOpen} role={userInfo.role} />}
            <div className="flex-grow">
                {children}
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Layout;