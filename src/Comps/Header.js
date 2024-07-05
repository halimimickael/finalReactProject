import React, { useEffect, useState } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import { Box, styled } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled(Box)(
  () => `
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(82, 190, 128); 
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  width: 100%;
`
);

const IconStyle = styled(Box)(
  () => `
  color: white;
`
);

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header>
      <HeaderContainer>
        <IconStyle>
          <BadgeIcon sx={{ fontSize: 40 }} />
        </IconStyle>
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
      </HeaderContainer>
    </header>
  );
}
