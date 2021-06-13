import "./PsychologistCard.scss";

const PsychologistCard = ({ name, img }) => {
  return (
    <div className="card">
      <p className="card__title">{name}</p>
      <div className="card__content">
        <img className="card__photo" src={img} alt="img" />
        <div className="card__text">
          <p>Длительность консультации<br />50 минут</p>
        </div>
      </div>
    </div>
  );
};

export default PsychologistCard;
