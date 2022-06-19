import React from 'react';
import { Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator} from 'react-admin';


const ServicesCreate = (props) => {
  return (
    <Create title="Aggiungi nuova Impresa" {...props}>
      <SimpleForm>
        <TextInput required source="number" label="Numero"/>
        <TextInput required source="name" label="Ragione sociale"/>
        <TextInput required source="location" label="Sede legale"/>
        <TextInput required source="address" label="Indirizzo"/>
        <TextInput required source="pec" label="PEC"/>
        <TextInput  source="email" label="E-mail"/>
        <TextInput required source="vat_number" label="Partita IVA"/>
        <TextInput required source="taxcode" label="Cod. Fiscale"/>
        <ArrayInput source='type_of_services' label="Tipo di servizi">
            <SimpleFormIterator>
                <TextInput label="Categoria"/>
            </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default ServicesCreate;
