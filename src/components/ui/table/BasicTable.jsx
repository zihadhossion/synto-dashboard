import "./table.scss";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        category: "John Smith",
        totalSale: 785,
        stock: "In Stock",
    },
    {
        id: 2235235,
        product: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        category: "Michael Doe",
        totalSale: 900,

        stock: "Out Of Stock",
    },
    {
        id: 2342353,
        product: "Redragon S101",
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        category: "John Smith",
        totalSale: 35,
        stock: "Out Of Stock",
    },
    {
        id: 2357741,
        product: "Razer Blade 15",
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        category: "Jane Smith",
        totalSale: 920,
        stock: "In Stock",
    },
    {
        id: 2342355,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        category: "Harold Carol",
        totalSale: 2000,
        stock: "Out Of Stock",
    },
];

function BasicTable() {
    return (
        <div className="table">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Stock</TableCell>
                            <TableCell align="right">Total Sales</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>
                                    <div className="cellWrapper">
                                        <img src={row.img} alt="" className="image" />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.stock}</TableCell>
                                <TableCell align="right">{row.totalSale}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default BasicTable;




