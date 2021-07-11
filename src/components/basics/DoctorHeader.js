import {Box,Grid,Typography,Button} from '@material-ui/core/';
import { useHistory } from "react-router-dom";

export default function DoctorPageHeader(props){
	const history = useHistory();

	return(
		<Grid container alignItems="center">
		<Grid item xs={12} md={10}>
		<Typography variant="h5">All Doctors</Typography>
		</Grid>
		<Grid item xs={12} md={2}>
		<Box>
			<Button onClick={()=>history.push("/admin/dashboard/adddoctor")} variant="contained" color="primary" size="large">Add New Doctor</Button>
		</Box>
		</Grid>

		</Grid>
		)
}