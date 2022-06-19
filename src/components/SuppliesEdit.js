import React from 'react';
import { Edit, SimpleForm, TextInput, ArrayInput, SimpleFormIterator} from 'react-admin';

const SuppliesEdit = (props) => {
  return (
    <Edit title="Modifica Impresa" {...props}>
      <SimpleForm>
        <TextInput required source="number" label="Numero"/>
        <TextInput required source="name" label="Ragione sociale"/>
        <TextInput required source="location" label="Sede legale"/>
        <TextInput required source="address" label="Indirizzo"/>
        <TextInput required source="pec" label="PEC"/>
        <TextInput  source="email" label="E-mail"/>
        <TextInput required source="vat_number" label="Partita IVA"/>
        <TextInput required source="taxcode" label="Cod. Fiscale"/>
        <ArrayInput source='categories' label="Settori merciologici">
            <SimpleFormIterator>
                <TextInput label="Categoria"/>
            </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default SuppliesEdit;
