import { action, makeObservable, observable } from "mobx"
import adama from '../assets/img/adama.png';
import merchav from '../assets/img/merchav.jpg';
import shlita from '../assets/img/shlita.jpg';
import vertigo from '../assets/img/vertigo.jpg';
class serviceData {
    //isLogin = localStorage.getItem("isLog");
    serviceList = observable([
    {
        id: '0',
        price: "2400",
        name: "ורטיגו",
        describtion: " תוכנית לימודית בנושא זהירות מזרים מתבססת על שיטת שלושת הלמדים: 'לצעוק', 'לברוח' ו'לספר'. התוכנית מעבירה בצורה חוייתית ואטרקטיבית את כללי הזהירות עפ,י הנחיית יועצים/ות מהשורה הראשונה, באישור גדולי ישראל ובפיקוח מפקחות ממשרד החינוך בנושא מוגנות",
        age:"יסודי-שכבה נמוכה",
        image: vertigo,
    },
    {
        id: '1',
        price: "2500",
        name: "אדמה ושמים",
        describtion: "תוכנית חוויתית בנושא שמיטה להקניית הלכות בסיסיות לילדים תוך חיבור אמיתי והבנת ערך מצוה קדושה זו.",
        age:"יסודי- שכבה בינונית",
        image: adama,
    },
    
    {
        id: '2',
        price: "4200",
        name: "חדר בריחה",
        describtion: "חדרי בריחה שנונים ויצירתיים במרחב הקולי, בדיגיטל ובפרונטלי- חויה עוצמתית וסוחפת בנושאים שונים",
        image: merchav,
    }
    ]);    
    constructor() {
        makeObservable(this, {
            serviceList: observable,
            addService: action,
        })
    }

//functions
    addService(serice) {
        
    }
}

export default new serviceData()