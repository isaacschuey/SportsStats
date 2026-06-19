import "./Home.css";
import HomeCard from "../../ui/home-card/HomeCard";
import type { Sport } from "../../../types";

interface HomeProps {
  sports: Sport[];
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
          <HomeCard key={sport.abbreviation} sport={sport} />
        ))}
      </div>
    </div>
  );
};

export default Home;
