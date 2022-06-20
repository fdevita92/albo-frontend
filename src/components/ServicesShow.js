import { SimpleShowLayout, TextField, Show, EmailField} from "react-admin";
import React from 'react';
import CategoryChipField from './CategoryChipField';

export const ServicesShow = (props) => {
    return(
	<Show title={"Mostra Impresa"} {...props}>
		<SimpleShowLayout>
        <TextField source="number" label="Numero"/>
        <TextField source="name" label="Ragione sociale"/>
        <TextField source="location" label="Sede legale"/>
        <EmailField source="pec" label="PEC"  />
        <EmailField source="email" label="E-mail"  />
        {/* <TextField source="pec" label="PEC"/> */}
        {/* <TextField source="email" label="E-mail"/> */}
        <TextField source="vat_number" label="Partita IVA" />
        <TextField source="taxcode" label="Cod. Fiscale"/>
        <CategoryChipField source="type_of_services" sortable={false} label="Tipologia" />
		</SimpleShowLayout>
	</Show>
    );
};

export default ServicesShow;
