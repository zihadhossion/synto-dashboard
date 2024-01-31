import "./product.scss";

function Product({ product, title, desc, price, date }) {
    return (
        <div className="product">
            <img src={product} alt="product image" />
            <article className="content">
                <div className="left">
                    <p className="title">{title}</p>
                    <p className="desc">{desc}</p>
                </div>
                <div className="right">
                    <p className="price">{price}</p>
                    <p className="date">{date}</p>
                </div>
            </article>
        </div>
    )
};

export default Product;
