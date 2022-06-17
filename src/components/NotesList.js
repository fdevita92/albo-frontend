import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ShowButton,
  SearchInput,
  SelectArrayInput,
} from 'react-admin';

const categories = [
  { id: 'OG1', name: 'OG1' },
  { id: 'OG2', name: 'OG2' },
  { id: 'OG3', name: 'OG3' },
  { id: 'OG4', name: 'OG4' },
  { id: 'OG5', name: 'OG5' },
  { id: 'OG6', name: 'OG6' },
  { id: 'OG7', name: 'OG7' },
  { id: 'OG8', name: 'OG8' },
  { id: 'OG9', name: 'OG9' },
  { id: 'OG10', name: 'OG10'},
  { id: 'OG11', name: 'OG11'},
  { id: 'OG12', name: 'OG12'},
  { id: 'OG13', name: 'OG13' },
  { id: 'OS1', name: 'OS1' },
  { id: 'OS2/A', name: 'OS2/A'},
  { id: 'OS2/B', name: 'OS2/B'},
  { id: 'OS3', name: 'OS3'},
  { id: 'OS4', name: 'OS4'},
  { id: 'OS5', name: 'OS5'},
  { id: 'OS6', name: 'OS6'},
  { id: 'OS7', name: 'OS7' },
  { id: 'OS8', name: 'OS8' },
  { id: 'OS9', name: 'OS9' },
  { id: 'OS10', name: 'OS10'},
  { id: 'OS11', name: 'OS11'},
  { id: 'OS12/A', name: 'OS12/A'},
  { id: 'OS12/B', name: 'OS12/B'},
  { id: 'OS13', name: 'OS13'},
  { id: 'OS14', name: 'OS14'},
  { id: 'OS15', name: 'OS15'},
  { id: 'OS16', name: 'OS16'},
  { id: 'OS17', name: 'OS17' },
  { id: 'OS18/A', name: 'OS18/A'},
  { id: 'OS18/B', name: 'OS18/B'},
  { id: 'OS19', name: 'OS19'},
  { id: 'OS20/A', name: 'OS20/A'},
  { id: 'OS20/B', name: 'OS20/B'},
  { id: 'OS21', name: 'OS21'},
  { id: 'OS22', name: 'OS22'},
  { id: 'OS23', name: 'OS23'},
  { id: 'OS24', name: 'OS24'},
  { id: 'OS25', name: 'OS25'},
  { id: 'OS26', name: 'OS26'},
  { id: 'OS27', name: 'OS27'},
  { id: 'OS28', name: 'OS28'},
  { id: 'OS29', name: 'OS29'},
  { id: 'OS30', name: 'OS30'},
  { id: 'OS31', name: 'OS31'},
  { id: 'OS32', name: 'OS32'},
  { id: 'OS33', name: 'OS33'},
  { id: 'OS34', name: 'OS34'},
  { id: 'OS35', name: 'OS35'},
];

const notesFilter = [
	<SearchInput source='q' alwaysOn />,
  <SelectArrayInput source="categories_soa" label="Categorie SOA" />,
  <SelectArrayInput source="categories_not_soa" label="Categorie non SOA" choices={categories} />,
];


//const NotesList = (props) => {
export const NotesList = ({ ...props }) => {
  return (
    <List filters={notesFilter} title={"Albi"} {...props}>
      <Datagrid>
        <TextField source="number" label="Numero"/>
        <TextField source="name" label="Ragione sociale"/>
        <TextField source="location" label="Località"/>
        <TextField source="taxcode" sortable={false} label="Cod. Fiscale"/>
        <TextField source="categories_soa" sortable={false} label="Categorie SOA"/>
        <TextField source="categories_not_soa" sortable={false} label="Categorie non SOA"/>
        <EditButton label="Modifica" basePath="/notes" />
        <DeleteButton label="Elimina" basePath="/notes" />
        <ShowButton label="Mostra" basePath='/notes'/>
      </Datagrid>
    </List>
  );
};

//export default NotesList;

