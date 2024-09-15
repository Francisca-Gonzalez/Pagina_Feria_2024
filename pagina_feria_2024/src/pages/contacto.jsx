// import React from 'react';
// import {TextField,Button, Paper,Grid2,Typography}from '@mui/material';
// import logo from '../assets/Logo2.png';
// import '../stylesheets/contacto.css';

// export default function Contacto () {
//     return (
//     <Grid2 container direction='row' spacing={5} sx={{justifyContent:'center'}}>
//         <Grid2 container spacing={5} direction="column">
//             <Grid2 container spacing={3} alignItems="center">
//                 <Grid2>
//                     <img alt="logo" className="team__company--logo" src={logo} />
//                 </Grid2>
//                 <Grid2>
//                     <Typography variant='h4' align='center' gutterBottom>StormCat</Typography>
//                     <Typography variant='body2'>Te ayudamos a resolver tus problemas tecnológicos.</Typography>
//                 </Grid2>
//             </Grid2>
//             <Paper component={Grid2} container className='Paper-contacto' direction='column'>
//                 <Typography variant='h4' align='center' gutterBottom>Escribenos</Typography>
//                 <TextField id="name" label="Nombre" variant="standard" margin='normal' required />
//                 <TextField id="email" label="Correo Electrónico" variant="standard" margin='normal' required />
//                 <TextField id="Company" label="Empresa" variant="standard" margin='normal' required />
//                 <TextField id="Country" label="Pais" variant="standard" margin='normal' required />
//                 <TextField id="message" label="Mensaje" multiline variant="standard" margin='normal' required />
//                 <Button variant='contained' size='small' type="submit">Enviar</Button>
//             </Paper>
//         </Grid2>
//             <Paper component={Grid2} container direction='column' className='Paper-contacto' spacing={3}>
//                 <Grid2>
//                     <Typography align='center' variant='h4'>Visítanos en la 32° Feria Del Software</Typography>
//                 </Grid2>
//                 <Grid2>
//                 <iframe title='Map' 
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213082.8514539463!2d-70.69290267867122!3d-33.438374227605465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d006fa56ee51%3A0x81dacfbe20db68cf!2sUniversidad%20T%C3%A9cnica%20Federico%20Santa%20Mar%C3%ADa%2C%20Campus%20San%20Joaqu%C3%ADn!5e0!3m2!1sen!2scl!4v1726111353666!5m2!1sen!2scl"
//                     width="850"
//                     height="550"
//                     style={{border:0}}
//                     allowfullscreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                 />
//                 </Grid2>
//             </Paper>
//         </Grid2>
//     );
// };
import React, { useState } from 'react';
import { TextField, Button, Paper, Grid, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import logo from '../assets/Logo2.png';
import '../stylesheets/contacto.css';

export default function Contacto() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        country: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_gya3v3m', 'template_cna6f48', formData, 'vo8c9jZA-MhXG-H8U')
            .then((result) => {
                console.log('Correo enviado:', result.text);
                alert('Correo enviado correctamente.');
            }, (error) => {
                console.log('Error al enviar el correo:', error.text);
                alert('Hubo un error al enviar el correo.');
            });
    };

    return (
        <Grid container direction="column" spacing={5} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
                <Paper className='contact-form' sx={{ padding: 2 }}>
                    <Grid container direction="column" spacing={3} alignItems="center">
                        <Grid item>
                            <img alt="logo" className="team__company--logo" src={logo} />
                        </Grid>
                        <Grid item>
                            <Typography variant='h4' align='center' gutterBottom>StormCat</Typography>
                            <Typography variant='body2' align='center'>Te ayudamos a resolver tus problemas tecnológicos.</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h4' align='center' gutterBottom>Escríbenos</Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    id="name"
                                    label="Nombre"
                                    variant="standard"
                                    margin='normal'
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <TextField
                                    id="email"
                                    label="Correo Electrónico"
                                    variant="standard"
                                    margin='normal'
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <TextField
                                    id="company"
                                    label="Empresa"
                                    variant="standard"
                                    margin='normal'
                                    required
                                    value={formData.company}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <TextField
                                    id="country"
                                    label="País"
                                    variant="standard"
                                    margin='normal'
                                    required
                                    value={formData.country}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <TextField
                                    id="message"
                                    label="Mensaje"
                                    multiline
                                    variant="standard"
                                    margin='normal'
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <Button variant='contained' size='small' type="submit">Enviar</Button>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper className='Paper-contacto' sx={{ padding: 2 }}>
                    <Typography align='center' variant='h4' gutterBottom>Visítanos en la 32° Feria Del Software</Typography>
                    <iframe title='Map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213082.8514539463!2d-70.69290267867122!3d-33.438374227605465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d006fa56ee51%3A0x81dacfbe20db68cf!2sUniversidad%20T%C3%A9cnica%20Federico%20Santa%20Mar%C3%ADa%2C%20Campus%20San%20Joaqu%C3%ADn!5e0!3m2!1sen!2scl!4v1726111353666!5m2!1sen!2scl"
                        width="100%"
                        height="550"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Paper>
            </Grid>
        </Grid>
    );
}

