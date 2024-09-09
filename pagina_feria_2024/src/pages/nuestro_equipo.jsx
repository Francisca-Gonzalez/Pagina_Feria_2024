import React from 'react';
import { Container, Typography, Box, Grid, Card } from '@mui/material';
import '../stylesheets/nuestro_equipo.css';
import logo from '../assets/Logo.svg';
import m1 from '../assets/members/member-1.jfif';
import m2 from '../assets/members/member-2.jfif';
import m3 from '../assets/members/member-3.jfif';
import m4 from '../assets/members/member-4.jfif';
import m5 from '../assets/members/member-5.jfif';
import m6 from '../assets/members/member-6.jfif';

export default function Inicio() {
    return (
        <>
        <Container maxWidth="xl" sx={{ mt: 10 }}>
            <Grid className="team" sx={{ mb: 2}}>
                <Grid className="team__company--logo" item xs={12} md={4}>
                    <Typography className="team__title--logo">StormCat</Typography>
                    <img alt="logo" className="team__img" src={logo}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid className="team__company">
                        <Grid className="team__element" item xs={12}>
                            <Typography className="team__title">Valores</Typography>
                            <Typography className="team__text">Compromiso - Innovación - Perseverancia</Typography>
                        </Grid>
                        <Grid className="team__element" item xs={12}>
                            <Typography className="team__title">Misión</Typography>
                            <Typography className="team__text">Entregar soluciones tecnológicas efectivas a los ciudadanos.</Typography>
                        </Grid>
                        <Grid className="team__element" item xs={12}>
                            <Typography className="team__title">Visión</Typography>
                            <Typography className="team__text">Ser la empresa líder en soluciones tecnológicas para la ciudadanía.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Typography className="team__title--logo" sx={{ mb: 4}} >Nuestro Equipo</Typography>
            <Grid className="team" sx={{ mb: 4}}>
                <Grid item xs={4}>
                    <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img alt="logo" className="team__img" src={m1}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                            <Typography className="team__text--bold">Sebastián Baeza</Typography>
                            <Typography className="team__text">Product Owner</Typography>
                            <a href="https://www.linkedin.com/in/sebastian-baeza-avello/">Linkedin</a>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img alt="logo" className="team__img" src={m2}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                            <Typography className="team__text--bold">Valentina Cisterna</Typography>
                            <Typography className="team__text">Fullstack Developer</Typography>
                            <a href="https://www.linkedin.com/in/valentina-cisternas-ocaranza-186573303/">Linkedin</a>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img alt="logo" className="team__img" src={m3}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                            <Typography className="team__text--bold">Alonso Herrera</Typography>
                            <Typography className="team__text">Scrum Master</Typography>
                            <a href="https://www.linkedin.com/in/alonso-herrerao/">Linkedin</a>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            <Grid className="team" sx={{ mb: 4}}>
                <Grid item xs={4}>
                    <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img alt="logo" className="team__img" src={m4}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                            <Typography className="team__text--bold">Francisca González</Typography>
                            <Typography className="team__text">Fullstack Developer</Typography>
                            <a href="https://www.linkedin.com/in/francisca-gonzalez-bastias/">Linkedin</a>
                        </Box>
                        
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img alt="logo" className="team__img" src={m5}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                            <Typography className="team__text--bold">Nicolás Pizarro</Typography>
                            <Typography className="team__text">Fullstack Developer</Typography>
                            <a href="https://www.linkedin.com/in/nicolas-pizarro-talamilla-367179300/">Linkedin</a>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img alt="logo" className="team__img" src={m6}/>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                            <Typography className="team__text--bold">Daniela Sánchez</Typography>
                            <Typography className="team__text">Fullstack Developer</Typography>
                            <a href="https://www.linkedin.com/in/daniela-s%C3%A1nchez-nizza-a00453263/">Linkedin</a>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            
            

        </Container>
        </>
    );
};