import css from './ContactForm.module.css';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Container, createTheme, CssBaseline, IconButton, TextField, ThemeProvider, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme();

export default function ContactForm({ setModalOpen }) {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();

      const data = new FormData(e.currentTarget);

      if (!data.get('name') || !data.get('number')) {
        return toast.warn('Please fill in all fields');
      }

      const form = e.currentTarget;
      let presentContact = false;

      contacts.map(({name}) => {
      if (name === form.name.value) {

        form.reset();

        presentContact = true;
        return toast.warn(`${name} is already in contacts`);
      } else {
        return null;
      }
    });

    if (!presentContact) {
      dispatch(addContact({
        name: data.get('name'),
        number: data.get('number'),
      }));

      form.reset();
      setModalOpen(false);
    }
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
            <IconButton
              type="button"
              onClick={() => setModalOpen(false)}
              color="error"
              className={css.btn_close}
            >
              <CloseIcon />
            </IconButton>
            <Typography component="h1" variant="h5">
              Add the contact to your contact book
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="number"
                label="Number"
                type="number"
                id="number"
              />
  
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add to contacts
              </Button>
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    );
}

ContactForm.propTypes = {
  setModalOpen: propTypes.func.isRequired,
};