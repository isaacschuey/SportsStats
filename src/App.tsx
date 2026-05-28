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

  return <Home sports={sports} />;
};

export default App;
