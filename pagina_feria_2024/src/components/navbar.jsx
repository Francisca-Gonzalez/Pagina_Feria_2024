import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, MenuItem, Menu, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../stylesheets/navbar.css';
import logo from '../assets/Logo.svg';

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = [
        {page: 'Inicio', link: '/'}, 
        {page: '¿Qué es Digital Skill App?', link: '/DigitalSkillApp'}, 
        {page: 'Nuestro Equipo', link: '/NuestroEquipo'}, 
        {page: 'Contacto', link: '/Contacto'}
    ];

    return (
        <>
            <AppBar className="navbar" position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    {/* Logo */}
                    <NavLink to="/"><img alt="logo" className="navbar__img" src={logo}/></NavLink>
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Logo
                    </Typography> */}

                    {/* Menu Icon (Mobile) */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map(({page , link}) => (
                            <MenuItem key={page} component={NavLink} to={link} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>

                    {/* Logo for Mobile */}

                    {/* Menu for Desktop */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(({ page, link }) => (
                            <Button 
                            className="navbar__button"
                            component={NavLink}
                            to={link}  
                            key={page} 
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block', borderRadius: '0px', '&.active': { 
                                borderBottom: '2px solid white' // Estilo para el botón activo
                                } 
                            }}
                            >
                            {page}
                            </Button>
                        ))}
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    );
};
//   return (
//     <>
//     <AppBar className="navbar" position="fixed">
//         <Container maxWidth="xl">
//             <Toolbar>
//                 <NavLink to="/"><img alt="logo" className="navbar__img" src={logo}/></NavLink>
//                 <Button className="navbar__button" component={NavLink} to="/">Inicio</Button>
//                 <Button className="navbar__button" component={NavLink} to="/DigitalSkillApp">¿Qué es Digital Skill App?</Button>
//                 <Button className="navbar__button" component={NavLink} to="/Sobre_Nosotros">Sobre Nosotros</Button>
//                 <Button className="navbar__button" component={NavLink} to="/Contacto">Contacto</Button>
//             </Toolbar>
//         </Container>
//     </AppBar>
//     <Outlet />
//     </>
//   );
// };