import "./titlebar.scss";
import { useNavigate } from "react-router-dom";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function TitleBar({ text = "Dashboard" }) {
    const navigate = useNavigate();
    return (
        <div className="titlebar">
            <div className="left">
                {text}
            </div>
            <div className="right">
                <span className="homeBtn" onClick={() => navigate("/")}>Home</span>
                <DoubleArrowIcon />
                <span className="text">{text}</span>
            </div>
        </div>
    )
};

export default TitleBar;
