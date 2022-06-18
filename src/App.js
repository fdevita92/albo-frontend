import React from 'react';
import { Admin, Resource} from 'react-admin';
import polyglotI18nProvider from "ra-i18n-polyglot";
import italianMessages from "ra-language-italian";
import dataProvider from './dataProvider';
import {NotesList} from './components/NotesList';
import NotesEdit from './components/NotesEdit';
import NotesCreate from './components/NotesCreate';
import NotesShow from './components/NotesShow'
import authProvider from './authProvider';


const i18nProvider = polyglotI18nProvider(() => italianMessages, "it", {
	allowMissing: true,
});

function App() {
  return (
    <Admin dataProvider={dataProvider} i18nProvider={i18nProvider} authProvider={authProvider}>
      <Resource
        name="notes"
        options = {{label:"Imprese di lavori"}}
        list={NotesList}
        edit={NotesEdit}
        create={NotesCreate}
        show={NotesShow}
      />
    </Admin>
  );
}

export default App;
