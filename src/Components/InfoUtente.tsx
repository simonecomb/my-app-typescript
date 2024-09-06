import { FC, ReactElement, ReactNode, useEffect, useState } from 'react';
import styles from './InfoUtente.module.css';
import axios from 'axios';

import { LockOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import { UserData } from '../Models/userdata'; 


import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";

interface InfoUtenteProps {};

const InfoUtente: FC<InfoUtenteProps> = () => {

    const [userInfo, setUserInfo] = useState<UserData>();

    // const [userInfoArr[], setUserInfoArr] = useState<UserData[]>([]);

    useEffect(() => {
       
        // declare the data fetching function
        const getUserInfo = async () => {
             // Dal localstorage prendere l'informazione dell'utente che ha scritto il post 
            const idUtente = localStorage.getItem("userid");

            const urlRootAPI = "https://jsonplaceholder.typicode.com/";
            const API_URL = urlRootAPI + "users/" + idUtente;
            console.log("getUserInfo - URL Endpoint = " +  API_URL);

            debugger;
            // const data = await fetch('https://yourapi.com');
            await axios.get(API_URL, {
                headers: {
                "Content-Type": "application/json"
                }
            })
            .then((response) => {
                debugger;
                if(response.data){
                    console.log(response.data);
                    console.log(response.status);

                    setUserInfo(response.data);
                    

                    /* console.log("User ID: " + response.data.id);
                    console.log("Name: " + response.data.name);
                    console.log("UserName: " + response.data.username);
                    console.log("Mail: " + response.data.email);
                    console.log("Company: " + response.data.company.name); */

                    /* const deserialized_data = response.data;

                    console.log("User ID: " + deserialized_data.id);
                    console.log("Name: " + deserialized_data.name);
                    console.log("UserName: " + deserialized_data.username);
                    console.log("Mail: " + deserialized_data.email);
                    console.log("Company: " + deserialized_data.company.name);

                    const serialized_data = JSON.stringify(deserialized_data);
                    console.log("JSON.stringify(deserialized_data): " + serialized_data);

                    debugger;
                    const infoUtente = JSON.parse(serialized_data);
                    console.log("JSON.parse(serialized_data): " + infoUtente);

                    console.log("User ID: " + infoUtente.id);
                    console.log("Name: " + infoUtente.name);
                    console.log("UserName: " + infoUtente.username);
                    console.log("Mail: " + infoUtente.email);
                    console.log("Company: " + infoUtente.company.name); */
                  
                }
            })
            .catch((error) => {
                console.log(error);
            });         
        }
      
        // call the function
        getUserInfo()
          // make sure to catch any error
          .catch(console.error);
    }, []);

    return (
        <>
         {/* NomeUtente: {userInfo?.name} Company: {userInfo?.company.name}  City: {userInfo?.address.city}  Lat: {userInfo?.address.geo.lat} Lng: {userInfo?.address.geo.lng}  Street: {userInfo?.address.street} */}
        
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
                <Typography variant="h5">Info User Data with UserID {userInfo?.id}</Typography>
                <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoFocus
                        aria-readonly
                        value={userInfo?.name}
                    />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        aria-readonly
                        value={userInfo?.email}
                       
                    />
                    </Grid>
                </Grid>
                
                <Grid container justifyContent="flex-end">
                    <Grid item>
                    <Link to="/">Back</Link>
                    </Grid>
                </Grid>
                </Box>
            </Box>
            </Container>
        </> 
    );
}

export default InfoUtente;


