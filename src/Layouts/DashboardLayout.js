import { Grid, Box } from "@material-ui/core/";
import { DashboardNav,DashBoardtopBar} from "../components/";


export default function DashBoardLayput(props) {

	return (
		<Grid container style={{backGround:"#f1f1f1"}}>
			<Grid item xs={12} md={2}>
				<DashboardNav />
			</Grid>

			<Grid item xs={12} md={10}>
				<DashBoardtopBar/>
				{props.children}
			</Grid>
		</Grid>
	);
}
