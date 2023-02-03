import "../assets/css/Card.css";

import { useState, useEffect } from "react";

import { Card } from "react-bootstrap";

import BookStore from "../assets/img/BookStore.png";
import Movie from "../assets/img/Movie.png";

const Cards = (props) => {
  const [Img, setImg] = useState();
  useEffect(() => {
    if (props.img === "BookStore") {
      setImg(BookStore);
    }
    if (props.img === "Movie") {
      setImg(Movie);
    }
  });
  return (
    <a href={props.url}>
      <Card>
        <img src={Img} className="card-image" />
      </Card>
    </a>
  );
};

export default Cards;
