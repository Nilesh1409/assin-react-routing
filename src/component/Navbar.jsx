import React from "react";
import { Box , Button, ButtonGroup } from "@chakra-ui/react"
import { Link } from "react-router-dom"

let Navbar = () =>{
    return <>
    <Box bg="black" w="100%" h="50px" gap="50px" color="white" display="flex">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/product/:{id}">Product Details</Link>
        {/* <Button colorScheme='blue'>Button</Button> */}
    </Box>
    </>
}

export {Navbar}; 
