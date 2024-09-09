import React from 'react';
import { Container, Typography, Box, Link, Grid } from '@mui/material';
import '../stylesheets/footer.css';

export default function Footer() {
  return (
    <Box className="footer" position="relative" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 5, width: '100%' }}>
        <Container maxWidth="xl" >
            <Grid container spacing={4}>
                {/* Información Básica */}
                <Grid item xs={12} sm={6}>
                    <Typography className="footer__text" variant="h6" gutterBottom>
                    Digital Skill App
                    </Typography>
                    <Typography className="footer__text" variant="body2">
                    Evaluamos tus competencias digitales según el marco europeo DigComp 2.2.
                    </Typography>
                </Grid>

                {/* Enlaces de Navegación */}
                <Grid item xs={12} sm={3}>
                    <Typography className="footer__text" variant="h6" gutterBottom>
                    Navegación
                    </Typography>
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
                </Grid>

                {/* Enlaces de Redes Sociales */}
                <Grid item xs={12} sm={3}>
                    <Typography className="footer__text" variant="h6" gutterBottom>
                    Síguenos
                    </Typography>
                    <Link className="footer__text" variant="body2" href="https://facebook.com" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                    Instagram
                    </Link>
                    <Link className="footer__text" variant="body2" href="https://linkedin.com" color="inherit" underline="none" sx={{ display: 'block' }}>
                    LinkedIn
                    </Link>
                </Grid>
            </Grid>

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