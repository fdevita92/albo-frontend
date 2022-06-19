import { SimpleShowLayout, TextField, Show,} from "react-admin";
import React from 'react';
import CategoryChipField from './CategoryChipField';
import CustomDateField from './CustomDateField';

export const NotesShow = (props) => {
    return(
	<Show title={"Mostra Impresa"} {...props}>
		<SimpleShowLayout>
            <TextField source='number' label='Numero' />
			<TextField source='name' label='Ragione Sociale' />
            <TextField source="location" label="Località"/>
            <TextField source="address" label="Indirizzo"/>
            <TextField source="pec" label="PEC"/>
            <TextField source="taxcode" label="Cod. Fiscale"/>
            <CategoryChipField source="categories_soa" sortable={false} label="Categorie SOA" />
            <CategoryChipField source="categories_not_soa" sortable={false} label="Categorie non SOA" /> 
            <CustomDateField source="invitedDate" sortable={false} label="Data di invito" />
            <CustomDateField source="winnerDate" sortable={false} label="Data di aggiudicazione" />   
            {/* <TextField source="categories_soa" label="Categorie SOA"/> */}
            {/* <TextField source="categories_not_soa" label="Categorie non SOA"/> */}
            {/* <TextField source="invitedDate" label="Data invito"/> */}
            {/* <TextField source="winnerDate" label="Data aggiudicatrice"/>	 */}
		</SimpleShowLayout>
	</Show>
    );
};

export default NotesShow;
