import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const LogoComponent = ({textSize = '2xl', imgOther = '', textOther = ''}: {textSize: string, imgOther: string, textOther: string}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
      <img src={Logo} alt="Logo" className={`${imgOther}`} />
      <span className={`${textOther} font-bold md:text-${textSize} text-ct-grey`}>gestiona</span>
    </div>
  );
};

export default LogoComponent;