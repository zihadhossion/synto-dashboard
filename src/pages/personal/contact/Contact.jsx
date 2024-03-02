import "./contact.scss";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Contact() {
    return (
        <article className="contact">
            <div className="left">
                <img src="https://spruko.com/demo/synto/Synto/dist/assets/img/users/2.jpg" alt="" />
                <div>
                    <p> Socrates Itumay</p>
                    <p> +(72)-86976972</p>
                </div>
            </div>
            <div>
                <FavoriteBorderIcon />
            </div>
        </article>
    )
}