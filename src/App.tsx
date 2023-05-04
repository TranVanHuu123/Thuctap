import TabBarMain from "./modules/users/TabBarMain";
import Dashboard from "./modules/dashboard/Dashboard";
import Device from "./modules/device/Device";
import Login from "./modules/form/login";
import Forgotpassword from "./modules/form/Forgotpassword";
import ResetPassword from "./modules/form/ResetPassword";
import AddDevice from "./modules/device/AddDevice";
import DetailDevice from "./modules/device/DetailDevice";
import UpdateDvice from "./modules/device/UpdateDvice";
import ServiceList from "./modules/service/ServiceList";
import AddService from "./modules/service/AddService";
import DetailService from "./modules/service/DetailService";
import UpdateService from "./modules/service/UpdateService";
import { Routes, Route } from "react-router-dom";
import Main from "./modules/main/Main";
import Manager from "./auth/progression/Manager";
import ProgressionList from "./modules/progression/ProgressionList";
import New from "./auth/progression/New";
import NewProgression from "./modules/progression/NewProgression";
import DetailProgression from "./modules/progression/DetailProgression";
import Report from "./modules/report/Report";
import Role from "./modules/role/Role";
import AddRole from "./modules/role/AddRole";
import UpdateRole from "./modules/role/UpdateRole";
import Acount from "./modules/account/Acount";
import Diary from "./modules/diary/Diary";
import AddAccount from "./modules/account/AddAccount";
import UpdateAccount from "./modules/account/UpdateAccount";

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <Forgotpassword></Forgotpassword> */}
      {/* <ResetPassword></ResetPassword> */}
      {/* <TabBarMain></TabBarMain> */}
      {/* <Dashboard></Dashboard> */}
      {/* <Device></Device> */}
      {/* <AddDevice></AddDevice> */}
      {/* <DetailDevice></DetailDevice> */}
      {/* <UpdateDvice></UpdateDvice> */}
      {/* <ServiceList></ServiceList> */}
      {/* <AddService></AddService> */}
      {/* <DetailService></DetailService> */}
      {/* <UpdateService></UpdateService> */}
      {/* <DetailProgression></DetailProgression> */}
      {/* <UpdateRole></UpdateRole> */}
      {/* <UpdateAccount></UpdateAccount> */}
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/device" element={<Device></Device>}></Route>
        <Route path="/service" element={<ServiceList></ServiceList>}></Route>
        <Route
          path="/progression"
          element={<ProgressionList></ProgressionList>}
        ></Route>
        <Route
          path="/newprogression"
          element={<NewProgression></NewProgression>}
        ></Route>
        <Route path="/report" element={<Report></Report>}></Route>
        <Route path="/role" element={<Role></Role>}></Route>
        <Route path="/addrole" element={<AddRole></AddRole>}></Route>
        <Route path="/acount" element={<Acount></Acount>}></Route>
        <Route path="/diary" element={<Diary></Diary>}></Route>
        <Route path="/addAccount" element={<AddAccount></AddAccount>}></Route>
      </Routes>
    </div>
  );
}

export default App;
