import { Box, Flex, HStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AuthContext/AuthContextProvider";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  const {state} = useContext(AppContext);
  return <Flex justifyContent={"space-between"} maxWidth="max-content" alignItems='center' gap="2">
    <Box p='2'>token : {state.token}</Box>
    <HStack>

      <Box spacing="8">
    <Link to="/">HOME</Link>


      </Box>

      <Box>
    <Link to="/login">LOGIN</Link>

      </Box>

      <Box>
    <Link to="/cart">CART</Link>

      </Box>
    </HStack>

  </Flex>;
};

export default Navbar;
