import "./css/Home.css";
import HomeCard from "../ui/HomeCard";

interface HomeProps {
  sports: {
    sport: string;
    abbrev: string;
    desc: string;
  }[];
}

const Home = (props: HomeProps) => {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Sports Statistics App</h1>
        <h3>Stats, scores, players, and teams across major league sports</h3>
      </div>
      <div className="home-body">
        {props.sports.map((sport) => (
          <HomeCard
            sport={sport.sport}
            abbrev={sport.abbrev}
            desc={sport.desc}
          ></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
