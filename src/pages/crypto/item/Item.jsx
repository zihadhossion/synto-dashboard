import "./item.scss";

function Item({ MySvg, title, amount, badge, BadgeIcon, boxStyle, desc, cls }) {

    return (
        <div className="itemBox" style={boxStyle}>
            <section className="cryptoitem">
                <div className="left">
                    <div className="iconContain">
                        {MySvg}
                    </div>
                    <div>
                        <h1 className="title">{title}</h1>
                        <h3 className="desc">{desc}</h3>
                    </div>
                </div>
                <div className="right">
                    <h2 className="amount">{amount}</h2>
                    <p className={cls === "down" ? "badge down" : "badge"}>{BadgeIcon} <span>{badge}</span></p>
                </div>
            </section>
        </div>)
};

export default Item;
