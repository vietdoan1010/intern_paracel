import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { publicRoutes } from "./routes";
import "./App.css";
import SideBar from "./components/SideBar";
import { useState } from "react";


function App() {

  const [sideBar, setSideBar] = useState(true);
  const showSideBar = () => {
    setSideBar(!sideBar);
    // console.log("click",)
    // console.log(sideBar)
  }
  return (
    <div className="App">
      <Header abc={showSideBar}></Header>
      <div className="content wrapper">
        <SideBar cbd={sideBar}></SideBar>

        <Routes>
          {/* <Route path="/" element={<HomePage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route> */}
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route key={index} path={route.path} element={<Page />}></Route>
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
