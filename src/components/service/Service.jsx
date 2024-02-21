
import { observer } from "mobx-react"
import { useTheme } from '@mui/material/styles';
import serviceData from "../../data/serviceData";
import './Service.css'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, ListItem, Stack, Typography} from "@mui/material";
import { useEffect, useState } from "react";
import { getService } from "../../data/serviceServer";
import AddService from "./AddService";
import AddMeeting from "../meeting/AddMeeting";
import loginStore from "../../data/loginStore";



const Service = (observer(() => {
  
  const [selectService, setSelectService] = useState(null)

  useEffect(() => {

    getService()
  }, [])
  
  return (
      <>
        <div id="kk">
          {serviceData.serviceList.map((details, id) => {
              return (
                <Stack key={id}
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                maxWidth={421}
                maxHeight={600}
                id="card"
              >
                <ListItem >
                <CardActionArea>
                    <CardMedia id="image"
                      component="img"
                      image ={details.image}
                      alt="עוצמה של הפקה"
                    />
                    
                    
                  </CardActionArea>
            
                  <CardActions>
                   <CardContent id="orderDetails">
                     <h1 id="size">{details.name}</h1>
                     <br/>
                      <Typography variant="body2" color="text.secondary">
                        {details.describtion}
                      </Typography>
                    </CardContent>
                  </CardActions>
                  
                
                </ListItem>
                
              </Stack>
                
              )
          }
          
          )}
       </div>
      
      </>
  )
}))

  export default Service