import { useLocation } from "react-router-dom";
import "./mlb.css";

const MLB = () => {
  const location = useLocation();

  return <div>{location.state.tab}</div>;
};

export default MLB;
