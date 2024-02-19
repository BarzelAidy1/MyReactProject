import { useEffect, useState } from "react";
import { updateBuisneData } from "../../data/BuisnesDataServer";
import BuisnesDataStore from "../../data/BuisnesDataStore";
import { observer } from "mobx-react";
import { Stack } from "@mui/material";
import './EditBuisnessData.css'
const EditBusinessData = observer(() => {
  const [Form, setForm] = useState({});

  const handle = (e) => {
    e.preventDefault()
    updateBuisneData(Form)
  }

  useEffect(() => {
    setForm(BuisnesDataStore.data)
  }, [BuisnesDataStore.data])

  return <form onSubmit={handle}>
    <Stack>
    <label>שם העסק</label>
    <input value={Form.name} onChange={({ target }) => setForm({ ...Form, name: target.value })} id="bord"/>
    <br />
    <label>בעל העסק</label>
    <input value={Form.adminName} onChange={({ target }) => setForm({ ...Form, adminName: target.value })} id="bord"/>
    <label>כתובת</label>
    <input value={Form.adress} onChange={({ target }) => setForm({ ...Form, adress: target.value })}id="bord" />
    <br />
    <label>טלפון</label>
    <input value={Form.phone} onChange={({ target }) => setForm({ ...Form, phone: target.value })} id="bord"/>
    <br />
    <label>פרטים נוספים</label>
    <input value={Form.information} onChange={({ target }) => setForm({ ...Form, information: target.value })} id="bord"/>
    <br />
    <button type="submit" id="bord">עריכה</button>
    </Stack>
  </form>
  
})

export default EditBusinessData