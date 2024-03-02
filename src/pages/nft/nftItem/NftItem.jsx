import "./nftItem.scss";
import { nftItem } from "../../../data/dashSource";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Topbar from "../../../components/ui/topbar/Topbar";
import Button from "../../../utils/button/Button";

function NftItem({ likeBadge = "1.3K" }) {
    // var currentDate = new Date();

    // var hours = currentDate.getHours();
    // var minutes = currentDate.getMinutes();
    // var seconds = currentDate.getSeconds();

    // var formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    // console.log("Current time: " + formattedTime);

    return (
        <>
            <Topbar title={"Hot auctions :"} IconBox={<Button title={"View all"} />} />
            <div className="nftItem">
                {nftItem.map((item, i) =>
                    <div className="box" key={i}>
                        <img src={item.bgImg} alt="background image" className="bgImg" />
                        <div className="likeSection">
                            <div className="leftIcon">
                                <FavoriteOutlinedIcon />
                            </div>
                            <div className="likedText">
                                <FavoriteOutlinedIcon />
                                <span>{likeBadge}</span>
                            </div>
                        </div>
                        <div className="box_body">
                            <h3>{item.title}</h3>
                            <div className="profile">
                                <img src={item.userImg} alt="" />
                                <div>
                                    <h5>{item.userName} NFT</h5>
                                    <p>@{item.userName}0202</p>
                                </div>
                            </div>
                            <div className="txtContent">
                                <div>
                                    <p>Higest bid</p>
                                    <p>5554</p>
                                </div>
                                <div>
                                    <p>Ending time</p>
                                    <p>20:24:20</p>
                                </div>
                            </div>
                            <button>Place Bid</button>
                        </div>
                    </div>
                )}
            </div >
        </>

    )
};

export default NftItem;
