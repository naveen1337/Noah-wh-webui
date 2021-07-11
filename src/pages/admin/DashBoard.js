import { Grid, Typography, Box } from "@material-ui/core/";
import {DashBox} from "../../components/";
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
					<DashBox />
					<Box py={2}>
						<Typography variant="h4">Analytics:</Typography>
						
						
					</Box>
				</Box>
			</Grid>
		</Grid>
		</DashboardLayout>
	);
}
