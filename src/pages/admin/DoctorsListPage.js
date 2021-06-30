

import { Grid, Typography, Box } from "@material-ui/core/";
import { DoctorHeader, DoctorCardList } from "../../components/";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { useQuery } from "react-query";

import { getAllDoctorRemote } from "../../remote/doctorRemote";

export default function DoctorList(props) {
	const { isLoading, isSuccess, isError, data } = useQuery(
		"alldoctors",
		getAllDoctorRemote
	);


	return (
		<DashboardLayout>
			<Grid container>
				<Grid item xs={12}>
					<Box p={2}>
						<DoctorHeader />
					</Box>
				</Grid>
				<Grid container item xs={12} spacing={2}>
					{isSuccess ? (
						data.map((item) => {
							console.log(item);
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
					) : (
						<p>Loading...</p>
					)}
				</Grid>
			</Grid>
		</DashboardLayout>
	);
}
