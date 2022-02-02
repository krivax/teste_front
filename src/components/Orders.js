import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import manager from '../services/manager';
import { IconButton } from '@mui/material';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function Orders() {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    manager.getAll().then((data) => {
      console.log(data);
      setOrders(data);

    })
  }, [orders])

  // const onDelete = (id) => {
  //   // manager.delete(id)
  // }
  // const onEdit = (id) => {
  //   const order = orders.find(order => order.id === id);
  //   manager.get(id)
  // }

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Codigo</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Simbolo</TableCell>
            <TableCell align="right">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.id}
              </TableCell>
              <TableCell>{order.nome}</TableCell>
              <TableCell>{order.simbolo}</TableCell>
              <TableCell align="right">
                <IconButton color="success" aria-label="upload picture" component="span">
                  <EditIcon />
                </IconButton>
                <IconButton color="error" aria-label="upload picture" component="span">
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack spacing={2} alignItems={'center'}>
        <Pagination count={10} size="small" />
      </Stack>
    </TableContainer>
  );
}