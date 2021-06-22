import {Box,Grid,Typography,Button} from '@material-ui/core/';


export default function DoctorPageHeader(props){
	return(
		<Grid container alignItems="center">
		<Grid item xs={12} md={10}>
		<Typography variant="h5">23 Doctors Available</Typography>
		</Grid>
		<Grid item xs={12} md={2}>
		<Box>
			<Button variant="contained" color="primary" size="large">Add New Doctor</Button>
		</Box>
		</Grid>

		</Grid>
		)
}