import React from 'react';
import { Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator} from 'react-admin';


const SuppliesCreate = (props) => {
  return (
    <Create title="Aggiungi nuova Impresa" {...props}>
      <SimpleForm>
        <TextInput required source="number" label="Numero"/>
        <TextInput required source="name" label="Ragione sociale"/>
        <TextInput required source="location" label="Località"/>
        <TextInput required source="address" label="Indirizzo"/>
        <TextInput required source="pec" label="PEC"/>
        <TextInput required source="taxcode" label="Cod. Fiscale"/>
        <ArrayInput source='categories' label="Settori merciologici">
            <SimpleFormIterator>
                <TextInput label="Categoria"/>
            </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default SuppliesCreate;
