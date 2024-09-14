import React from 'react';
import { Typography, Box, Paper,Grid2, Container } from '@mui/material';
import '../stylesheets/digitalskillapp.css';

export default function Inicio() {
    return (
        <Container align='center' className="appweb">
            <Box align="center" sx={{ mb: 4 }}>
                <Typography variant="h2" gutterBottom>Digital Skill App</Typography>
                <Typography variant="h5" gutterBottom>
                    DigitalSkillApp es una aplicación web diseñada para evaluar las competencias digitales de los ciudadanos de manera práctica y real, impulsado con inteligencia artificial.
                </Typography>
            </Box>
            <Typography variant="h2" gutterBottom>¿Qué hace DigitalSkillApp?</Typography>
            <Grid2 spacing={10} align="center" className="appweb__problem" >
                <Paper component={Grid2} container className="appweb__paper" direction='row'>
                    <Box sx={{width:'50%',padding:'1vh'}}>
                        <Typography className="homepage__text" variant="h6" gutterBottom>Pruebas Personalizados</Typography>
                        <Typography className="homepage__text" varian='body'>DigitalSkillApp ofrece evaluaciones totalmente adaptadas a cada usuario. Utilizando algoritmos avanzados e inteligencia artificial, ajusta dinámicamente el tipo de preguntas y simulaciones en función de la competencia evaluada y el nivel correspondiente (básico, intermedio o avanzado) en tiempo real. Esto asegura que cada test sea relevante, desafiante y específico para el progreso individual del usuario.</Typography>
                    </Box>
                    <Box component='img' alt='uwu'  src=''/>
                </Paper>
                <Paper component={Grid2} container className="appweb__paper" direction='row'>
                    <Box sx={{width:'50%' ,padding:'1vh'}}>
                        <Typography className="homepage__text" variant="h6" gutterBottom>Actividades Prácticas</Typography>
                        <Typography className="homepage__text">La evaluación no se limita a preguntas teóricas, pues DigitalSkillApp presenta simulaciones interactivas y motiva al uso de entornos reales, como la gestión de correos electrónicos hasta la navegación en servicios de almacenamiento en la nube. Estas actividades replican situaciones cotidianas o dirigen a entornos comunmente utilizados en el entorno digital, permitiendo a los usuarios aplicar sus habilidades en un contexto realista y mejorar su desempeño de forma más efectiva.</Typography>
                    </Box>
                    <Box component='img' alt='uwu'  src=''/>
                </Paper>
                <Paper component={Grid2} container className="appweb__paper" direction='row'>
                    <Box sx={{width:'50%',padding:'1vh'}}>
                        <Typography className="homepage__text" variant="h6" gutterBottom>Basado en DigComp 2.2</Typography>
                        <Typography className="homepage__text">Nuestra plataforma se apoya en el marco europeo "DigComp 2.2", el estándar de referencia en competencias digitales. La app cubre todas las áreas clave, evaluando desde el conocimiento básico hasta el dominio avanzado de cada competencia digital, garantizando la evaluación de habilidades útiles y alineadas con las exigencias del mundo digital actual.</Typography>
                    </Box>
                    <Box component='img' alt='uwu'  src=''/>
                </Paper>
                <Paper component={Grid2} container className="appweb__paper" direction='row'>
                    <Box sx={{width:'50%',padding:'1vh'}}>
                        <Typography className="homepage__text" variant="h6" gutterBottom>IA Generativa</Typography>
                        <Typography className="homepage__text">Gracias a la inteligencia artificial generativa, cada prueba es única. La IA crea y evalua preguntas de desarrollo y simulaciones personalizadas en tiempo real, adaptadas al progreso y nivel del usuario. Esta tecnología asegura que cada evaluación sea un reto adecuado para cada etapa del aprendizaje, maximizando la efectividad de la experiencia de evaluación.</Typography>
                    </Box>
                    <Box component='img' alt='uwu'  src=''/>
                </Paper>
                <Paper component={Grid2} container className="appweb__paper" direction='row'>
                    <Box sx={{width:'50%',padding:'1vh'}}>
                        <Typography className="homepage__text" variant="h6" gutterBottom>Secuencia y medición del tiempo</Typography>
                        <Typography className="homepage__text">La evaluación sigue una secuencia lógica, desde las preguntas generadas por IA hasta las simulaciones prácticas. Además, el tiempo que el usuario toma para completar cada prueba es cuidadosamente medido y analizado, brindando un indicador adicional del dominio de la competencia.</Typography>
                    </Box>
                    <Box component='img' alt='uwu'  src=''/>
                </Paper>
                <Paper component={Grid2} container className="appweb__paper" direction='row'>
                    <Box sx={{width:'50%',padding:'1vh'}}>
                        <Typography className="homepage__text" variant="h6" gutterBottom>Feedback completo</Typography>
                        <Typography className="homepage__text">Al terminar la evaluación, el usuario recibe un informe detallado que incluye el puntaje total, el nivel de competencia alcanzado, el tiempo empleado y una clara indicación de si está capacitado en la competencia evaluada. Este feedback integral le permite conocer sus áreas de fortaleza y las que necesitan mejorar, brindando una visión clara de su progreso.</Typography>
                    </Box>
                    <Box component='img' alt='uwu'  src=''/>
                </Paper>
            </Grid2>
        </Container>
    );
};