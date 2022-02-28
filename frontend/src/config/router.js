import LayoutAdmin from "../layouts/LayoutAdmin";
import Admin from "../pages/admin/Admin";
import SignIn from "../pages/admin/SignIn";

const routes = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: Admin,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: SignIn,
  },
];
export default routes;
