import React, { useState } from 'react';
import { Outlet, NavLink,Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, MenuItem, Menu, Box, IconButton,Grid2, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../stylesheets/navbar.css';
import logo from '../assets/Logo.svg';
import fsw from '../assets/logo-fesw-300x161.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YoutubeIcon from '@mui/icons-material/YouTube';
import '../stylesheets/footer.css';
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
                <Container maxWidth="xl" >
                    <Toolbar disableGutters className="navbar__toolbar">
                        <Box className="navbar__logo" sx={{}}>
                            <NavLink to="/"><img alt="logo" className="navbar__img" src={logo}/></NavLink>
                            <Typography variant='h2'>DigitalSkillApp</Typography>
                        </Box>
                    

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
                            sx={{display: { xs: 'block', md: 'none' },}}
                            >
                            {pages.map(({page , link}) => (
                                <MenuItem key={page} component={NavLink} to={link} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" sx={{fontFamily: 'Quicksand,sans-serif'}}>{page}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>

                    {/* Logo for Mobile */}

                    {/* Menu for Desktop */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
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
            <Box className="footer" position="relative">
                <Grid2 container spacing={10} sx={{justifyContent:'center'}}>
                    {/* Información Básica */}
                    <Grid2 xs={12} sm={6}>
                        <Typography className="footer__text" variant="h6" gutterBottom>Digital Skill App</Typography>
                        <Typography className="footer__text" variant="body2">Evaluamos tus competencias digitales según el marco europeo DigComp 2.2.</Typography>
                        <img alt="fsw" Style="width: 150px; margin-top: 15px; display: block; margin-left: auto; margin-right: auto;" src={fsw}/>
                    </Grid2>

                    {/* Enlaces de Navegación */}
                    <Grid2>
                        <Typography component={Grid2} className="footer__text" variant="h6" gutterBottom> Navegación</Typography>
                        <Grid2 component={Stack} direction='column' >
                            <Link to="/" Style="font-family: 'Quicksand', sans-serif !important;text-decoration: none;color: white;margin-bottom: 1vh;font-weight: bold;">Inicio</Link>
                            <Link to="/DigitalSkillApp" Style="font-family: 'Quicksand', sans-serif !important;text-decoration: none;color: white;margin-bottom: 1vh;font-weight: bold;">¿Qué es Digital Skill App?</Link>
                            <Link to="/NuestroEquipo" Style="font-family: 'Quicksand', sans-serif !important;text-decoration: none;color: white;margin-bottom: 1vh;font-weight: bold;">Nuestro Equipo</Link>
                            <Link to="/Contacto" Style="font-family: 'Quicksand', sans-serif !important;text-decoration: none;color: white;margin-bottom: 1vh;font-weight: bold;">Contacto</Link>
                        </Grid2>
                    </Grid2>

                    {/* Enlaces de Redes Sociales */}
                    <Grid2 xs={12} sm={3}>
                        <Typography className="footer__text" variant="h6" sx={{ml: 1}} gutterBottom>Síguenos</Typography>
                        <IconButton aria-label="fingerprint" href='https://www.instagram.com/digitalskillapp/'>
                            <InstagramIcon sx={{color: 'white'}}/>
                        </IconButton>
                        <IconButton aria-label="fingerprint" href='https://www.linkedin.com/company/stormcat/'>
                            <LinkedInIcon sx={{color: 'white'}} />
                        </IconButton>
                        <IconButton aria-label="fingerprint" href='https://www.youtube.com/@Stormcat-fsw'>
                            <YoutubeIcon sx={{color: 'white'}} />
                        </IconButton>
                    </Grid2>
                </Grid2>

                {/* Derechos Reservados */}
                <Box mt={3} className="footer__rights">
                    <Typography className="footer__text" variant="h8" align="center">
                        &copy; {new Date().getFullYear()} Digital Skill App. Todos los derechos reservados.
                    </Typography>
                </Box>
            </Box>
        </>
    );
};