import get from "lodash/get";
import {useRecordContext} from 'react-admin';
import moment from "moment";
import "moment/locale/it";

moment.locale("it");


const CustomDateField = (props) => {
	const { source } = props;
	const record = useRecordContext(props);
	const date = get(record,source);
    if(date){
	    return (
            moment(date).format("DD/MM/YYYY")
	    );
    }else{
        return("");
    }
};

/*
CustomDateField.defaultProps = {
	addLabel: true,
};*/

export default CustomDateField;