import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
const NotesEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput disabled source="id" />
        <TextInput required source="name" />
        <TextInput required source="location" />
        <TextInput required source="address" />
        <TextInput required source="pec" />
        <TextInput required source="taxcode" />
        <TextInput required source="category" />
        <TextInput required source="leaderboard" />
        <TextInput required source="isWinner" />
        <TextInput required source="winnerDate" />
      </SimpleForm>
    </Edit>
  );
};

export default NotesEdit;
