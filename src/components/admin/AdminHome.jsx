import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

const AdminHome = () => {
  return <>
    <ButtonGroup color="secondary" variant="contained" size="large" aria-label="Large button group">
      <Link to="edit" ><Button sx={{ position: "absolute", bottom: 50, left: -400, width: "150px" }}>edit Details</Button></Link>
      <Link to="service" ><Button sx={{ position: "absolute", bottom: 0, left: -400, width: "150px" }}>programs</Button></Link>
      <Link to="meeting" ><Button sx={{ position: "absolute", bottom: -50, left: -400, width: "150px" }}>to meeting</Button></Link>
      <Link to="addservice" ><Button sx={{ position: "absolute", bottom: 100, left: -400, width: "150px" }}>add program</Button></Link>
    </ButtonGroup>

    <Outlet />
  </>
}

export default AdminHome