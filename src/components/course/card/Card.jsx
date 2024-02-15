import "./card.scss";

function Card({ MySvg, title, amount, badge, BadgeIcon }) {
    return (
        <section className="card">
            <p className="badge"><BadgeIcon /> {badge}</p>
            <article>
                <div className="left">
                    {MySvg}
                </div>
                <div className="right">
                    <h1>{amount}</h1>
                    <h3>{title}</h3>
                </div>
            </article>
        </section>
    )
};

export default Card;
