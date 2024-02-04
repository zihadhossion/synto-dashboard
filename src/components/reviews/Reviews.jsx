import "./reviews.scss";
import Topbar from "../ui/topbar/Topbar";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Reviews() {
    return (
        <section className="reviews">
            <Topbar title={"Customer Reviews"} />
            <div className="reviewContainer">
                <div className="star-list">
                    <div className="iconList">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                    </div>
                    <p>4.3</p>
                </div>
                <div className="review">
                    <div className="text">
                        <p>5 Star</p>
                        <p>65%</p>
                    </div>
                    <div className="progress-bar">
                        <progress value="65" max="100"></progress>
                    </div>
                </div>
                <div className="review">
                    <div className="text">
                        <p>4 Star</p>
                        <p>65%</p>
                    </div>
                    <div className="progress-bar">
                        <progress value="65" max="100"></progress>
                    </div>
                </div>
                <div className="review">
                    <div className="text">
                        <p>3 Star</p>
                        <p>65%</p>
                    </div>
                    <div className="progress-bar">
                        <progress value="65" max="100"></progress>
                    </div>
                </div>
                <div className="review">
                    <div className="text">
                        <p>2 Star</p>
                        <p>65%</p>
                    </div>
                    <div className="progress-bar">
                        <progress value="65" max="100"></progress>
                    </div>
                </div>
                <div className="review">
                    <div className="text">
                        <p>1 Star</p>
                        <p>65%</p>
                    </div>
                    <div className="progress-bar">
                        <progress value="65" max="100"></progress>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Reviews;
