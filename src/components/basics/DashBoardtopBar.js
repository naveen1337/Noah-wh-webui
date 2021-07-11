import { Grid, Box, Typography,Button } from "@material-ui/core/";
import { useHistory } from "react-router-dom";

export default function DashboardTopbar(props) {
	const history = useHistory()
	const logout = ()=>{
		// localStorage.removeItem('authtoken')
		history.push('/admin')
	}

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
					{Date.now()}
				</Typography>
			</Box>
			<Box component={Grid} display={{ xs: "none", md: "block" }}>
				<Box display="flex" flexDirection="row" alignItems="center">
					<Box display="flex" flexDirection="row" alignItems="center">
						<Button onClick={logout} style={{ color: "#ffffff" }} size="large">
							Logout
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
