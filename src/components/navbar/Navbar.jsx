import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import flag from "../../assets/flag.png";
import profile from "../../assets/profile.jpg";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="header-country">
                <button className="flag">
                    <img src={flag} alt="" />
                </button>
            </div>
            <div className="header-search">
                <button className="search">
                    <SearchIcon />
                </button>
            </div>
            <div className="header-darkmode">
                <button className="darkmode">
                    <DarkModeOutlinedIcon />
                </button>
            </div>
            <div className="header-fullscreen">
                <button className="fullscreen">
                    <FullscreenIcon />
                </button>
            </div>
            <div className="header-shopcart">
                <button className="shopcart">
                    <ShoppingBasketIcon />
                    <p className="counter red">4</p>
                </button>
            </div>
            <div className="header-notification">
                <button className="notification">
                    <NotificationsNoneOutlinedIcon />
                    <p className="counter green">3</p>
                </button>
            </div>
            <div className="header-bookmark">
                <button className="bookmark">
                    <BookmarkBorderOutlinedIcon />
                </button>
            </div>
            <div className="header-user">
                <button className="user">
                    <img src={profile} alt="" />
                </button>
            </div>
        </nav>
    )
};

export default Navbar;
