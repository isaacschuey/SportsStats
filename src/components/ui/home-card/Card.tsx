import "./Card.css";

interface CardProps {
  header: string;
  subheader?: string;
  description?: string;
  body: React.ReactNode;
  footer?: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <span className="card-header">{props.header}</span>
      <span className="card-subheader">{props?.subheader}</span>
      <span className="card-description">{props?.description}</span>

      <div className="card-body">{props.body}</div>

      <div className="card-footer">{props?.footer}</div>
    </div>
  );
};

export default Card;
