import { useDispatch } from 'react-redux';
import * as React from 'react';
import { register } from 'redux/auth/authOperations';
import { Avatar, Box, Button, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from '@mui/material';
import { useState } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';

const theme = createTheme();

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const [isCorrectEmailPassword, setIsCorrectEmailPassword] = useState(true);

    const onSubmit = evt => {
        evt.preventDefault();
        const data = new FormData(evt.currentTarget);

        dispatch(register({
            name: data.get('userName'),
            email: data.get('email'),
            password: data.get('password'),
        }));
        setTimeout(function () {
            setIsCorrectEmailPassword(false);
          }, 300);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                    <Typography component="h1" variant="h5">Register</Typography>
                    <Box
                        component="form"
                        onSubmit={onSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="User Name"
                            name="userName"
                            autoComplete="userName"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {!isCorrectEmailPassword ? (<p  className={css.red_label}>This user is already registered</p>) : null}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}