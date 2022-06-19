import React from 'react';
import { unparse as convertToCSV } from 'papaparse/papaparse.min';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
  SearchInput,
  downloadCSV,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';
import CategoryChipField from './CategoryChipField';

const notesFilter = [
    <SearchInput source='q' alwaysOn />,
    <TextInput source="location" label="Sede legale"/>,
    <ArrayInput source='type_of_services' label="Tipo di servizi">
    <SimpleFormIterator>
        <TextInput label="Categoria"/>
    </SimpleFormIterator>
    </ArrayInput>,
];



const exporter = data => {
  const csv = convertToCSV({
      data,
      fields: ['name','location','address','pec','email','taxcode','vat_number','type_of_services'],
  });
  downloadCSV(csv, 'Imprese_servizi');
};


//const NotesList = (props) => {
export const ServicesList = ({ ...props }) => {
  return (
    <List filters={notesFilter} title={"Albi"} exporter={exporter} pagination={false} bulkActionButtons={false}
    {...props}>
      <Datagrid>
        <TextField source="number" label="Numero"/>
        <TextField source="name" label="Ragione sociale"/>
        <TextField source="location" label="Sede legale"/>
        <TextField source="taxcode" sortable={false} label="Cod. Fiscale"/>
        <CategoryChipField source="type_of_services" sortable={false} label="Tipo di servizi" />
        <EditButton label="Modifica" basePath="/services" />
        <DeleteButton label="Elimina" basePath="/services" />
        <ShowButton label="Mostra" basePath='/services'/>
      </Datagrid>
    </List>
  );
};

//export default NotesList;

