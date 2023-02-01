import "../assets/css/cardGlow.css";
import image from "../assets/img/pp.jpeg";

const CardGlow = () => {
  return (
    <div class="card">
      <img src={image} className="rounded-circle img-thumbnail" />
    </div>
  );
};

export default CardGlow;
