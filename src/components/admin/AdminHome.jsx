import React from "react";
import Box from "@mui/material/Box";
import { Link, Outlet } from "react-router-dom";
import { Button, ButtonGroup, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import BusinessData from "../businessData/BusinessData";


const AdminHome = () => {
    return <> 
     <ButtonGroup color="secondary" variant="contained" size="large" aria-label="Large button group">
    <Link to="edit" ><Button sx={{ position: "absolute", bottom: 50 ,left:-400,width:"150px"}}>edit Details</Button></Link>
      <Link to="service" ><Button sx={{ position: "absolute", bottom: 0 ,left:-400,width:"150px"}}>to service</Button></Link>
      <Link to="meeting" ><Button sx={{ position: "absolute", bottom: -50,left:-400 ,width:"150px"}}>to meeting</Button></Link> 
      <Link to="addservice" ><Button sx={{ position: "absolute", bottom: 100,left:-400 ,width:"150px"}}>add service</Button></Link>  
    </ButtonGroup>      
      
      
        
    
        <Outlet />
    </>
}

export default AdminHome