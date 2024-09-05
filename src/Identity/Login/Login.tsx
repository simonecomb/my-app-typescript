import { FC, ReactElement, ReactNode, useState } from 'react';
import styles from './Login.module.css';

import { LoginData } from '../../Models/logindata';

import { Link, useNavigate } from "react-router-dom";

import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid2
} from "@mui/material";



interface LoginProps {};

const Login: FC<LoginProps> = () => {

    // To navigate to another component
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // TODO Manage the data from settings
    const urlRootMVCController = "https://localhost:7054/Account/";
    // const urlRootAPI = "https://localhost:7078/api/";
    const urlRootAPI = "https://localhost:44316/api/";

   /*  function handleLogin(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error('Function not implemented.');
    } */

    const handleLogin = async () => {

        const formData = new FormData();
        formData.set('Username', email);
        formData.set('Password', password);
    
        localStorage.setItem("username", email);
    
        const API_URL = urlRootMVCController + "LoginFromReact";
        console.log(API_URL);
        debugger;

        /* await axios.post(API_URL, formData, {
            headers: {
            "Content-Type": "multipart/form-data"
            }
        })
        .then((response) => {
            if(response.data){
                setIsAuthenticated(response.data);
                console.log(response.data);
                console.log(response.status);
                localStorage.setItem("isAuthenticated", response.data);
        
                // To navigate to another component
                navigate("/");
            }
        })
        .catch((error) => {
            localStorage.clear();
            console.log(error);
        });
         */

        if(email === 'p.tardiolobonifazi@vivasoft.it' || password === 'Paperino'){
          setIsAuthenticated(true);
          localStorage.setItem("isAuthenticated", 'true');
          // To navigate to another component
          navigate("/");
        }
    };

    return (
        <>
        <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            
            <Grid2 container justifyContent={"flex-end"}>
              <Grid2 size={{ xs: 6, md: 8 }}>
                    <Link to="/register">Don't have an account? Register</Link>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Container>
        </>
    );
}

export default Login;
