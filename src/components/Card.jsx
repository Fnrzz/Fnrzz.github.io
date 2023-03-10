import "../assets/css/Card.css";

import { useState, useEffect } from "react";

import { Card } from "react-bootstrap";

import BookStore from "../assets/img/BookStore.png";
import Movie from "../assets/img/Movie.png";
import Ecommerce from "../assets/img/Ecommerce.png";
import Company from "../assets/img/Company.png";

const Cards = (props) => {
  const [Img, setImg] = useState();
  useEffect(() => {
    switch (props.img) {
      case "BookStore":
        setImg(BookStore);
        break;
      case "Movie":
        setImg(Movie);
        break;
      case "Ecommerce":
        setImg(Ecommerce);
        break;
      case "Company":
        setImg(Company);
        break;
    }
  });
  return (
    <a href={props.url}>
      <Card className="card-projects">
        <img src={Img} className="card-image" />
      </Card>
    </a>
  );
};

export default Cards;
