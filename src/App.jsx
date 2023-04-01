import React, { useState } from "react";
import BtnMovil from "./assets/components/BtnMovil"
import Sidebar from "./assets/components/Sidebar"
import Header from "./assets/components/Header";
import SubHeader from "./assets/components/SubHeader";
import Botones from "./assets/components/Botones";
import Resultados from "./assets/components/Resultados";
import Card from "./assets/components/Card";
import {
  RiDropboxFill, RiTwitchFill, RiGoogleFill,RiTwitterLine
} from "react-icons/ri";


function App() {

  const [Menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!Menu)
  }


  return (

    <div className=" grid-col-1 grid lg:grid-cols-6">

      <div>
        <Sidebar toggleMenu={handleMenu} menu={Menu} />
        <BtnMovil toggleMenu={handleMenu} menu={Menu} />
      </div>


      <div className="col-span-5 bg-terciary">

        <Header />
        <SubHeader />

        <div className="md:p-8 p-4 lg:p-12">
          <Botones />
          <Resultados />
          <Card
            icono={<RiDropboxFill className="bg-secundary p-4 rounded-lg" />}
            titulo="Product Designer" />

          <Card
            icono={<RiTwitchFill className="bg-secundary p-4 rounded-lg" />}
            titulo="UX/UI Designer" />

          <Card
            icono={<RiGoogleFill className="bg-secundary p-4 rounded-lg" />}
            titulo="Product Designer" />

          <Card
            icono={<RiTwitterLine className="bg-secundary p-4 rounded-lg" />}
            titulo="React developer" />

        </div>



      </div>
    </div>

  )
}

export default App
