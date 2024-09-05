import { FC, ReactElement, ReactNode, useState } from 'react';
import styles from './Logout.module.css';


import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Button
} from "@mui/material";


// To navigate to another component
import { useNavigate } from 'react-router-dom';

interface LogoutProps {};

const Logout: FC<LogoutProps> = () => {
    // To navigate to another component
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const handleCancel = () => {
        // To navigate to another component
        navigate("/");
    }

    const handleAPILogout = async () => {

        /* const API_URL = urlRootAPI + "ManageAccount/Logout";
        console.log(API_URL);
        debugger;
        await axios.post(API_URL, "", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((response) => {
          if(response.data){
            setIsAuthenticated(response.data);
            console.log(response.data);
            console.log(response.status);
    
            localStorage.clear();
            // To navigate to another component
            navigate("/");
          }
        })
        .catch((error) => {
          localStorage.clear()
          console.log(error);
        }); */
        
        setIsAuthenticated(false);
        localStorage.clear();
        // To navigate to another component
        navigate("/");
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
              <Typography variant="h5">Are you sure to Logout?</Typography>
    
              <Button color="error"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
    
                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleAPILogout}
                >
                  Logout
                </Button>
              </Box>
          </Container>
          <br></br>
        </>
      )
}

export default Logout;
