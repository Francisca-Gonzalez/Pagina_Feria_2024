import React from 'react';
import { Typography,Paper, IconButton, Stack, Container,Grid2, Divider, Avatar } from '@mui/material';
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
        <Stack direction='row'>
            <Container>
                <Stack className="team" sx={{ mb: 3 }} direction='column' spacing={4}>
                    <Typography className="team__title--logo">StormCat</Typography>
                    <Stack direction='row'>
                        <img alt="logo" className="team__company--logo" src={logo} />
                        <Typography className="team__text">Te ayudamos a resolver tus problemas tecnológicos.</Typography>
                    </Stack>
                    <Stack >
                        <Typography className="team__title" align='left'>Valores</Typography>
                        <Typography className="team__text" variant='body1'>Compromiso - Innovación - Perseverancia</Typography>
                        <Divider />
                        <Typography className="team__title" align='rigth'>Misión</Typography>
                        <Typography className="team__text" variant='body1'>Entregar soluciones tecnológicas efectivas a los ciudadanos.</Typography>
                        <Divider />
                        <Typography className="team__title">Visión</Typography>
                        <Typography className="team__text" variant='body1'>Ser la empresa líder en soluciones tecnológicas para la ciudadanía.</Typography>
                        <Divider />
                    </Stack>
                </Stack>
            </Container>
            <Container>
                <Typography className="team__title--logo" gutterBottom align='center'>Nuestro Equipo</Typography>
                <Grid2 container spacing={{ xs: 6, md: 7 }} columns={{ xs: 3, sm: 7, md: 15 }}>
                    {[{ name: 'Sebastián Baeza', role: 'Product Owner', img: m1, linkedin: 'https://www.linkedin.com/in/sebastian-baeza-avello/' },
                    { name: 'Valentina Cisternas', role: 'Fullstack Developer', img: m2, linkedin: 'https://www.linkedin.com/in/valentina-cisternas-ocaranza-186573303/' },
                    { name: 'Alonso Herrera', role: 'Scrum Master', img: m3, linkedin: 'https://www.linkedin.com/in/alonso-herrerao/' },
                    { name: 'Francisca González', role: 'Fullstack Developer', img: m4, linkedin: 'https://www.linkedin.com/in/francisca-gonzalez-bastias/' },
                    { name: 'Nicolás Pizarro', role: 'Fullstack Developer', img: m5, linkedin: 'https://www.linkedin.com/in/nicolas-pizarro-talamilla-367179300/' },
                    { name: 'Daniela Sánchez', role: 'Fullstack Developer', img: m6, linkedin: 'https://www.linkedin.com/in/daniela-s%C3%A1nchez-nizza-a00453263/' }
                    ].map((member, index) => (
                        <Grid2 item key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                            <Paper component={Stack} direction='column'  sx={{alignItems: 'center',padding:'1vh'}}>
                                <Avatar alt={member.name} sx={{width:'130px',height:'130px'}}src={member.img} />
                                <Typography className="team__text--bold" align='center'>{member.name}</Typography>
                                <Typography className="team__text" align='center'>{member.role}</Typography>
                                <IconButton href={member.linkedin}><LinkedInIcon /></IconButton>
                            </Paper>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </Stack>
    );
};
