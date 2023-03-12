import { Box, Button, Container, Input, Spinner, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AuthContext/AuthContextProvider";

// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
  const {state,dispatch} = useContext(AppContext)
  const InitData= {
    email : "",
    password : ""
  }
  const [login,setLogin] = useState(InitData);
  const handleChange = (e)=>{
    const {value, name } = e.target;
    setLogin({...login,[name]:value});
  }
  const handleSubmit  = (e,login)=>{
    dispatch({type:"LOADING"})
    axios.post(`https://reqres.in/api/login`,{
        email : login.email,
        password : login.password

    }).then((res)=>{
        console.log(res);
        dispatch({type:"SUCCESS",payload: res.data})

    })
    .catch((err)=>{
        console.log(err);
        dispatch({type:"ERROR"})

    })
  }
  console.log(state.token);
  const navigate = useNavigate();

  if(state.isAuth){
    navigate("/");

  }
  if(state.error){
    alert("Something went wrong. please refresh.")
  }
  // if(state.loading){
  //   return 
  // }


  return <Container>
    <Stack>

    <Box>
      <Input type="email" value={login.email} name="email" placeholder="Email" onChange={(e)=>handleChange(e)}/>
      
      <Input type="password" value={login.password} name="password" placeholder="Password" onChange={(e)=>handleChange(e)}/>

      <Button isDisabled={state.loading?true:false}  onClick={(e)=>handleSubmit(e,login)}>Login</Button>
      {state.loading && <Spinner color='red.500' />}
    </Box>

    </Stack>



  </Container>;
};

export default Login;
