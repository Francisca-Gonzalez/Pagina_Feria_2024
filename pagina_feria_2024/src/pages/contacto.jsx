import React from 'react';
import {TextField,Button, Paper,Grid2,Typography}from '@mui/material';
import logo from '../assets/Logo2.png';
import '../stylesheets/contacto.css';

export default function Contacto () {
    return (
    <Grid2 container direction='row' spacing={5} sx={{justifyContent:'center'}}>
        <Grid2 container spacing={5} direction="column">
            <Grid2 container spacing={3} alignItems="center">
                <Grid2>
                    <img alt="logo" className="team__company--logo" src={logo} />
                </Grid2>
                <Grid2>
                    <Typography variant='h4' align='center' gutterBottom>StormCat</Typography>
                    <Typography variant='body2'>Te ayudamos a resolver tus problemas tecnológicos.</Typography>
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
            <Paper component={Grid2} container direction='column' className='Paper-contacto' spacing={3}>
                <Grid2>
                    <Typography align='center' variant='h4'>Visítanos en la 32° Feria Del Software</Typography>
                </Grid2>
                <Grid2>
                <iframe title='Map' 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213082.8514539463!2d-70.69290267867122!3d-33.438374227605465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d006fa56ee51%3A0x81dacfbe20db68cf!2sUniversidad%20T%C3%A9cnica%20Federico%20Santa%20Mar%C3%ADa%2C%20Campus%20San%20Joaqu%C3%ADn!5e0!3m2!1sen!2scl!4v1726111353666!5m2!1sen!2scl"
                    width="850"
                    height="550"
                    style={{border:0}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </Grid2>
            </Paper>
        </Grid2>
    );
};