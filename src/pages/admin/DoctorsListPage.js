import { Grid, Typography, Box } from "@material-ui/core/";
import { DoctorHeader, DoctorCardList } from "../../components/";
import DashboardLayout from "../../Layouts/DashboardLayout";

export default function DashBoardPage(props) {
	
	
	// useEffect(() => {
	//   (async () => {
	//   	let r = await getProducts()
	//   	console.log(r)
	//   })();
	// }, []);

	return (
		<DashboardLayout>
			<Grid container>
				<Grid item xs={12}>
					<Box p={2}>
						<DoctorHeader />
					</Box>
				</Grid>
				<Grid container item xs={12} spacing={2}>
					<Grid item xs={12} md={6}>
						<DoctorCardList />
					</Grid>
					<Grid item xs={12} md={6}>
						<DoctorCardList />
					</Grid>
					<Grid item xs={12} md={6}>
						<DoctorCardList />
					</Grid>
				</Grid>
			</Grid>
		</DashboardLayout>
	);
}
