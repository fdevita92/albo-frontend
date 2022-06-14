import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
const NotesEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id"/>
        <TextInput required source="name" label="Nome"/>
        <TextInput required source="location" label="Località"/>
        <TextInput required source="address" label="Indirizzo"/>
        <TextInput required source="pec" label="PEC"/>
        <TextInput required source="taxcode" label="Cod. Fiscale"/>
        <TextInput required source="category" label="Categoria"/>
        <TextInput required source="leaderboard" label="Classifica"/>
        <TextInput  source="isWinner" label="Aggiudicatrice"/>
        <TextInput  source="winnerDate" label="Data"/>
      </SimpleForm>
    </Edit>
  );
};

export default NotesEdit;
