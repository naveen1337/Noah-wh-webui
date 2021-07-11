import { Grid, Box, Typography } from "@material-ui/core/";

export default function DashboardTopbar(props) {
	return (
		<Box
			border={0}
			display="flex"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			bgcolor="primary.main"
			px={2}
			py={1}
			m={2}
			borderRadius={2}
		>
			<Box>
				<Typography style={{ color: "#ffffff" }} variant="subtitle1">
					Jan 20 2022
				</Typography>
			</Box>
			<Box component={Grid} display={{ xs: "none", md: "block" }}>
				<Box display="flex" flexDirection="row" alignItems="center">
					<Box display="flex" flexDirection="row" alignItems="center">
						<Typography style={{ color: "#ffffff" }} variant="h6">
							Logout
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
