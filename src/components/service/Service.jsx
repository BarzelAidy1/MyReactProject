
import { observer } from "mobx-react"
import { useTheme } from '@mui/material/styles';
import serviceData from "../../data/serviceData";
import './Service.css'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, ListItem, Stack, Typography} from "@mui/material";
import { useEffect } from "react";
import { getService } from "../../data/serviceServer";



const Service = (observer(() => {
  
useEffect(()=>{
  if(!serviceData.serviceList.length){
    getService()
  }
},[])  
  
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