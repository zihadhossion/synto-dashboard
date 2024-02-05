import React from "react";
// import TableRow from "./TableRow";
// import TableHeadItem from "./TableHead";

// const theadData = ["Name", "Email", "Date"];

const tName = [
    {
        id: "1",
        items: ["John"]
    },
    {
        id: "2",
        items: ["Sally",]
    },
    {
        id: "3",
        items: ["Maria",]
    },
]
const tPrice = [
    {
        id: "1",
        items: ["229$"]
    },
    {
        id: "2",
        items: ["129$"]
    },
    {
        id: "3",
        items: ["199$"]
    },
]
const tDate = [
    {
        id: "1",
        items: ["01/01/2021"]
    },
    {
        id: "2",
        items: ["12/24/2020"]
    },
    {
        id: "3",
        items: ["12/01/2020"]
    },
]

const Datatable = () => {
    return (
        <table>
            <tbody>
                <TableRow />
            </tbody>
        </table>
    );
};

export default Datatable;

const TableRow = ({ data }) => {
    return (
        <>
            <tr>
                <TableName />
            </tr>
            <tr>
                <TablePrice />
            </tr>
            <tr>
                <TableDate />
            </tr>
        </>
    );
};

const TableName = () => {
    return (
        <td>
            {tName.map((item) => {
                return <td key={item.id}>
                    <div>
                        <p>Name</p>
                        <p>{item.items}</p>
                    </div>
                </td>;
            })}
        </td>
    )
}
const TablePrice = () => {
    return (
        <td>
            {tPrice.map((item) => {
                return <td key={item.id}>
                    <div>
                        <p>Price</p>
                        <p>{item.items}</p>
                    </div>
                </td>;
            })}
        </td>
    )
}
const TableDate = () => {
    return (
        <td>
            {tDate.map((item) => {
                return <td key={item.id}>
                    <div>
                        <p>Delivery Date</p>
                        <p>{item.items}</p>
                    </div>
                </td>;
            })}
        </td>
    )
}

// export default TableRow;

// const TableRow = ({ data }) => {
//     return (
//         <tr>

//             {tName.map((item) => {
//                 return <td key={item.id}>
//                     <div>
//                         <p>Name</p>
//                         {item.items}
//                     </div>
//                 </td>;
//             })}
//             {tPrice.map((item) => {
//                 return <td key={item.id}>
//                     <div>
//                         <p>Price</p>
//                         {item.items}
//                     </div>
//                 </td>;
//             })}
//             {tDate.map((item) => {
//                 return <td key={item.id}>
//                     <div>
//                         <p>Delivery Time</p>
//                         {item.items}
//                     </div>
//                 </td>;
//             })}
//         </tr>
//     );
// };
