// import React from 'react';
// import { Typography, Paper, IconButton, Stack, Grid2, Divider, Avatar } from '@mui/material';
// import '../stylesheets/nuestro_equipo.css';
// import logo from '../assets/Logo2.png';
// import m1 from '../assets/members/1.png';
// import m2 from '../assets/members/2.png';
// import m3 from '../assets/members/3.png';
// import m4 from '../assets/members/4.png';
// import m5 from '../assets/members/5.png';
// import m6 from '../assets/members/6.png';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// export default function NuestroEquipo() {
//     return (
//         <Grid2 container direction='row' justifyContent='center' spacing={2}>
//             <Grid2 container md={6} direction='column' size={4}>
//                 <Typography variant='h1' className="team__title--logo" align='center' gutterBottom>StormCat</Typography>
//                 <Grid2 container direction='column' spacing={8}>
//                     <Grid2 container direction='row' spacing={8}>
//                         <img alt="logo" className="team__company--logo" Style="display: block; margin-left: auto; margin-right: auto" src={logo}/>
//                         {/* <Typography className="team__text" align="center">Te ayudamos a resolver tus problemas tecnológicos.</Typography> */}
//                     </Grid2>
//                     <Paper component={Stack} divider={<Divider/>} spacing={2} sx={{padding:'2vh'}}>
//                         <Stack direction='row' sx={{justifyContent:'space-between', alignItems: 'center'}}>
//                             <Typography className="team__title" variant='h4' padding='2vh' align='center'>Misión</Typography>
//                             <Typography className="team__text" variant='body1' padding='2vh' align='justify' sx={{width:'80%'}}>Brindar a la ciudadanía chilena un medio para demostrar su capacidad de manejarse en el mundo digital.</Typography>
//                         </Stack>
//                         <Stack direction='row-reverse' sx={{justifyContent:'space-between',alignItems: 'center'}}>
//                             <Typography className="team__title" variant='h4' padding='2vh' align='center'>Visión</Typography>
//                             <Typography className="team__text" variant='body1' padding='2vh' align='justify' sx={{width:'80%'}}>Contribuir y fomentar la creación de una sociedad inclusiva y tecnológicamente avanzada, siendo un referente en la certificación de competencias digitales en la ciudadanía.</Typography>
//                         </Stack>
//                     </Paper>
//                 </Grid2>
//             </Grid2>
//             <Grid2 direction='column' md={6} sx={{ alignItems: 'center', maxWidth: '80vh'}}>
//                 <Typography variant='h1' className="team__title--logo" align='center' gutterBottom>Nuestro Equipo</Typography>
//                 <Grid2 container spacing={{ xs: 3, md: 2 }} sx={{ justifyContent: 'center' }}>
//                     {[{ name: 'Sebastián Baeza', role: 'Product Owner', img: m1, linkedin: 'https://www.linkedin.com/in/sebastian-baeza-avello/' },
//                     { name: 'Valentina Cisternas', role: 'Marketing', img: m2, linkedin: 'https://www.linkedin.com/in/valentina-cisternas-ocaranza-186573303/' },
//                     { name: 'Alonso Herrera', role: 'Scrum Master', img: m3, linkedin: 'https://www.linkedin.com/in/alonso-herrerao/' },
//                 ].map((member, index) => (
//                     <Paper component={Grid2} key={index} md={4} container direction='column' sx={{ padding: '1vh', alignItems: 'center', minWidth: '25vh' }}>
//                             <Avatar className='memberImg' alt={member.name} sx={{ width: '15vh', height: '15vh', marginBottom: '1vh' }} src={member.img} />
//                             <Typography className="team__text--bold" align='center' >{member.name}</Typography>
//                             <Typography className="team__text" align='center' >{member.role}</Typography>
//                             <IconButton href={member.linkedin} size="small"><LinkedInIcon sx={{color:'gray'}}/></IconButton>
//                         </Paper>
//                     ))}
//                 </Grid2>
//                 <Grid2 container spacing={{ xs: 3, md: 2 }} sx={{ justifyContent: 'center' }}>
//                     {[
//                     { name: 'Francisca González', role: 'Encargada de UX', img: m4, linkedin: 'https://www.linkedin.com/in/francisca-gonzalez-bastias/' },
//                     { name: 'Nicolás Pizarro', role: 'Senior Developer', img: m5, linkedin: 'https://www.linkedin.com/in/nicolas-pizarro-talamilla-367179300/' },
//                     { name: 'Daniela Sánchez', role: 'Encargada de QA', img: m6, linkedin: 'https://www.linkedin.com/in/daniela-s%C3%A1nchez-nizza-a00453263/' }
//                 ].map((member, index) => (
//                     <Paper component={Grid2} key={index} md={4} container direction='column' sx={{ padding: '1vh', alignItems: 'center' }}>
//                             <Avatar className='memberImg' alt={member.name} sx={{ width: '15vh', height: '15vh', marginBottom: '1vh' }} src={member.img} />
//                             <Typography className="team__text--bold" align='center' >{member.name}</Typography>
//                             <Typography className="team__text" align='center' >{member.role}</Typography>
//                             <IconButton href={member.linkedin} size="small"><LinkedInIcon sx={{color:'gray'}}/></IconButton>
//                         </Paper>
//                     ))}
//                 </Grid2>
//             </Grid2>
//         </Grid2>
//     );
// };

