import { SimpleShowLayout, TextField, Show,} from "react-admin";
import React from 'react';
import CategoryChipField from './CategoryChipField';

export const SuppliesShow = (props) => {
    return(
	<Show title={"Mostra Impresa"} {...props}>
		<SimpleShowLayout>
        <TextField source="number" label="Numero"/>
        <TextField source="name" label="Ragione sociale"/>
        <TextField source="location" label="Località"/>
        <TextField source="taxcode" sortable={false} label="Cod. Fiscale"/>
        <CategoryChipField source="categories" sortable={false} label="Settori merciologici" />
		</SimpleShowLayout>
	</Show>
    );
};

export default SuppliesShow;
