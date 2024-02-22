import { action, makeObservable, observable } from "mobx"
import logo from '../assets/img/logo.jpg'
class BuisnesDataStore {
    
    data={
        logo:logo,
        name:"תוכניות מסך ובמה",
        adminName:"איידי ברזל ",
        adress:"בני ברק",
        phone:"054-8441358",
        information:""
    }
    
    constructor() {
        makeObservable(this, {
            data: observable,
            setData:action
        })
    }


    setData(data) {
        this.data = data
    }
}

export default new BuisnesDataStore()

