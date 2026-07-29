import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.css";
import Layout from "./components/ui/layout/Layout";
import Home from "./components/pages/home/Home";
import MLB from "./components/pages/mlb/MLB";
import type { Sport } from "./types";
import NBA from "./components/pages/nba/NBA";
import NHL from "./components/pages/nhl/NHL";

const App = () => {
  const sports: Sport[] = [
    {
      name: "Baseball",
      abbreviation: "MLB",
      description: "Hunt Down the World Series",
      component: <MLB />,
    },
    {
      name: "Basketball",
      abbreviation: "NBA",
      description: "Follow the Road to the Finals",
      component: <NBA />,
    },
    {
      name: "Hockey",
      abbreviation: "NHL",
      description: "Chase the Stanley Cup",
      component: <NHL />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout sportAbbrevs={sports.map((sport) => sport.abbreviation)} />
          }
        >
          <Route path="/home" element={<Home sports={sports} />}></Route>

          {sports.map((sport) => (
            <Route
              path={`/${sport.abbreviation.toLowerCase()}`}
              element={sport?.component}
            />
          ))}

          <Route path="*" element={<Navigate to="/home" replace />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
