import React, { useContext, useEffect, useState } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../context/Context1';

export default function Header() {
  const { setSeed, setSearchTerm } = useContext(AppContext);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname, setActiveLink]);
  
  const handleLinkClick = (path) => {
    setSeed('');
    setSearchTerm('');
    setActiveLink(path);
  };

  return (
    <header className='header_fixed'>
      <div className='header_container'>
        <div className='icon_style'>
          <BadgeIcon sx={{ fontSize: 40 }} />
        </div>
        <nav className="col-auto">
          <ul className="listLook">
            <li>
              <Link 
                className={`linkLook ${activeLink === "/" ? "active" : ""}`} 
                to="/"
                onClick={() => handleLinkClick("/")}
              >
                <i className='fas fa-home'></i> Home
              </Link>
            </li>
            <li>
              <Link 
                className={`linkLook ${activeLink === "/favorites" ? "active" : ""}`} 
                to="/favorites"
                onClick={() => handleLinkClick("/favorites")}
              >
                <i className='fas fa-star'></i> Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
