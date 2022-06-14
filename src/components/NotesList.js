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
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="location" />
        <TextField source="address" />
        <TextField source="pec" />
        <TextField source="taxcode" />
        <TextField source="category" />
        <TextField source="leaderboard" />
        <TextField source="isWinner" />
        <TextField source="winnerDate" />
        <EditButton label="Modifica" basePath="/notes" />
        <DeleteButton label="Elimina" basePath="/notes" />
      </Datagrid>
    </List>
  );
};

export default NotesList;
