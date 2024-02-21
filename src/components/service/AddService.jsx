import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { AddServiceServer } from "../../data/serviceServer"

function AddService() {

  const [data, setData] = useState({})
  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    AddServiceServer(data) 
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack>
        <TextField id="outlined-basic" name="name" label="שם התוכנית" variant="outlined" type="text" value={data.name} onChange={handleChange} />
        <TextField id="outlined-basic" name="describtion" label=" תאור:" variant="outlined" type='text' value={data.describtion} onChange={handleChange} />
        <TextField id="outlined-basic" name="price" label="מחיר" variant="outlined" type="number" value={data.price} onChange={handleChange} />
        <TextField id="outlined-basic" name="image" label="תמונה" variant="outlined" type="text" value={data.image} onChange={handleChange} />

        <Button type="submit">הוספת התוכנית לרשימה</Button>
        </Stack>
      </form>
    </>
  )
}

export default AddService
