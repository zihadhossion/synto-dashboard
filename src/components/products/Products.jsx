import Product from "../ui/product/Product";
import Topbar from "../ui/topbar/Topbar";
import "./products.scss";
import item1 from "../../assets/item-1.jpg";
import item2 from "../../assets/item-2.jpg";
import item3 from "../../assets/item-3.jpg";

function Products({ title }) {
    return (
        <section className="products">
            <Topbar title={title} />
            <div className="productsContainer">
                <Product product={item1} title={"Smart Phone"} desc={"Mobiles"} price={"$199.99"} date={"1 Apr 2023"} />
                <Product product={item2} title={"Nikon Camera"} desc={"Electronics"} price={"$899.00"} date={"1 Apr 2023"} />
                <Product product={item3} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
                <Product product={item1} title={"Smart Phone"} desc={"Mobiles"} price={"$199.99"} date={"1 Apr 2023"} />
                <Product product={item2} title={"Nikon Camera"} desc={"Electronics"} price={"$899.00"} date={"1 Apr 2023"} />
                <Product product={item3} title={"Stop Watch"} desc={"Electronics"} price={"$39.99"} date={"1 Apr 2023"} />
            </div>
        </section>
    )
};

export default Products;
