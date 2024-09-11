import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../stylesheets/digitalskillapp.css';

export default function Inicio() {
    return (
        <>
        <Container maxWidth="xl" className="appweb" sx={{ mt: 10 }}>
            <Box align="center" sx={{ mb: 4 }}>
                <Typography variant="h2" gutterBottom>Digital Skill App</Typography>
                <Typography variant="h5" gutterBottom>
                    DigitalSkillApp es una aplicación web diseñada para evaluar las competencias digitales de los ciudadanos de manera práctica y real, impulsado con inteligencia artificial.
                </Typography>
            </Box>
                
            <Box align="center" className="appweb__problem" >
                <Typography variant="h2" gutterBottom>¿Qué hace DigitalSkillApp?</Typography>
                <Typography variant="h5" gutterBottom>
                    Algo creo.
                </Typography>
            </Box>
            
        </Container>        
        </>
    );
};