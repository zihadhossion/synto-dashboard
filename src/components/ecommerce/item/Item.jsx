import "./item.scss";

function Item({ MySvg, title, amount, badge, BadgeIcon, boxStyle, desc }) {

    return (
        <div className="itemBox" style={boxStyle}>
            <section className="ecommerceitem">
                <div className="left">
                    {MySvg}
                </div>
                <div className="right">
                    <h3 className="title">{title}</h3>
                    <h1>{amount}</h1>
                    <p className="desc">{desc} <span>{badge}</span></p>
                </div>
            </section>
        </div>)
};

export default Item;