import React from 'react';
import { Typography, Paper, IconButton, Stack, Grid, Divider, Avatar } from '@mui/material';
import '../stylesheets/nuestro_equipo.css';
import logo from '../assets/Logo2.png';
import m1 from '../assets/members/1.png';
import m2 from '../assets/members/2.png';
import m3 from '../assets/members/3.png';
import m4 from '../assets/members/4.png';
import m5 from '../assets/members/5.png';
import m6 from '../assets/members/6.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function NuestroEquipo() {
    return (
        <Grid container direction="row" spacing={2} sx={{ height: '100vh' }}>
            {/* Lado Izquierdo - Empresa */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h1" className="team__title--logo" align="center" gutterBottom>StormCat</Typography>
                <img alt="logo" className="team__company--logo" style={{ display: 'block', maxWidth: '200px', marginBottom: '20px' }} src={logo} />
                
                <Paper component={Stack} divider={<Divider />} spacing={2} sx={{ padding: '2vh', width: '80%' }}>
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography className="team__title" variant="h4" padding="2vh" align="center">Misión</Typography>
                        <Typography className="team__text" variant="body1" padding="2vh" align="justify" sx={{ width: '80%' }}>
                            Brindar a la ciudadanía chilena un medio para demostrar su capacidad de manejarse en el mundo digital.
                        </Typography>
                    </Stack>
                    <Stack direction="row-reverse" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography className="team__title" variant="h4" padding="2vh" align="center">Visión</Typography>
                        <Typography className="team__text" variant="body1" padding="2vh" align="justify" sx={{ width: '80%' }}>
                            Contribuir y fomentar la creación de una sociedad inclusiva y tecnológicamente avanzada, siendo un referente en la certificación de competencias digitales en la ciudadanía.
                        </Typography>
                    </Stack>
                </Paper>
            </Grid>

            {/* Lado Derecho - Miembros del equipo */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h1" className="team__title--logo" align="center" gutterBottom>Nuestro Equipo</Typography>
                
                {/* Contenedor de los miembros del equipo */}
                <Grid container spacing={3} justifyContent="center">
                    {[
                        { name: 'Sebastián Baeza', role: 'Product Owner', img: m1, linkedin: 'https://www.linkedin.com/in/sebastian-baeza-avello/' },
                        { name: 'Valentina Cisternas', role: 'Marketing', img: m2, linkedin: 'https://www.linkedin.com/in/valentina-cisternas-ocaranza-186573303/' },
                        { name: 'Alonso Herrera', role: 'Scrum Master', img: m3, linkedin: 'https://www.linkedin.com/in/alonso-herrerao/' },
                        { name: 'Nicolás Pizarro', role: 'Senior Developer', img: m5, linkedin: 'https://www.linkedin.com/in/nicolas-pizarro-talamilla-367179300/' },
                        { name: 'Francisca González', role: 'Encargada de UX', img: m4, linkedin: 'https://www.linkedin.com/in/francisca-gonzalez-bastias/' },
                        { name: 'Daniela Sánchez', role: 'Encargada de QA', img: m6, linkedin: 'https://www.linkedin.com/in/daniela-s%C3%A1nchez-nizza-a00453263/' }
                    ].map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Paper sx={{ 
                                padding: '2vh', 
                                textAlign: 'center', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                minHeight: '30vh'  // Asegura altura uniforme
                            }}>
                                <Avatar className='memberImg' alt={member.name} sx={{ width: '15vh', height: '15vh', marginBottom: '1vh' }} src={member.img} />
                                <Typography className="team__text--bold">{member.name}</Typography>
                                <Typography className="team__text">{member.role}</Typography>
                                <IconButton href={member.linkedin} size="small">
                                    <LinkedInIcon sx={{ color: 'gray' }} />
                                </IconButton>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

