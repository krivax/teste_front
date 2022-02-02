import * as React from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { Button, TextField, Typography } from '@mui/material';
import Manager from '../services/manager';




export default function AddItem() {

  const [values, setValues] = React.useState({
    simbolo: '',
    nome: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    Manager.create(values).then( (data) => {
      console.log(data);
      alert('Cadastrado com sucesso!');
    })
    setValues({
      simbolo: '',
      nome: '',
    });
  };


  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Adicionar Indexadores
      </Typography>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30%', marginLeft: '15px', marginRight: '20px' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="simbolo"
            label="Simbolo"
            nome="simbolo"
            value={values.simbolo}
            onChange={(e) => setValues({ ...values, simbolo: e.target.value })}
            size='small'
          />
          <TextField
            id="nome"
            label="Nome"
            nome="nome"
            value={values.nome}
            onChange={(e) => setValues({ ...values, nome: e.target.value })}
            size='small'
          />
          <Button variant="contained" color="primary" type="submit" onClick={onSubmit}>
            <AddIcon />
            Adicionar
          </Button>
        </Box>
    </Box>
  );
}