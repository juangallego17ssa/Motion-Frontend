import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import trivialAPI from "../axios/tshirtAPI";
import { setQuestions } from "../redux/Slices/questionsSlice";
import { StyledButton } from "../styles/StyledComponents/Button.style";
import { useDispatch } from "react-redux";

const Home = () => {
  return <StyledButton></StyledButton>;
};

export default Home;
