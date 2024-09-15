import React from 'react';
import { Container, Typography, Box, Grid2 } from '@mui/material';
import '../stylesheets/inicio.css';
import logo from '../assets/Logo.svg';
import mockup from '../assets/Mockup_digitalskillapp.png';
import Beneficios from './Beneficios';

export default function Inicio() {
    return (
        <>
            <Container maxWidth="xl" className="homepage" sx={{ mt: 10, display: 'flex', alignItems: 'center'}}>
                <Box component='img' alt="logo" className="homepage__mockup" src={mockup}/>
                <Box className="homepage__app">
                    <Typography className="homepage__title" gutterBottom>Digital Skill App</Typography>
                    <img alt="logo" className="homepage__img" src={logo}/>
                    <Typography className="homepage__subtitle" align='center' gutterBottom> Una aplicación web para evaluar las competencias digitales de los ciudadanos de manera práctica y real.</Typography>
                </Box>
            </Container>

        {/* Beneficios */}
            <Beneficios/>

            <Grid2 container sx={{display: 'flex', justifyContent: 'space-evenly', mt: 7}}>
                <Grid2 component={Typography} className="homepage__title" xs={6} md={6} sx={{flexWrap:'wrap',alignContent:'center'}}>
                    ¡Conoce más sobre DigitalSkillApp!
                </Grid2>
                <Grid2 component='iframe' src="https://www.youtube.com/embed/wkP0cm6TdrA?si=VM7eu-2JMsui7_3n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen sx={{width: {xs: '75%', md: '35vw'}, height: {xs: '31vh', md: '41vh'}, border: 'none'}}/>
            </Grid2>
        </>
    );
};


    