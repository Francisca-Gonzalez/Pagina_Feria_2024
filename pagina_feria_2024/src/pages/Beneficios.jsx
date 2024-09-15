import React from 'react';
import { Grid2, Typography } from '@mui/material';
const Beneficios = () => {
    return (
    <Grid2 container className="homepage__grid" >
        <Grid2 className="homepage__griditem" xs={1} md={3}>
            <Typography className="homepage__text" variant="h6" gutterBottom>Pruebas Personalizados</Typography>
            <Typography className="homepage__text">Realiza pruebas adaptadas a tu nivel y habilidades.</Typography>
        </Grid2>
        <Grid2 className="homepage__griditem" xs={1} md={3}>
            <Typography className="homepage__text" variant="h6" gutterBottom>Actividades Prácticas</Typography>
            <Typography className="homepage__text">Pruebas reales que simulan situaciones cotidianas.</Typography>
        </Grid2>
        <Grid2 className="homepage__griditem" xs={1} md={3}>
            <Typography className="homepage__text" variant="h6" gutterBottom>Basado en DigComp 2.2</Typography>
            <Typography className="homepage__text">Desarrolla competencias clave según estándares europeos.</Typography>
        </Grid2>
        <Grid2 className="homepage__griditem" xs={1} md={3}>
            <Typography className="homepage__text" variant="h6" gutterBottom>IA Generativa</Typography>
            <Typography className="homepage__text">Genera preguntas y analiza respuestas con IA avanzada.</Typography>
        </Grid2>
        <Grid2 className="homepage__griditem" xs={1} md={3}>
            <Typography className="homepage__text" variant="h6" gutterBottom>Secuencia y medición del tiempo</Typography>
            <Typography className="homepage__text">...</Typography>
        </Grid2>
        <Grid2 className="homepage__griditem" xs={1} md={3}>
            <Typography className="homepage__text" variant="h6" gutterBottom>Feedback completo</Typography>
            <Typography className="homepage__text">...</Typography>
        </Grid2>
    </Grid2>
    );
};

export default Beneficios;