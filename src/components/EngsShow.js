import { SimpleShowLayout, TextField, Show, EmailField,} from "react-admin";
import React from 'react';
import CategoryChipField from './CategoryChipField';
import CustomDateField from './CustomDateField';

export const EngsShow = (props) => {
    return(
	<Show title={"Mostra Impresa"} {...props}>
		<SimpleShowLayout>
            <TextField source='number' label='Numero' />
			<TextField source='name' label='Ragione Sociale' />
            <TextField source="location" label="Sede legale"/>
            <TextField source="address" label="Indirizzo"/>
            <TextField source="pec" label="PEC"/>
            <EmailField source="email" label="E-mail"  />
            <TextField source="vat_number" label="Partita IVA" />
            <TextField source="taxcode" label="Cod. Fiscale"/>
            <CategoryChipField source="type_of_services" sortable={false} label="Tipologia" />
            <CustomDateField source="invitedDate" sortable={false} label="Data di invito" />
            <CustomDateField source="winnerDate" sortable={false} label="Data di aggiudicazione"/> 
            <TextField source="additional_notes" label="Note" />  
		</SimpleShowLayout>
	</Show>
    );
};

export default EngsShow;