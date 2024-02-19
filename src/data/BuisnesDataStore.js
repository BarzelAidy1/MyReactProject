import { action, makeObservable, observable } from "mobx"
import logo from '../assets/img/logo.jpg'
class BuisnesDataStore {
    
    data={
        logo:logo,
        name:"תוכניות מסך ובמה",
        adminName:"חיה ויזל",
        adress:"בני ברק",
        phone:"0504163893",
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

