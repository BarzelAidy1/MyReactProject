import { observer } from "mobx-react"
import { useTheme } from '@mui/material/styles';
import serviceData from "../../data/serviceData";
import './Service.css'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const Service = (observer(() => {
  
  const theme = useTheme();
  
  return (
      <>
        <div id="kk">
          {serviceData.serviceList.map((details, id) => {
              return (
              <Card key={id} id="card" sx={{ maxWidth: 340 }}>
                  <CardActionArea>
                    <CardMedia id="image"
                      component="img"
                      height="300"
                      image ={details.image}
                      alt="עוצמה של הפקה"
                    />
                    <CardContent id="orderDetails">
                      <Typography gutterBottom variant="h5" component="div">
                        {details.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {details.describtion}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      למידע נוסף                    
                    </Button>
                    <Button size="small" color="primary">
                      להזמנה
                    </Button>
                  </CardActions>
                </Card>

                
                
              )
          }
          
          )}
       </div>
      </>
  )
}))

  export default Service