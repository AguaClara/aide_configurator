import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import $ from "jquery";
var GenerateSchema = require('generate-schema');


const theme = createTheme();

class ConfigJSONForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = this.props.value;
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(typeof (event.target.elements.config.value));
    console.log(event.target.elements.config.value);

    var inputJson = JSON.parse(event.target.elements.config.value);
    const mySchema = GenerateSchema.json(inputJson);

    var properties = mySchema.properties; 
    var keys = Object.keys(properties);
    for (var k in keys) {
      $.extend(properties[keys[k]], {default: inputJson[keys[k]]});
    }
    delete mySchema.$schema;
    console.log(mySchema);
    this.props.callback(mySchema);
  }
   

  render(){
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Typography component="h1" variant="h5">
            Input a Configuration JSON
        </Typography>
        <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="config"
              name="config"
              autoFocus
              multiline
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
  
      </Container>
    </ThemeProvider>
  );
        }
}

export default ConfigJSONForm