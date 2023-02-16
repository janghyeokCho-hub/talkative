import { useNavigate } from "react-router-dom";

interface PropsTypes {
  to: string;
  className: string;
  children: string;
}

const LinkButton = ({ to, className, children }: PropsTypes) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default LinkButton;
