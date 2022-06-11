import  React from 'react';
import { Button } from 'antd';
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className='nav'>
            <div className='logo'>
                ATools
            </div>
            <div className='button'>
            <Button type="primary" className='butt1'>Start Free Trial</Button>
            <Button type="primary" className='butt2'>Login</Button>
            </div>
        </div>
    )
}

export default Navbar;