import "./listtable.scss";
import ActionBtn from "../../../utils/actionBtn/ActionBtn";
// const theadData = ["SL. No", "Item Details", "Customer ID", "Customer Details", "Ordered Date", "Status", "Price", "Action",];
// const theadData = ["SL. No", "Item Details", "Customer ID", "Customer Details", "Ordered Date", "Status", "Price", "PRODUCT", "CATEGORY", "STOCK", "TOTAL SALE",];

// const rows = [
//     {
//         slNo: 1,
//         id: 145315,
//         itemTitle: "Acer Nitro 5",
//         itemImg: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//         price: '$999.99',
//         date: '15 May 2023',
//         userName: "John Smith",
//         userImg: "https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg",
//         email: "romankillon143@gmail.com",
//         status: "Success"
//     },
//     {
//         slNo: 2,
//         id: 143554,
//         itemTitle: "Airpods",
//         itemImg: "https://spruko.com/demo/synto/Synto/dist/assets/img/ecommerce/products/4.png",
//         price: '$49.99',
//         date: '15 May 2023',
//         userImg: "https://spruko.com/demo/synto/Synto/dist/assets/img/users/9.jpg",
//         userName: 'Hugh Jackma',
//         email: "romankillon143@gmail.com",
//         status: "Cancelled"
//     },
//     {
//         slNo: 3,
//         id: 149454,
//         itemTitle: "White T-Shirt",
//         itemImg: "https://spruko.com/demo/synto/Synto/dist/assets/img/ecommerce/products/2.png",
//         price: '$499.99',
//         date: '15 May 2023',
//         userImg: "https://spruko.com/demo/synto/Synto/dist/assets/img/users/12.jpg",
//         name: 'Hugh Jackma',
//         email: "romankillon143@gmail.com",
//         status: "Shipping"
//     }
// ];


function ListTable({ theadData, rows }) {
    return (
        <section className="listtable">
            <table className="table">
                <thead>
                    <tr>
                        {theadData.map((item, i) =>
                            <th key={i} className="table_head">{item}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((item) => {
                        return <tr key={item.id} className="table_row">
                            <td className="table_Cell">{item.slNo}</td>
                            <td className="table_Cell">
                                <div className="cellWrapper">
                                    <div className="imgBox">
                                        <img src={item.itemImg} alt="" className="image" />
                                    </div>
                                    <div className="text">
                                        <p className="title">{item.itemTitle}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="table_Cell">
                                {item.category}
                            </td>
                            <td className="table_Cell">
                                {item.numClass}
                            </td>
                            <td className="table_Cell">
                                {item.date}
                            </td>
                            <td className="table_Cell">{item.userName}</td>
                            <td className="table_Cell">{item.numClass}</td>
                            <td className="table_Cell">
                                <ActionBtn />
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </section>
    )
};
export default ListTable;