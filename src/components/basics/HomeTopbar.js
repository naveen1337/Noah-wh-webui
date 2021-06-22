import { Grid, Box, Typography } from "@material-ui/core/";
import { Call } from "@material-ui/icons/";


export default function HomeTopbar(props) {
	return (
		<Box
			border={1}
			display="flex"
			flexDirection="row"
			justifyContent="space-around"
			alignItems="center"
			p={1}
		>
			<Box>
				<img src="logo.png" alt="logo"/>
			</Box>
			<Box component={Grid} display={{ xs: "none", md: "block" }}>
				<Box display="flex" flexDirection="row" alignItems="center">
					<Box
						px={2}
						py={2}
						mx={2}
						border={0}
						display="flex"
						flexDirection="row"
						alignItems="center"
					>	
						<Call/>
						<Typography variant="h5">contact</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
