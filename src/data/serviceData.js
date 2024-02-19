import { action, makeObservable, observable } from "mobx"
import adama from '../assets/img/adama.png';
import merchav from '../assets/img/merchav.jpg';
import shlita from '../assets/img/shlita.jpg';
import vertigo from '../assets/img/vertigo.jpg';

const defaultService=[
    {
        id: '0',
        price: "2400",
        name: "ורטיגו",
        describtion: "תוכנית חינוכית עוצמתית בנושא מוגנות במרחב. הקניית כללי זהירות מזרים בצורה אטרקטיבית וסוחפת",
        age:"יסודי-שכבה נמוכה",
        image: vertigo,
    },
    {
        id: '1',
        price: "2500",
        name: "אדמה ושמים",
        describtion: "תוכנית חוויתית בנושא שמיטה להקניית הלכות בסיסיות לילדים תוך חיבור אמיתי והבנת ערך מצוה קדושה זו",
        age:"יסודי- שכבה בינונית",
        image: adama,
    },
    
    {
        id: '2',
        price: "4200",
        name: "חדר בריחה",
        describtion: "חדרי בריחה שנונים ויצירתיים במרחב הקולי, בדיגיטל ובפרונטלי- חויה עוצמתית וסוחפת בנושאים שונים",
        image: merchav,
    },
    ];    
    class serviceData {
        //isLogin = localStorage.getItem("isLog");
        serviceList = [];
        constructor() {
            makeObservable(this, {
                serviceList: observable,
                addService: action,
                setServices: action
            })
        }
        setServices(data) {
            this.serviceList =[...defaultService,...data];
        }
        //functions
        addService(serice) {
            this.serviceList = [...this.serviceList, serice]
        }
    }
    
    export default new serviceData()