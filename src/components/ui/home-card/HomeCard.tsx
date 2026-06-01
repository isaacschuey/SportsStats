import './HomeCard.css'

interface HomeCardProps {
  sport: string;
  abbrev: string;
  desc: string;
}

const HomeCard = (props: HomeCardProps) => {
  return (
    <div className="home-card">
      <div className="home-card-header">
        <b>{props.sport}</b>
        <p>{props.abbrev}</p>
        <p>{props.desc}</p>
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
