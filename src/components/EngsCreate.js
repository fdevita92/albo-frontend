import React from 'react';
import { Create, SimpleForm, TextInput , DateInput, AutocompleteArrayInput} from 'react-admin';


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

const EngsCreate = (props) => {
  return (
    <Create title="Aggiungi nuovo Professionista" {...props}>
      <SimpleForm>
        <TextInput required source="number" label="Numero"/>
        <TextInput required source="name" label="Professionista"/>
        <TextInput required source="location" label="Sede legale"/>
        <TextInput required source="address" label="Indirizzo"/>
        <TextInput required source="pec" label="PEC"/>
        <TextInput  source="email" label="E-mail"/>
        <TextInput required source="vat_number" label="Partita IVA"/>
        <TextInput required source="taxcode" label="Cod. Fiscale"/>
        <AutocompleteArrayInput source="type_of_services" label="Tipologia" choices={categories}/>
        <DateInput source="invitedDate" type={"date"} label="Data di invito"/>
        <DateInput source="winnerDate" type={"date"} label="Data di aggiudicazione"/>
      </SimpleForm>
    </Create>
  );
};

export default EngsCreate;
