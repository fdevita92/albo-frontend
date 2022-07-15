import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
  SearchInput,
  AutocompleteArrayInput,
  TextInput,
} from 'react-admin';
import CategoryChipField from './CategoryChipField';
import CustomDateField from './CustomDateField';

import {jsPDF} from 'jspdf';

const categories = [
    {id:"E01",name:"E01"},
    {id:"E02",name:"E02"},
    {id:"E03",name:"E03"},
    {id:"E04",name:"E04"},
    {id:"E05",name:"E05"},
    {id:"E06",name:"E06"},
    {id:"E07",name:"E07"},
    {id:"E08",name:"E08"},
    {id:"E09",name:"E09"},
    {id:"E10",name:"E10"},
    {id:"E11",name:"E11"},
    {id:"E12",name:"E12"},
    {id:"E13",name:"E13"},
    {id:"E14",name:"E14"},
    {id:"E15",name:"E15"},
    {id:"E16",name:"E16"},
    {id:"E17",name:"E17"},
    {id:"E18",name:"E18"},
    {id:"E19",name:"E19"},
    {id:"E20",name:"E20"},
    {id:"E21",name:"E21"},
    {id:"E22",name:"E22"},
    {id:"S01",name:"S01"},
    {id:"S02",name:"S02"},
    {id:"S03",name:"S03"},
    {id:"S04",name:"S04"},
    {id:"S05",name:"S05"},
    {id:"S06",name:"S06"},
    {id:"IA01",name:"IA01"},
    {id:"IA02",name:"IA02"},
    {id:"IA03",name:"IA03"},
    {id:"IA04",name:"IA04"},
    {id:"IB04",name:"IB04"},
    {id:"IB05",name:"IB05"},
    {id:"IB06",name:"IB06"},
    {id:"IB07",name:"IB07"},
    {id:"IB08",name:"IB08"},
    {id:"IB09",name:"IB09"},
    {id:"IB10",name:"IB10"},
    {id:"IB11",name:"IB11"},
    {id:"IB12",name:"IB12"},
    {id:"V01",name:"V01"},
    {id:"V02",name:"V02"},
    {id:"V03",name:"V03"},
    {id:"D01",name:"D01"},
    {id:"D02",name:"D02"},
    {id:"D03",name:"D03"},
    {id:"D04",name:"D04"},
    {id:"D05",name:"D05"},
    {id:"T01",name:"T01"},
    {id:"T02",name:"T02"},
    {id:"T03",name:"T03"},
    {id:"P01",name:"P01"},
    {id:"P02",name:"P02"},
    {id:"P03",name:"P03"},
    {id:"P04",name:"P04"},
    {id:"P05",name:"P05"},
    {id:"P06",name:"P06"},
    {id:"U01",name:"U01"},
    {id:"U02",name:"U02"},
    {id:"U03",name:"U03"},
  ];

const notesFilter = [
    <SearchInput source='q' alwaysOn />,
  <TextInput source="location" label="Sede legale"/>,
  <AutocompleteArrayInput source="type_of_services" label="Tipologia" choices={categories}/>,
  <TextInput required source="taxcode" label="Codice Fiscale"/>,
  <TextInput required source="vat_number" label="Partita IVA"/>, 
  <TextInput required source="invitedDate" label="Anno di invito"/>,
  <TextInput required source="winnerDate" label="Anno di aggiudicazione"/>, 
];

const createHeaders = (keys) => {
 return keys.map((key)=>({
  id:key.id,
  name:key.id,
  prompt:key.label,
  width: key.id === "number" ? 20 : 50,
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
    type_of_services: record.type_of_services.join("\n"),
    invitedDate: record.hasOwnProperty('inviteDate') ? record.invitedDate.toString() : " ",
    winnerDate: record.hasOwnProperty('winnerDate') ? record.winnerDate.toString() : " ",
  }));
  
  const headers = createHeaders([
    {id:'number',label:'N.'},
    {id:'name',label:'Nome'},
    {id:"location",label:'Professionista'},
    {id:'address',label:'Indirizzo'},
    {id:'pec',label:'PEC'},
    {id:'email',label:'E-mail'},
    {id:'taxcode',label:'Codice Fiscale'},
    {id:'vat_number',label:'Partita IVA'},
    {id:'type_of_services',label:'Tiplogia'},
    {id:'invitedDate',label:'Data di invito'},
    {id:'winnerDate',label:'Data di aggiudicazione'}  
  ]);
  
  const doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape", format: "a3" });
  doc.setFontSize(4);
  doc.table(12, 1, newData, headers, { autoSize: false, fontSize:8 });
  doc.save("Albo_servizi_di_ingegneria.pdf");
};



//const NotesList = (props) => {
export const EngsList = ({ ...props }) => {
  return (
    <List filters={notesFilter} title={"Albi"} exporter={exporter} pagination={false}  bulkActionButtons={false} {...props}>
      <Datagrid>
        <TextField source="number" label="Numero"/>
        <TextField source="name" label="Professionista"/>
        <TextField source="location" label="Sede legale"/>
        <TextField source="taxcode" sortable={false} label="Cod. Fiscale"/>
        <CategoryChipField source="type_of_services" sortable={false} label="Tipologia" />
        <CustomDateField source="invitedDate" sortable={false} label="Data di invito" />
        <CustomDateField source="winnerDate" sortable={false} label="Data di aggiudicazione" />
        <EditButton label="Modifica" basePath="/engs" />
        <DeleteButton label="Elimina" basePath="/engs" />
        <ShowButton label="Mostra" basePath='/engs'/>
      </Datagrid>
    </List>
  );
};

//export default NotesList;

