import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function Deposits() {
  return (
    <>
      <Title>Recebidos</Title>
      <Typography component="p" variant="h4">
        R$3.024,00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Dia 30/01/2022
      </Typography>
    </>
  );
}