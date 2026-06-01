import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import './app.css'
import Layout from "./components/ui/Layout";
import Home from "./components/pages/Home";

const App = () => {
  const sports = [
    {
      sport: "Baseball",
      abbrev: "MLB",
      desc: "Hunt Down the World Series",
    },
    {
      sport: "Basketball",
      abbrev: "NBA",
      desc: "Follow the Road to the Finals",
    },
    {
      sport: "Hockey",
      abbrev: "NHL",
      desc: "Chase the Stanley Cup",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout sportAbbrevs={sports.map((sport) => sport.abbrev)}/>}>
          <Route path="/home" element={<Home sports={sports} />}></Route>

          <Route path="/mlb"></Route>
          <Route path="/nba"></Route>
          <Route path="/nhl"></Route>

          <Route path="*" element={<Navigate to="/home" replace />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
