import "./listtable.scss";

export default function ListTable() {
    const tasks = { id: 1, userImg: "https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg", name: 'Hugh Jackma', price: '$499.99', deliveryDate: '15 May 2022', itemImg: "https://spruko.com/demo/synto/Synto/dist/assets/img/ecommerce/products/2.png" };

    return (
        <>
            <table className="table" key={tasks.id}>
                <tbody className="tableBody">
                    <TableRow userImg={tasks.userImg} name={tasks.name} price={tasks.price} deliveryDate={tasks.deliveryDate} itemImg={tasks.itemImg} />
                    <TableRow userImg={tasks.userImg} name={tasks.name} price={tasks.price} deliveryDate={tasks.deliveryDate} itemImg={tasks.itemImg} />
                    <TableRow userImg={tasks.userImg} name={tasks.name} price={tasks.price} deliveryDate={tasks.deliveryDate} itemImg={tasks.itemImg} />
                    <TableRow userImg={tasks.userImg} name={tasks.name} price={tasks.price} deliveryDate={tasks.deliveryDate} itemImg={tasks.itemImg} />
                    <TableRow userImg={tasks.userImg} name={tasks.name} price={tasks.price} deliveryDate={tasks.deliveryDate} itemImg={tasks.itemImg} />
                </tbody>
            </table>
        </>)
}

const TableRow = ({ userImg, name, price, deliveryDate, itemImg }) => {
    return (
        <tr className="table-Row">
            <td className="table-Cell">
                <div className="tiHead">
                    <div>
                        <div>
                            <img src={userImg} alt="Image Description" />
                            <span>
                            </span>
                        </div>
                    </div>
                    <div className="text">
                        <span>Name</span>
                        <p>{name}</p>
                    </div>
                </div>
            </td>
            <td className="table-Cell">
                <div className="text">
                    <span>Price</span>
                    <p className="price">{price}</p>
                </div>
            </td>
            <td className="table-Cell">
                <div className="text">
                    <span>Delivery Date</span>
                    <p>{deliveryDate}</p>
                </div>
            </td>
            <td className="table-Cell">
                <img src={itemImg} alt="Image Description" />
            </td>
        </tr>
    )
}