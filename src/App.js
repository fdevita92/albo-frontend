import React from 'react';
import { Admin, Resource} from 'react-admin';
import polyglotI18nProvider from "ra-i18n-polyglot";
import italianMessages from "ra-language-italian";
import dataProvider from './dataProvider';

import {NotesList} from './components/NotesList';
import NotesEdit from './components/NotesEdit';
import NotesCreate from './components/NotesCreate';
import NotesShow from './components/NotesShow'

import { SuppliesList } from './components/SuppliesList';
import SuppliesCreate from './components/SuppliesCreate';
import SuppliesEdit from './components/SuppliesEdit';
import SuppliesShow from './components/SuppliesShow';

import { ServicesList } from './components/ServicesList';
import ServicesCreate from './components/ServicesCreate';
import ServicesEdit from './components/ServicesEdit';
import ServicesShow from './components/ServicesShow';

import { EngsList } from './components/EngsList';
import EngsCreate from './components/EngsCreate';
import EngsEdit from './components/EngsEdit';
import EngsShow from './components/EngsShow';

import authProvider from './authProvider';



const i18nProvider = polyglotI18nProvider(() => italianMessages, "it", {
	allowMissing: true,
});

function App() {
  return (
    <Admin dataProvider={dataProvider} i18nProvider={i18nProvider} authProvider={authProvider}>
      <Resource
        name="notes"
        options = {{label:"Lavori"}}
        list={NotesList}
        edit={NotesEdit}
        create={NotesCreate}
        show={NotesShow}
      />
      <Resource
       name="supplies" 
       options = {{label:"Forniture"}}
       list={SuppliesList}
       edit={SuppliesEdit}
       create={SuppliesCreate}
       show={SuppliesShow}
      />
      <Resource
      name="services"
      options={{label:"Servizi"}}
      list={ServicesList}
      edit={ServicesEdit}
      create={ServicesCreate}
      show={ServicesShow}
      />
      <Resource
      name="engs"
      options={{label:"Servizi di Ingegneria"}}
      list={EngsList}
      edit={EngsEdit}
      create={EngsCreate}
      show={EngsShow}
      />
    </Admin>
  );
}

export default App;
