import "../assets/css/Card.css";

import { Card, Row } from "react-bootstrap";

import BookStore from "../assets/img/BookStore.png";
import { useState, useEffect } from "react";

const Cards = (props) => {
  const [Img, setImg] = useState();
  useEffect(() => {
    if (props.img === "BookStore") {
      setImg(BookStore);
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
