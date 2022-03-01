import LayoutAdmin from "../layouts/LayoutAdmin";
import Admin from "../pages/admin/Admin";
import SignIn from "../pages/admin/SignIn";
import LayoutClint from "../layouts/LayoutClint";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const routesAdmin = [
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
const routesClint = [
  {
    path: "/",
    layout: LayoutClint,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutClint,
    component: Contact,
  },
];

const routes = [...routesAdmin, ...routesClint];
export default routes;
