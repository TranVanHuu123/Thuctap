import MenuRight from "./auth/dashboard/MenuRight";
import Menubar from "./auth/user/Menubar";
import Forgotpassword from "./modules/form/Forgotpassword";
import ResetPassword from "./modules/form/ResetPassword";
import Login from "./modules/form/login";
import TabBarMain from "./modules/users/TabBarMain";
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <Forgotpassword></Forgotpassword> */}
      {/* <ResetPassword></ResetPassword> */}
      {/* <TabBarMain></TabBarMain> */}
      <MenuRight></MenuRight>
    </div>
  );
}

export default App;
