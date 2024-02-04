import React from "react";
// import TableRow from "./TableRow";
// import TableHeadItem from "./TableHead";

const theadData = ["Name", "Email", "Date"];

const tbodyData = [
    {
        id: "1",
        items: ["John", "john@email.com", "01/01/2021"]
    },
    {
        id: "2",
        items: ["Sally", "sally@email.com", "12/24/2020"]
    },
    {
        id: "3",
        items: ["Maria", "maria@email.com", "12/01/2020"]
    },
]

const Datatable = () => {
    return (
        <table>
            <thead>
                <tr>
                    {theadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item.items} />;
                })}
            </tbody>
        </table>
    );
};

export default Datatable;


const TableHeadItem = ({ item }) => {
    return (
        <td title={item}>
            {item}
        </td>
    );
};

// export default TableHeadItem;

// import React from "react";

const TableRow = ({ data }) => {
    return (
        <tr>
            {data.map((item) => {
                return <td key={item}>{item}</td>;
            })}
        </tr>
    );
};

// export default TableRow;
