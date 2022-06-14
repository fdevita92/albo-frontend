import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
const NotesCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="location" />
        <TextInput source="address" />
        <TextInput source="pec" />
        <TextInput source="taxcode" />
        <TextInput source="category" />
        <TextInput source="leaderboard"/>
        <TextInput source="isWinner" />
        <TextInput source="winnerDate" />
      </SimpleForm>
    </Create>
  );
};

export default NotesCreate;
