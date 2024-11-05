import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';
import HeaderEmp from '../Employee/HeaderEmp';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.h4,
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    height: 200,
    lineHeight: '200px',
    fontFamily: 'RSU'

}));

const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#64DD17',
            contrastText: '#ffffff',
            light: '#1fb814',
        },
        secondary: {
            main: '#fdffff',
            light: '#bff2f2',
        },
        
    },
});


export default function HomepageEmp() {
    return (

        <Box>
            <HeaderEmp />
            <Grid container spacing={1}
            >
                {[lightTheme].map((theme, index) => (
                    <Grid item xs={10} key={index}
                    
                    >
                        <ThemeProvider theme={theme}>
                            <Box
                                sx={{

                                    mt: 1,
                                    ml: 30,
                                    p: 10,                   
                                    display: 'grid',
                                    gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 10,
                                   
                                }}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elevation) => (
                                    <Item key={elevation} elevation={5}
                                        sx={{
                                            bgcolor: 'primary.light',
                                        }}
                                    >
                                        {`โต๊ะ ${elevation}`}
                                    </Item>
                                ))}
                            </Box>
                        </ThemeProvider>
                    </Grid>
                ))}
            </Grid>
        </Box >

    );
}
