import React from 'react';
import { Container, Typography, Box, Link, Grid2,IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../stylesheets/footer.css';

export default function Footer() {
  return (
    <Box className="footer" position="relative" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 7, width: '100%' }}>
        <Container maxWidth="xl" >
            <Grid2 container spacing={4}>
                {/* Información Básica */}
                <Grid2 item xs={12} sm={6}>
                    <Typography className="footer__text" variant="h6" gutterBottom>Digital Skill App
                    </Typography>
                    <Typography className="footer__text" variant="body2">Evaluamos tus competencias digitales según el marco europeo DigComp 2.2.</Typography>
                </Grid2>

                {/* Enlaces de Navegación */}
                <Grid2 item xs={12} sm={3}>
                    <Typography className="footer__text" variant="h6" gutterBottom> Navegación</Typography>
                    <Link className="footer__text" variant="body2" href="/" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                    Inicio
                    </Link>
                    <Link className="footer__text" variant="body2" href="/DigitalSkillApp" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                    ¿Qué es Digital Skill App?
                    </Link>
                    <Link className="footer__text" variant="body2" href="/NuestroEquipo" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                    Nuestro Equipo
                    </Link>
                    <Link className="footer__text" variant="body2" href="/Contacto" color="inherit" underline="none" sx={{ display: 'block' }}>
                    Contacto
                    </Link>
                </Grid2>

                {/* Enlaces de Redes Sociales */}
                <Grid2 item xs={12} sm={3}>
                    <Typography className="footer__text" variant="h6" gutterBottom>Síguenos</Typography>
                    <IconButton aria-label="fingerprint" href='https://www.instagram.com/digitalskillapp/'>
                        <InstagramIcon sx={{color: 'white'}}/>
                    </IconButton>
                    <IconButton aria-label="fingerprint" href='https://www.linkedin.com/'>
                        <LinkedInIcon sx={{color: 'white'}} />
                    </IconButton>
                </Grid2>
            </Grid2>

            {/* Derechos Reservados */}
            <Box mt={3} className="footer__rights">
            <Typography className="footer__text" variant="h8" align="center">
                &copy; {new Date().getFullYear()} Digital Skill App. Todos los derechos reservados.
            </Typography>
            </Box>
        </Container>
    </Box>
  )
};