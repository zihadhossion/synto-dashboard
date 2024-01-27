import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import flag from "../../assets/flag.png";
import profile from "../../assets/profile.jpg";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="flag">
                <img src={flag} alt="" />
            </div>
            <div>
                <SearchIcon />
            </div>
            <div>
                <DarkModeOutlinedIcon />
            </div>
            <div>
                <FullscreenIcon />
            </div>
            <div>
                <ShoppingCartIcon />
            </div>
            <div>
                <NotificationsNoneOutlinedIcon />
            </div>
            <div>
                <BookmarkBorderOutlinedIcon />
            </div>
            <div className="user">
                <img src={profile} alt="" />
            </div>
        </nav>
    )
};

export default Navbar;
