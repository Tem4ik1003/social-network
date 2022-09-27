import Main from "../pages/MainStart/Main";
import RegistrationForm from "../components/Forms/RegistrationForm/RegistrationForm";
import AuthForm from "../components/Forms/AuthForm/AuthForm";
import MyProfile from "../pages/MyProfile/MyProfile";

export const publicRoutes = [
{path: '/', element: <Main/>},
    {path: '/registration', element: <Main><RegistrationForm/></Main>},
    {path: '/auth', element: <Main><AuthForm/></Main>},
    {path: '/profile', element: <MyProfile/>}
]