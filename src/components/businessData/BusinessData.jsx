import { useEffect } from "react"
import BuisnesDataStore from "../../data/BuisnesDataStore"
import { observer } from "mobx-react"
import { Link, Outlet } from "react-router-dom"
import { getBuisneData } from "../../data/BuisnesDataServer"
import './Buisnessata.css'
import { colors } from "@mui/material"
import Service from "../service/Service"

const BusinessData = observer(() => {


  useEffect(() => {
    if (!BuisnesDataStore.data.name) {
      getBuisneData();
    }
  }, [])

  return (
    <>
      <div id='businessDetails'>

        <img id='logo' src={BuisnesDataStore.data.logo}alt="תמונת פרטי עסק"/>
        <div id='details'>
          <h2>{BuisnesDataStore.data.name}</h2>
          <h3> בעל העסק: {BuisnesDataStore.data.adminName}</h3>
          <h4> כתובת: {BuisnesDataStore.data.adress}</h4>
          <h4> טלפון: {BuisnesDataStore.data.phone}</h4>
          <h4>{BuisnesDataStore.data.information}</h4>
        </div>
        
      </div>
        <Service/>
        
      
    </>
  )
})

export default BusinessData