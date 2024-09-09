import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import '../stylesheets/inicio.css';
import logo from '../assets/Logo.svg';

export default function Inicio() {
    return (
        <>
        <Container maxWidth="xl" className="homepage" sx={{ mt: 10 }}>
            <Box className="homepage__video" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                {/* YouTube Video */}
                <Box
                    component="iframe"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&rel=0"
                    title="YouTube video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    sx={{
                        width: { xs: '100%', md: '80%' }, // Responsive size
                        height: { xs: '200px', md: '300px' }, // Adjust height accordingly
                        border: 'none'
                    }}
                />
                {/* Content next to the video */}
                <Box className="homepage__app">
                <Typography variant="h2" gutterBottom>
                    Digital Skill App
                </Typography>
                <img alt="logo" className="homepage__img" src={logo}/>
                <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
                    Una aplicación web para evaluar las competencias digitales de los ciudadanos de manera práctica y real.
                </Typography>
                </Box>
            </Box>
        </Container>

        <Container maxWidth="xl" className="homepage__grid">
        {/* Beneficios */}
            <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', mt: 5 }}>
                <Grid className="homepage__griditem" item xs={6} md={3}>
                    <Typography className="homepage__text" variant="h6" gutterBottom>
                        Pruebas Personalizados
                    </Typography>
                    <Typography className="homepage__text">Realiza pruebas adaptadas a tu nivel y habilidades.</Typography>
                </Grid>
                <Grid className="homepage__griditem" item xs={6} md={3}>
                    <Typography className="homepage__text" variant="h6" gutterBottom>
                        Actividades Prácticas
                    </Typography>
                    <Typography className="homepage__text">Pruebas reales que simulan situaciones cotidianas.</Typography>
                </Grid>
                <Grid className="homepage__griditem" item xs={6} md={3}>
                    <Typography className="homepage__text" variant="h6" gutterBottom>
                        Basado en DigComp 2.2
                    </Typography>
                    <Typography className="homepage__text">Desarrolla competencias clave según estándares europeos.</Typography>
                </Grid>
                <Grid className="homepage__griditem" item xs={6} md={3}>
                    <Typography className="homepage__text" variant="h6" gutterBottom>
                    IA Generativa
                    </Typography>
                    <Typography className="homepage__text">
                    Genera preguntas y analiza respuestas con IA avanzada.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};


    