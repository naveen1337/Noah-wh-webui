import { Grid, Typography, Box } from "@material-ui/core/";
import { DoctorHeader, DoctorCardList } from "../../components/";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { useQuery } from "react-query";

import { getAllDoctorRemote } from "../../remote/doctorRemote";

export default function DoctorPage(props) {
	const { isLoading, isSuccess, isError, data } = useQuery(
		"alldoctors",
		getAllDoctorRemote
	);

	return (
		<DashboardLayout>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h3" align="center">
						Coming Soon
					</Typography>
				</Grid>
			</Grid>
		</DashboardLayout>
	);
}
