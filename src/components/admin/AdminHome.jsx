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
  <Link to="service" ><Button>to service</Button></Link>
  <Link to="meeting" ><Button>to meeting</Button></Link>  
</ButtonGroup>

<Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Link to="edit" > <Fab color="secondary" aria-label="edit"><EditIcon /></Fab></Link>
      
    </Box>        
        
    
        <Outlet />
    </>
}

export default AdminHome