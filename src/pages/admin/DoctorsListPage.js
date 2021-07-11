import { Grid, Typography, Box } from "@material-ui/core/";
import { DoctorHeader, DoctorCardList } from "../../components/";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { useQuery } from "react-query";

import { getAllDoctorRemote } from "../../remote/doctorRemote";

export default function DoctorList(props) {
	const alldoctorsRemote = useQuery("alldoctors", getAllDoctorRemote);

	return (
		<DashboardLayout>
			<Grid container>
				<Grid item xs={12}>
					<Box p={2}>
						<DoctorHeader />

						{alldoctorsRemote.isLoading ? <LoadingDoctors /> : null}
						{!alldoctorsRemote.isLoading &&
						!alldoctorsRemote.data ? (
							<NoDoctorsFound />
						) : null}
					</Box>
				</Grid>

				<Grid container item xs={12} spacing={2}>
					{!alldoctorsRemote.isLoading && alldoctorsRemote.data
						? alldoctorsRemote.data.map((item) => {
								return (
									<Grid key={item._id} item xs={12} md={6}>
										<DoctorCardList
											id={item._id}
											name={item.name}
											image={item.image}
											charge={item.charge}
											qualification={item.qualification}
											specialist={item.specialist}
										/>
									</Grid>
								);
						  })
						: null}
				</Grid>
			</Grid>
		</DashboardLayout>
	);
}

const NoDoctorsFound = () => {
	return (
		<Box border={0} p={3} my={3} width="100%">
			<Typography variant="h5" align="center">
				No Doctors Found
			</Typography>
		</Box>
	);
};

const LoadingDoctors = () => {
	return (
		<Box border={0} p={3} my={3} width="100%">
			<Typography variant="h5" align="center">
				Loading...
			</Typography>
		</Box>
	);
};
