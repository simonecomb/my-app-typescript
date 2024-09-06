import { FC, ReactElement, ReactNode, useEffect, useState } from 'react';
import styles from './InfoUtente.module.css';
import axios from 'axios';
 
interface InfoUtenteProps {};
 
const InfoUtente: FC<InfoUtenteProps> = () => {
 
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
                    console.log("User ID: " + response.data.id);
                    console.log("Name: " + response.data.name);
                    console.log("UserName: " + response.data.username);
                    console.log("Mail: " + response.data.email);
 
                    console.log("Company: " + response.data.company.name);
 
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
        InfoUtente
        </>
    );
}

export default InfoUtente;