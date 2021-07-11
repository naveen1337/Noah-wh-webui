
import { Grid, Typography, Box } from "@material-ui/core/";
import { DoctorMainCard } from "../../components/";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { doctorByIdRemote } from "../../remote/doctorRemote";

export default function DoctorPage(props) {
	let id = useParams().id;
	const doctorByIdQuery = useQuery(["doctor", id], doctorByIdRemote);

	console.log(doctorByIdQuery.data)

	return (
		<DashboardLayout>
			<Box p={2}>
				{doctorByIdQuery.isLoading ? <Loading /> : null}
				{!doctorByIdQuery.isLoading && !doctorByIdQuery.data ? (
					<NoDoctorFound />
				) : null}
				<Grid container>
					<Grid item xs={12}>
						{!doctorByIdQuery.isLoading && doctorByIdQuery.data ? (
							<DoctorMainCard
								data={doctorByIdQuery.data}
							/>
						) : null}
					</Grid>
				</Grid>
			</Box>
		</DashboardLayout>
	);
}

const NoDoctorFound = () => {
	return (
		<Box border={0} p={3} my={3} width="100%">
			<Typography variant="h5" align="center">
				No Doctor Found, Something Went Wrong
			</Typography>
		</Box>
	);
};

const Loading = () => {
	return (
		<Box border={0} p={3} my={3} width="100%">
			<Typography variant="h5" align="center">
				Loading...
			</Typography>
		</Box>
	);
};

