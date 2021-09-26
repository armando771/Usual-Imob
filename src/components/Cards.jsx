import React, { useContext } from "react";
// import casa from "../images/casa.jpg";
// import placeholder from "../images/placeholder.png"
// import home from "../images/home.png"
// import car from "../images/car.png"
import "../styles/Card.css";
import MyContext from '../context/MyContext';
import Card from "./Card";
import ImobileNotFound from "./ImobileNotFound";

function Cards() {
  const { filterImmobiles } = useContext(MyContext);
  console.log(filterImmobiles)
	return(
     <div className="cards">
       {
         filterImmobiles.length === 0 ? <ImobileNotFound/> :
         filterImmobiles.map((imob, index) =>  <Card key={ index } imob={ imob }/>)
       }
     </div>
  );
}

export default Cards;
