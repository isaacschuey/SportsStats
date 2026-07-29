import { NavLink } from "react-router-dom";
import "./ButtonLink.css";

interface ButtonLinkProps {
  targetAddress: `/${string}`;
  text: string | null;
  //   color: string;
  //   variant: "box" | "rounded";
  //   size: "sm" | "md" | "la" | "xl";
}

const ButtonLink = (props: ButtonLinkProps) => {
  return <NavLink to={props.targetAddress} state={{ tab: props.text }}>{props.text}</NavLink>;
};

export default ButtonLink;
