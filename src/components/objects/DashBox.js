import {Grid, Box } from "@material-ui/core";


export default function Dashbox(props) {


	return (
		
		<Grid container spacing={4}>
			<Grid item xs={12} md={4}>
				<Box border={0} boxShadow={3} p={2} borderRadius={3} >
					<h1>Total Doctors</h1>
					<h1>N/A</h1>
				</Box>
			</Grid>
			<Grid item xs={12} md={4}>
				<Box border={0} boxShadow={3} p={2} borderRadius={3}>
					<h1>Total Customer</h1>
					<h1>N/A</h1>
				</Box>
			</Grid>
			<Grid item xs={12} md={4}>
				<Box border={0} boxShadow={3} p={2} borderRadius={3}>
					<h1>Total Revenue</h1>
					<h1>N/A</h1>
				</Box>
			</Grid>
		</Grid>

	);
}
