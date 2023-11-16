import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home/Home'
import { Resumes } from './pages/Resumes/Resumes'
import { Gallery } from './pages/Gallery/Gallery'
import { Login } from './pages/Login/Login'
import { Footer } from './components/Footer/Footer';
import { SignUp } from './pages/SignUp/SignUp';
import { Page404 } from './pages/Page404/Page404'
import { ProjectPage } from './pages/ProjectPage/ProjectPage'


// rafc

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Layout>
          <Home/>
          <Footer />
        </Layout>,
    },
    {
      path: "/Resumes",
      element:
        <Layout>
          <Resumes/>
          <Footer />
        </Layout>,
    },
    {
      path: "/Gallery",
      element:
        <Layout>
          <Gallery/>
          <Footer />
        </Layout>,
    },
    {
      path: "/ProjectPage",
      element:
        <Layout>
          <ProjectPage/>
        </Layout>,
    },
    {
      path: "/LogIn",
      element:
          <Login/>,
    },
    {
      path: "/SignUp",
      element:
          <SignUp/>,
    },
    {
      path: "*",
      element:
        <Page404 /> ,
    },

  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
