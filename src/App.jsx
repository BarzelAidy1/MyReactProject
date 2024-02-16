import { useEffect, useState } from "react"
import { getService } from "./data/serviceServer"
import { Outlet } from "react-router-dom"
import Meeting from "./components/Meeting/Meeting"
import MeetingList from "./components/Meeting/MeetingList"
import BusinessData from "./components/businessData/BusinessData"
import './App.css'

function App() {
  const [meetings, setMeetings]=useState([]);

  useEffect(() => {
    async function fetchData(){
      const meetingsData=await getService();
      setMeetings(meetingsData);
    }
    fetchData();
  }, []);
  return (
    <>   
    <BusinessData/> 
      <br/>
      <Meeting/>

    </>
  );
}

export default App
