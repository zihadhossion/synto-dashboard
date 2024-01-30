import "./item.scss";

function Item({ MySvg, title, amount, badge, BadgeIcon }) {
    return (
        <section className="item">
            <p className="badge"><BadgeIcon /> {badge}</p>
            <article>
                <div className="left">
                    <div className="icon">
                        {MySvg}
                    </div>
                </div>
                <div className="right">
                    <h3>{title}</h3>
                    <h1>{amount}</h1>
                </div>
            </article>
            <p className="desc">in the last week</p>
        </section>
    )
};

export default Item;
