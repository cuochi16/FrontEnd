import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Global from "./pages/Global";
import Login from "./pages/Login";
import { useEffect } from "react";

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   //TODO: Update meta titles and descriptions below
  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/Global' element={<Global />}></Route>
          <Route path='/Login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
