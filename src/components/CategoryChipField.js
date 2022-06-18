import * as React from "react";
import {Chip} from "@material-ui/core";
import get from "lodash/get";
import {useRecordContext} from 'react-admin';



const CategoryChipField = (props) => {
	const { source } = props;
	const record = useRecordContext(props);
	const categories = get(record,source);
	if (categories){
		return (
			<div>
				{categories.map((e) => {
					return (
						<Chip
							color='secondary'
							style={{backgroundColor:'CornFlowerBlue', margin:5}}
							label={e}
							key={source}
							size='small'
						/>
					);
				})}
			</div>
		);
	}
};

CategoryChipField.defaultProps = {
	addLabel: true,
};

export default CategoryChipField;