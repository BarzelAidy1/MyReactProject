import { useEffect, useState } from "react"
import { getService } from "./data/serviceServer"
import Meeting from "./components/Meeting/Meeting"
import BusinessData from "./components/businessData/BusinessData"
import './App.css'
import Service from "./components/service/Service"

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
      <Service/>
      <br/>
      <Meeting/>

    </>
  );
}

export default App
