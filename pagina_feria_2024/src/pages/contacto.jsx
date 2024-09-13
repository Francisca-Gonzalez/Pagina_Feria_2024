import React from 'react';
import {TextField,Button, Paper,Grid2,Typography}from '@mui/material';
import logo from '../assets/Logo2.svg';
import '../stylesheets/contacto.css';

export default function Contacto () {
    return (
    <Grid2 container direction='row' spacing={5} sx={{justifyContent:'center'}}>
        <Grid2 container spacing={5} direction="column">
            <Grid2 container spacing={3} alignItems="center">
                <Grid2>
                    <img alt="logo"  className="team__company--logo" src={logo} />
                </Grid2>
                <Grid2>
                    <h1>StormCat</h1>
                    <p>Te ayudamos a resolver tus ...........</p>
                </Grid2>
            </Grid2>
            <Paper component={Grid2} container className='Paper-contacto' direction='column'>
                <Typography variant='h4' align='center' gutterBottom>Escribenos</Typography>
                <TextField id="name" label="Nombre" variant="standard" margin='normal' required />
                <TextField id="email" label="Correo Electrónico" variant="standard" margin='normal' required />
                <TextField id="Company" label="Empresa" variant="standard" margin='normal' required />
                <TextField id="Country" label="Pais" variant="standard" margin='normal' required />
                <TextField id="message" label="Mensaje" multiline variant="standard" margin='normal' required />
                <Button variant='contained' size='small' type="submit">Enviar</Button>
            </Paper>
        </Grid2>
        <Grid2 container spacing={3} direction='column'>
            <Paper component={Grid2} className='Paper-contacto'>
                <Typography variant="h4" align='center'>Servicios</Typography>
                <Grid2 container sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 5 }}>
                    <Grid2 xs={6} md={3} className="homepage__griditem">
                        <Typography className="homepage__text" variant="h6" gutterBottom>Pruebas Personalizados</Typography>
                        <Typography className="homepage__text">Realiza pruebas adaptadas a tu nivel y habilidades.</Typography>
                    </Grid2>
                    <Grid2 xs={6} md={3} className="homepage__griditem">
                        <Typography className="homepage__text" variant="h6" gutterBottom>Actividades Prácticas</Typography>
                        <Typography className="homepage__text">Pruebas reales que simulan situaciones cotidianas.</Typography>
                    </Grid2>
                    <Grid2 xs={6} md={3} className="homepage__griditem">
                        <Typography className="homepage__text" variant="h6" gutterBottom>Basado en DigComp 2.2</Typography>
                        <Typography className="homepage__text">Desarrolla competencias clave según estándares europeos.</Typography>
                    </Grid2>
                    <Grid2 xs={6} md={3} className="homepage__griditem">
                        <Typography className="homepage__text" variant="h6" gutterBottom>IA Generativa</Typography>
                        <Typography className="homepage__text">Genera preguntas y analiza respuestas con IA avanzada.</Typography>
                    </Grid2>
                </Grid2>
            </Paper>
            <Paper component={Grid2} container direction='row' className='Paper-contacto' spacing={3}>
                <Grid2 sx={{alignContent: 'center'}}>
                    <Typography variant='h4'>Visítanos en la feria</Typography>
                </Grid2>
                <Grid2>
                <iframe title='Map' 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213082.8514539463!2d-70.69290267867122!3d-33.438374227605465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d006fa56ee51%3A0x81dacfbe20db68cf!2sUniversidad%20T%C3%A9cnica%20Federico%20Santa%20Mar%C3%ADa%2C%20Campus%20San%20Joaqu%C3%ADn!5e0!3m2!1sen!2scl!4v1726111353666!5m2!1sen!2scl"
                    width="850"
                    height="300"
                    style={{border:0}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                />
                </Grid2>
            </Paper>
        </Grid2>
    </Grid2>
    );
};