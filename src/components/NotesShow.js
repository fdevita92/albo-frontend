import { SimpleShowLayout, TextField, Show } from "react-admin";
import React from 'react';


export const NotesShow = (props) => {
    return(
	<Show title={"Mostra Impresa"} {...props}>
		<SimpleShowLayout>
			<TextField source='name' label='Nome' />
            <TextField source="location" label="Località"/>
            <TextField source="address" label="Indirizzo"/>
            <TextField source="pec" label="PEC"/>
            <TextField source="taxcode" label="Cod. Fiscale"/>
            <TextField source="categories_soa" label="Categorie SOA"/>
            <TextField source="categories_not_soa" label="Categorie non SOA"/>
            <TextField source="isWinner" label="Aggiudicataria"/>
            <TextField source="winnerDate" label="Data"/>	
		</SimpleShowLayout>
	</Show>
    );
};

export default NotesShow;
