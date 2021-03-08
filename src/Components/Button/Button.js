import { Link } from "react-router-dom";
import "./Button.css";
const Button = ({ children, type, onClick, style, size }) => {
  return (
    <Link to="/sign-up">
      <button onClick={onClick} className={`btn ${style} ${size}`} type={type}>
        {children}
      </button>
    </Link>
  );
};
export default Button;
