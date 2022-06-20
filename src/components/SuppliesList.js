import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
  SearchInput,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';
import CategoryChipField from './CategoryChipField';

import {jsPDF} from 'jspdf';


const notesFilter = [
    <SearchInput source='q' alwaysOn />,
    <TextInput source="location" label="Sede legale"/>,
    <ArrayInput source='categories' label="Settori merciologici">
    <SimpleFormIterator>
        <TextInput label="Categoria"/>
    </SimpleFormIterator>
    </ArrayInput>,
];

const createHeaders = (keys) => {
  return keys.map((key)=>({
   id:key.id,
   name:key.id,
   prompt:key.label,
   width: key.id === "number" ? 20 : 65,
   align:"center",
   padding:0
  }));
 }
 
 const exporter = data => {
   const newData = data.map((record,i) => ({
     id:i.toString(),
     number: record.number.toString(),
     name: record.name.toString(),
     location: record.location.toString(),
     address: record.address.toString(),
     pec: record.pec.toString(),
     email: record.hasOwnProperty('email') ? record.email.toString() : " ",
     taxcode: record.taxcode.toString(),
     vat_number: record.vat_number.toString(),
     categories: record.categories.join("\n"),
   }));
   
   const headers = createHeaders([
     {id:'number',label:'N.'},
     {id:'name',label:'Nome'},
     {id:"location",label:'Ragione sociale'},
     {id:'address',label:'Indirizzo'},
     {id:'pec',label:'PEC'},
     {id:'email',label:'E-mail'},
     {id:'taxcode',label:'Codice Fiscale'},
     {id:'vat_number',label:'Partita IVA'},
     {id:'categories',label:'Settori merciologici'},
   ]);
   
   const doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape", format: "a3" });
   doc.setFontSize(4);
   doc.table(7, 1, newData, headers, { autoSize: false, fontSize:8});
   doc.save("Imprese_forniture.pdf");
 };




//const NotesList = (props) => {
export const SuppliesList = ({ ...props }) => {
  return (
    <List filters={notesFilter} title={"Albi"} exporter={exporter} pagination={false} bulkActionButtons={false}
    {...props}>
      <Datagrid>
        <TextField source="number" label="Numero"/>
        <TextField source="name" label="Ragione sociale"/>
        <TextField source="location" label="Sede legale"/>
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

