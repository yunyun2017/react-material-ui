import Dashboard from '@material-ui/icons/Dashboard'
import Person from "@material-ui/icons/Person"
import Notifications from "@material-ui/icons/Notifications"

//pages相关组件

const routes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Material Dashboard",
        icon: Dashboard,
        // component: DashboardPage
      },
      {
        path: "/user",
        sidebarName: "User Profile",
        navbarName: "Profile",
        icon: Person,
        // component: UserProfile
      },
      {
        path: "/table",
        sidebarName: "Table List",
        navbarName: "Table List",
        icon: "content_paste",
        // component: TableList
      },
      {
        path: "/notifications",
        sidebarName: "Notifications",
        navbarName: "Notifications",
        icon: Notifications,
        // component: NotificationsPage
      },
      { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
]

export default routes