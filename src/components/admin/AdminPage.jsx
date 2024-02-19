import './admin.css';
import { observer } from "mobx-react";
import LoginPage from '../login/loginPage';
import loginStore from "../../data/loginStore";
import { Outlet } from "react-router-dom";
import AdminHome from './AdminHome';
import BusinessData from '../businessData/BusinessData';

const AdminPage = observer(() => {

  return (
    <>
    <BusinessData/>
    <div id="loginForm">
      {loginStore.isLogin ? <AdminHome /> : <LoginPage />}
      
    </div>
   </> 
  )
});

export default AdminPage