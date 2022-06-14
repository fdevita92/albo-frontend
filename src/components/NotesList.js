import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const NotesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" label="Ragione sociale"/>
        <TextField source="location" label="Località"/>
        <TextField source="address" label="Indirizzo"/>
        <TextField source="pec" label="PEC"/>
        <TextField source="taxcode" label="Cod. Fiscale"/>
        <TextField source="categories_soa" label="Categorie SOA"/>
        <TextField source="categories_not_soa" label="Categorie non SOA"/>
        <TextField source="isWinner" label="Aggiudicataria"/>
        <TextField source="winnerDate" label="Data"/>
        <EditButton label="Modifica" basePath="/notes" />
        <DeleteButton label="Elimina" basePath="/notes" />
      </Datagrid>
    </List>
  );
};

export default NotesList;
