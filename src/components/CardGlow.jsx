import "../assets/css/cardGlow.css";
import image from "../assets/img/pp.png";

const CardGlow = () => {
  return (
    <div class="card-glow">
      <img src={image} className="rounded-circle" />
    </div>
  );
};

export default CardGlow;
