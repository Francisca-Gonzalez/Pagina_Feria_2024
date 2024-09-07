import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import '../stylesheets/inicio.css';

export default function Inicio() {
    return (
        <Container maxWidth="lg" className="homepage" sx={{ mt: 10 }}>
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
                        height: { xs: '200px', md: '280px' }, // Adjust height accordingly
                        border: 'none',
                        mt: 4
                    }}
                />
                {/* Content next to the video */}
                <Box className="homepage__app">
                <Typography variant="h2" gutterBottom sx={{ color: 'black', mt: 2 }}>
                    Digital Skill App
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
                    Una aplicación web para evaluar las competencias digitales de los ciudadanos de manera práctica y real.
                </Typography>
                </Box>
            </Box>

        {/* Beneficios */}
            <Grid container spacing={4} sx={{ textAlign: 'center', my: 4 }}>
                <Grid item xs={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Evaluación Personalizada
                    </Typography>
                    <Typography>Realiza evaluaciones adaptadas a tu nivel y habilidades.</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Actividades Prácticas
                    </Typography>
                    <Typography>Pruebas reales que simulan situaciones cotidianas.</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Basado en DigComp 2.2
                    </Typography>
                    <Typography>Desarrolla competencias clave según estándares europeos.</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                    IA Generativa
                    </Typography>
                    <Typography>
                    Genera preguntas personalizadas y analiza respuestas con IA avanzada para una evaluación más precisa.
                    </Typography>
                </Grid>
            </Grid>
            
            <Box sx={{ textAlign: 'center', py: 2, borderTop: '1px solid #e0e0e0', fontFamily: "Quicksand, sans serif" }}>
                <Typography variant="body2" color="textSecondary">
                © 2024 Digital Skill App. Todos los derechos reservados.
                </Typography>
            </Box>
        </Container>
    );
};


    