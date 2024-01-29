import "./item.scss";

function Item({ MySvg, title, amount, badge, BadgeIcon }) {
    return (
        <section className="item">
            <div className="left">
                <div className="icon">
                    {MySvg}
                </div>
            </div>
            <div className="right">
                <h3>{title}</h3>
                <h1>{amount}</h1>
                <p>in the last week</p>
            </div>
            <span className="badge"><BadgeIcon /> {badge}</span>
        </section>
    )
};

export default Item;
