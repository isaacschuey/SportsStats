import "./Home.css";
import Card from "../../ui/home-card/Card";
import type { Sport } from "../../../types";
import ButtonLink from "../../ui/button/ButtonLink";

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
          <Card
            key={sport.abbreviation}
            header={sport.name}
            subheader={sport.abbreviation}
            description={sport.description}
            body={
              <>
                <ButtonLink
                  targetAddress={`/${sport.abbreviation.toLowerCase()}`}
                  text={"Games"}
                />
                <ButtonLink
                  targetAddress={`/${sport.abbreviation.toLowerCase()}`}
                  text={"Teams"}
                />
                <ButtonLink
                  targetAddress={`/${sport.abbreviation.toLowerCase()}`}
                  text={"Players"}
                />
              </>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
