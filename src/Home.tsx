import { FC, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import styles from './Home.module.css';

// https://mui.com/material-ui/react-app-bar/
import MenuIcon from '@mui/icons-material/Menu';

import { PostData } from './Models/postdata';

import {
    AppBar,
    Box,
    Avatar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Stack,
    colors
  } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { AccountCircle, Square } from '@mui/icons-material';
import { deepOrange } from '@mui/material/colors';
import Layout from './MenuLayout/Layout';
import axios from 'axios';
// https://mui.com/material-ui/react-app-bar/


interface HomeProps {}

// const Home = ()  => {
const Home: FC<HomeProps> = () => {
    const [posts, setPosts] = useState<any[]>([]);

    const [hasPost, setHasPost] = useState(false);

    let isAuthenticated = localStorage.getItem("isAuthenticated");
    let username = localStorage.getItem("username");
    
    // To navigate to another component
    const navigate = useNavigate();

    const handleLogin = () => {
         // To navigate to another component
        navigate("/Login");
    }

    const handleLogout = () => {
        // To navigate to another component
       navigate("/Logout");
    }

    function stringToColor(string: string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
    }

    function stringAvatar(name: string) {
            return {
            sx: {
                bgcolor: "#1976d2", // stringToColor(name),
                width: 300,
            },
            // children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}${name.split(' ')[2][0]}`
            children: `${name}`
            };
    }

    // Call rest api using AXIOS ASYNC
    const callEndpoint = async () => {
        // https://jsonplaceholder.typicode.com/posts
        const urlRootAPI = "https://jsonplaceholder.typicode.com/";
        const API_URL = urlRootAPI + "posts";
        console.log("callEndpoint - URL Endpoint = " +  API_URL);

        debugger;
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

                setPosts(response.data);
                setHasPost(true);
            }
        })
        .catch((error) => {
            setHasPost(false);
            localStorage.clear();
            console.log(error);
        });

    };


    const getUserById = (idUtente: number) => {
       /*  const urlRootAPI = "https://jsonplaceholder.typicode.com/";
        const API_URL = urlRootAPI + "users/" + idUtente;
        console.log("getUserById - URL Endpoint = " +  API_URL);
        */
        localStorage.setItem("userid", String(idUtente));
        navigate('/InfoUtente');
    }

    return (
        <Layout>
            <>
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Stack direction="row" spacing={2}>
                        <Avatar variant="square" { ...stringAvatar('First App with Typescript') } />
                    </Stack>
                    
                    {isAuthenticated && (
                        <>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Welcome {username}
                            </Typography>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                            >
                            <AccountCircle />
                            </IconButton>
                            <Button color="inherit" className={styles.MarginLeftAuto} onClick={handleLogout}>Logout</Button>
                            
                        </>
                    )}

                    {!isAuthenticated && (
                        <>
                        <Button  color="inherit" className={styles.MarginLeftAuto} onClick={handleLogin}>Login</Button>
                        </>
                    )}

                </Toolbar>
                </AppBar>
                </Box>
                {isAuthenticated && (
                    <>
                    <h1>Welcome to the Home Page!</h1>
                    <p>This is some content specific to the Home Page.</p> 

                    <Button color="inherit" variant="contained" className={styles.MarginLeftAuto} onClick={callEndpoint}>Using AXIOS</Button>
                    
                    {hasPost && (
                       
                        <div>
                            {/* https://saurabhnativeblog.medium.com/rendering-a-table-in-react-from-a-json-array-using-object-keys-and-object-values-062046973780 */}
                            {/* {posts.map(post => (
                                <div>
                                    <span>{post.body}</span>
                                </div>
                            ))} */}
                        
                            <table>
                                <thead>
                                    <tr>
                                        <th>Post Id</th>
                                        <th>User Id</th>
                                        <th>Title</th>
                                        <th>Post Body</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map((post, index) => (
                                    <tr key={index}>
                                        <td>{post.id}</td>
                                        <td>{post.userId}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td><Button color="inherit" variant="contained" className={styles.MarginLeftAuto} onClick={() => getUserById(post.userId)}>Get User Info</Button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                        
                    )}
                    </>
                )}
            </>
        </Layout>
      );
}

export default Home;


