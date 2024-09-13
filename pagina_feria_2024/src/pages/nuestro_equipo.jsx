import React from 'react';
import { Typography, Paper, IconButton, Stack, Grid2, Divider, Avatar } from '@mui/material';
import '../stylesheets/nuestro_equipo.css';
import logo from '../assets/Logo2.svg';
import m1 from '../assets/members/member-1.jfif';
import m2 from '../assets/members/member-2.jfif';
import m3 from '../assets/members/member-3.jfif';
import m4 from '../assets/members/member-4.jfif';
import m5 from '../assets/members/member-5.jfif';
import m6 from '../assets/members/member-6.jfif';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function NuestroEquipo() {
    return (
        <Grid2 container direction='row' justifyContent='center' spacing={2}>
            <Grid2 container direction='column' size={4}>
                <Typography className="team__title--logo" align='center' gutterBottom>StormCat</Typography>
                <Grid2 container direction='column' spacing={8}>
                    <Grid2 container direction='row' spacing={8}>
                        <img alt="logo" className="team__company--logo" src={logo}/>
                        <Typography className="team__text">Te ayudamos a resolver tus problemas tecnológicos.</Typography>
                    </Grid2>
                    <Stack divider={<Divider flexItem />} spacing={5}>
                        <Stack direction='row' sx={{justifyContent:'space-between'}}>
                            <Typography className="team__title" variant='h4'>Valores</Typography>
                            <Typography className="team__text" variant='body1'>Compromiso - Innovación - Perseverancia</Typography>
                        </Stack>
                        <Stack direction='row-reverse' sx={{justifyContent:'space-between'}}>
                            <Typography className="team__title" variant='h4'>Misión</Typography>
                            <Typography className="team__text" variant='body1'>Entregar soluciones tecnológicas efectivas a los ciudadanos.</Typography>
                        </Stack>
                        <Stack direction='row' sx={{justifyContent:'space-between'}}>
                            <Typography className="team__title" variant='h4'>Visión</Typography>
                            <Typography className="team__text" variant='body1'>Ser la empresa líder en soluciones tecnológicas para la ciudadanía.</Typography>
                        </Stack>
                    </Stack>
                </Grid2>
            </Grid2>
            <Grid2 direction='column' sx={{ alignItems: 'center', maxWidth: '80vh'}}>
                <Typography className="team__title--logo" align='center' gutterBottom>Nuestro Equipo</Typography>
                <Grid2 container spacing={{ xs: 3, md: 4 }} sx={{ justifyContent: 'center' }}>
                    {[{ name: 'Sebastián Baeza', role: 'Product Owner', img: m1, linkedin: 'https://www.linkedin.com/in/sebastian-baeza-avello/' },
                    { name: 'Valentina Cisternas', role: 'Fullstack Developer', img: m2, linkedin: 'https://www.linkedin.com/in/valentina-cisternas-ocaranza-186573303/' },
                    { name: 'Alonso Herrera', role: 'Scrum Master', img: m3, linkedin: 'https://www.linkedin.com/in/alonso-herrerao/' },
                    { name: 'Francisca González', role: 'Fullstack Developer', img: m4, linkedin: 'https://www.linkedin.com/in/francisca-gonzalez-bastias/' },
                    { name: 'Nicolás Pizarro', role: 'Fullstack Developer', img: m5, linkedin: 'https://www.linkedin.com/in/nicolas-pizarro-talamilla-367179300/' },
                    { name: 'Daniela Sánchez', role: 'Fullstack Developer', img: m6, linkedin: 'https://www.linkedin.com/in/daniela-s%C3%A1nchez-nizza-a00453263/' }
                    ].map((member, index) => (
                        <Paper component={Grid2} key={index} container direction='column' sx={{ padding: '1vh', alignItems: 'center' }}>
                            <Avatar alt={member.name} sx={{ width: '15vh', height: '15vh', marginBottom: '1vh' }} src={member.img} />
                            <Typography className="team__text--bold" align='center' >{member.name}</Typography>
                            <Typography className="team__text" align='center' >{member.role}</Typography>
                            <IconButton href={member.linkedin} size="small"><LinkedInIcon fontSize="small" /></IconButton>
                        </Paper>
                    ))}
                </Grid2>
            </Grid2>

        </Grid2>
    );
};
