import React, { useContext } from "react";
// import casa from "../images/casa.jpg";
// import placeholder from "../images/placeholder.png"
// import home from "../images/home.png"
// import car from "../images/car.png"
import "../styles/Card.css";
import MyContext from '../context/MyContext';
import Card from "./Card";

function Cards() {
  const { filterImmobiles } = useContext(MyContext);
	return(
     <div className="cards">
       {
         filterImmobiles.map((imob, index) => <Card key={ index } imob={ imob }/>)
       }
     </div>
  );
}

export default Cards;
