import "./trackingCard.scss";
import AttachmentIcon from '@mui/icons-material/Attachment';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';

function TrackingCard() {
    return (
        <div className="trackingCard">
            <article className="box">
                <img src="https://spruko.com/demo/synto/Synto/dist/assets/img/png-images/15.png" alt="" />
                <h1>welcome back ...!</h1>
                <p>Start Working On the Assigned project....</p>
                <button>Let's Start</button>
            </article>
            <article className="box description">
                <p>designing landing page</p>
                <p>tasks: 112 / 369</p>
                <span>High</span>
                <div className="imageContainer">
                    <div>
                        <img src="https://spruko.com/demo/synto/Synto/dist/assets/img/users/8.jpg" alt="" />
                        <img src="https://spruko.com/demo/synto/Synto/dist/assets/img/users/4.jpg" alt="" />
                        <img src="https://spruko.com/demo/synto/Synto/dist/assets/img/users/6.jpg" alt="" />
                        <img src="https://spruko.com/demo/synto/Synto/dist/assets/img/users/7.jpg" alt="" />
                        <span>9+</span>
                    </div>
                    <div>
                        <div>
                            <AttachmentIcon /> <span>3</span>
                        </div>
                        <div>
                            <ChatBubbleOutlineRoundedIcon /> <span>29</span>
                        </div>
                    </div>

                </div>
            </article>
        </div>
    )
};

export default TrackingCard;
