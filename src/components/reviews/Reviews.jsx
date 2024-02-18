import "./reviews.scss";
import Topbar from "../ui/topbar/Topbar";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const data = [
    {
        title: "5 Star",
        percent: "55"
    },
    {
        title: "4 Star",
        percent: "65"
    },
    {
        title: "3 Star",
        percent: "60"
    },
    {
        title: "2 Star",
        percent: "70"
    },
    {
        title: "1 Star",
        percent: "50"
    }
]

function Reviews({ IconBox }) {
    return (
        <section className="reviews">
            <Topbar title={"Customer Reviews"} IconBox={IconBox} />
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
                {
                    data.map((item, i) =>
                        <div className="review" key={i}>
                            <div className="text">
                                <p>{item.title}</p>
                                <p>{item.percent}%</p>
                            </div>
                            <div className="progress-bar">
                                <progress value={item.percent} max="100"></progress>
                            </div>
                        </div>
                    )}
            </div>
        </section>
    )
};

export default Reviews;
