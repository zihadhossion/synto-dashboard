import "./titlebar.scss";
import {
    Link,
    NavLink,
} from "react-router-dom";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function TitleBar({ text = "Dashboard" }) {
    return (
        <div className="titlebar">
            <div className="left">
                {text}
            </div>
            <div className="right">
                <Link to={"/"}>
                    <span className="txt">Home</span>
                </Link>
                <DoubleArrowIcon />
                <span className="text">{text}</span>
            </div>
        </div>
    )
};

export default TitleBar;
