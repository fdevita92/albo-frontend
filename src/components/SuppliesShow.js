import { SimpleShowLayout, TextField, Show, EmailField} from "react-admin";
import React from 'react';
import CategoryChipField from './CategoryChipField';

export const SuppliesShow = (props) => {
    return(
	<Show title={"Mostra Impresa"} {...props}>
		<SimpleShowLayout>
        <TextField source="number" label="Numero"/>
        <TextField source="name" label="Ragione sociale"/>
        <TextField source="location" label="Sede legale"/>
        <TextField source="pec" label="PEC"/>
        <EmailField source="email" label="E-mail"  />
        <TextField source="vat_number" label="Partita IVA" />
        <TextField source="taxcode" sortable={false} label="Cod. Fiscale"/>
        <CategoryChipField source="categories" sortable={false} label="Settori merciologici" />
        <TextField source="additional_notes" label="Note" />
		</SimpleShowLayout>
	</Show>
    );
};

export default SuppliesShow;
