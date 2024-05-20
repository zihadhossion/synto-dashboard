import { useContext, useState, useEffect } from "react";
import { Link, } from "react-router-dom";
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import flag from "../../assets/flag.png";
import profile from "../../assets/profile.jpg";
import { SidebarContext } from "../../context/SidebarContext";
import { DarkModeContext } from "../../context/DarkModeContext";

function Navbar() {
    // const { sidebarActive, setSidebarActive } = useContext(SidebarContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Attach event listener to window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {windowWidth > 768 ? <DeskNavbar /> : <MobNavbar />}
        </>
    )
};

export default Navbar;

function MobNavbar() {
    const { sidebarActive, setSidebarActive } = useContext(SidebarContext);

    return (
        <header className="mobHeader">
            <nav className="mobNavbar">
                <div className="left">
                    <div className="arrowIcon" onClick={() => setSidebarActive((e) => !e)}>
                        {sidebarActive ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                    </div>
                    <div className="logoImage">
                        <Link to={"/"}>
                            <img src={"https://spruko.com/demo/synto/Synto/dist/assets/img/brand-logos/desktop-logo.png"} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <div className="header-search">
                        <button className="search">
                            <SearchIcon />
                        </button>
                    </div>
                    <div className="header-search">
                        <button className="search">
                            <SearchIcon />
                        </button>
                    </div>
                    <div className="header-user">
                        <button className="profile">
                            <img src={profile} alt="" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
};

function DeskNavbar() {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { sidebarActive, setSidebarActive } = useContext(SidebarContext);

    return (
        <header className={sidebarActive ? "header" : "header active"}>
            <nav className="navbar">
                <div className="left" onClick={() => setSidebarActive((e) => !e)}>
                    {sidebarActive ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                </div>
                <div className="right">
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
                        <button className="darkmode" onClick={toggleDarkMode}>
                            {isDarkMode ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}

                        </button>
                    </div>
                    <div className="header-fullscreen">
                        <button className="fullscreen">
                            <FullscreenIcon />
                        </button>
                    </div>
                    <div className="header-shopcart">
                        <button className="shopcart">
                            <ShoppingBasketIcon className="icon" />
                            <p className="counter red">4</p>
                        </button>
                    </div>
                    <div className="header-notification">
                        <button className="notification">
                            <NotificationsNoneOutlinedIcon className="icon" />
                            <span className="outer">
                                <span className="animate-ping"></span>
                                <span className="counter green">3</span>
                            </span>
                        </button>
                    </div>
                    <div className="header-bookmark">
                        <button className="bookmark">
                            <BookmarkBorderOutlinedIcon />
                        </button>
                    </div>
                    <div className="header-user">
                        <button className="profile">
                            <img src={profile} alt="" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
};
