import type { Sport } from "../../../types";
import "./HomeCard.css";

interface HomeCardProps {
  sport: Sport;
}

const HomeCard = (props: HomeCardProps) => {
  return (
    <div className="home-card">
      <div className="home-card-header">
        <b>{props.sport.name}</b>
        <p>{props.sport.abbreviation}</p>
        <p>{props.sport.desc}</p>
      </div>

      <div className="home-card-body">
        <button>View Games</button>
        <button>View Players</button>
        <button>View Teams</button>
      </div>
    </div>
  );
};

export default HomeCard;
