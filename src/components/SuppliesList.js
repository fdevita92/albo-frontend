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
    <TextInput source="location" label="Località"/>,
    <ArrayInput source='categories' label="Settori merciologici">
    <SimpleFormIterator>
        <TextInput label="Categoria"/>
    </SimpleFormIterator>
    </ArrayInput>,
];

/*<AutocompleteArrayInput
onCreate={() => {
    const newTagName = prompt('Inserisci una nuova categoria');
    const newTag = { id: newTagName, name: newTagName };
    tags.push(newTag);
    return newTag;
}}
source="categories"
label="Settori merciologici"
createItemLabel=""
optionText=""
choices={tags}
/>,*/

const exporter = data => {
  const csv = convertToCSV({
      data,
      fields: ['name','location','address','taxcode','pec','categories'],
  });
  downloadCSV(csv, 'Imprese_forniture');
};


//const NotesList = (props) => {
export const SuppliesList = ({ ...props }) => {
  return (
    <List filters={notesFilter} title={"Albi"} exporter={exporter} pagination={false} bulkActionButtons={false}
    {...props}>
      <Datagrid>
        <TextField source="number" label="Numero"/>
        <TextField source="name" label="Ragione sociale"/>
        <TextField source="location" label="Località"/>
        <TextField source="taxcode" sortable={false} label="Cod. Fiscale"/>
        <CategoryChipField source="categories" sortable={false} label="Settori merciologici" />
        <EditButton label="Modifica" basePath="/supplies" />
        <DeleteButton label="Elimina" basePath="/supplies" />
        <ShowButton label="Mostra" basePath='/supplies'/>
      </Datagrid>
    </List>
  );
};

//export default NotesList;

