import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import '../stylesheets/inicio.css';
import logo from '../assets/Logo.svg';

export default function Inicio() {
    return (
        <>
        <Container maxWidth="xl" className="appweb" sx={{ mt: 10 }}>
            <Typography variant="h2" gutterBottom>Digital Skill App</Typography>
            <Typography variant="h5" gutterBottom>
                DigitalSkillApp es una aplicación web diseñada para evaluar las competencias digitales de los ciudadanos de manera práctica y real, impulsado con inteligencia artificial.
            </Typography>
            <Box className="appweb__problem" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography>¿Qué hace DigitalSkillApp?</Typography>
            </Box>
            
        </Container>

        
        </>
    );
};