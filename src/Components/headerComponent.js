import * as React from 'react';
import "./Style/header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
export default function Header() {
  return (
        <div className="header">
            <div className='logo'>IBEKA</div>
            <div className='options'>
                <AccountCircleIcon className='icon' sx={{ fontSize: window.innerWidth <500 ? 22 : 30 }}/>
                <FavoriteIcon className='icon' sx={{ fontSize: window.innerWidth <500 ? 22 : 30 }}/>
                <SearchIcon className='icon' sx={{ fontSize: window.innerWidth <500 ? 22 : 30}}/>
                <MenuIcon className='icon' sx={{ fontSize: window.innerWidth <500 ? 22 : 30 }}/>

            </div>
        </div>
  );
}