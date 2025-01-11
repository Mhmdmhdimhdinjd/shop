import React from "react";
import Footer from "../../components/Footer/Footercontaier";
import Navbar from "../../components/Navbar/Navbar";
import Profilecontainer from "./Profilecontainer";
import { Box } from "@mui/material";

const Profile = () => {


    return (
        <Box
        sx={{ height:'100vh' , display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}
        >

            <Navbar />

            <Box sx={{mx:'auto'}}>
                <Profilecontainer />
            </Box>

            <Footer />

        </Box>
    )
}

export default Profile