import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.css";
import Layout from "./components/ui/layout/Layout";
import Home from "./components/pages/home/Home";
import MLB from "./components/pages/mlb/MLB";
import type { Sport } from "./types";

const App = () => {
  const sports: Sport[] = [
    {
      name: "Baseball",
      abbreviation: "MLB",
      desc: "Hunt Down the World Series",
    },
    {
      name: "Basketball",
      abbreviation: "NBA",
      desc: "Follow the Road to the Finals",
    },
    {
      name: "Hockey",
      abbreviation: "NHL",
      desc: "Chase the Stanley Cup",
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

          <Route path="/mlb" element={<MLB />}></Route>
          <Route path="/nba"></Route>
          <Route path="/nhl"></Route>

          <Route path="*" element={<Navigate to="/home" replace />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
