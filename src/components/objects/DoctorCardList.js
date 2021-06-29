import { Box, Grid, Typography, useMediaQuery,Chip } from "@material-ui/core/";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
	root: {
		background: "rgb(48,224,20);",
		background:
			"linear-gradient(90deg, rgba(48,224,20,1) 0%, rgba(0,212,255,1) 100%);	",
	},
	boldfont: {
		fontWeight: 500,
	},
}));

export default function DoctorCardList(props) {
	const classes = useStyles();
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Box style={{ height: "100%" }} border={0} p={2} m={1} bgcolor="#ffffff">
			<Grid container>
				<Grid item xs={12} md={3}>
					<Box display="flex" flexDirection="column" alignItems="center" border={0}>
						<img
							style={{
								width: 120,
								height: "100%",
								resizeMode: "contain",
								borderRadius: "100%",

							}}
							src="../../sampledoctor1.webp"
							alt="doctor"
						/>
						<Typography align="center" variant="subtitle2">
							Consulting Fee
						</Typography>
						<Typography align="center" variant="subtitle1">
							50Rs
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={9}>
					<Box px={1} border={0}>
						<Typography variant="h5">Dr.Robert Ford</Typography>
						<Spicialities/>
						<Typography variant="h6">Tamil / English</Typography>	
						<Ratings/>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}


const Spicialities = (props)=>{
	return (
		<Box display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
		<Box pr={1} py={1}>
		<Chip size="small" variant="outlined" color="primary" label="MBBS" />
		</Box>
		<Box pr={1} py={1}>
		<Chip size="small" variant="outlined" color="primary" label="Children" />
		</Box>
		<Box pr={1} py={1}>
		<Chip size="small" variant="outlined" color="primary" label="Counselling" />
		</Box>		
		</Box>
		)
}

const ServiceTime = (props)=>{
	return (
		<Box py={1}>
		<Chip size="large" variant="outlined" color="secondary" label="Time: 9:30 - 12-30 & 18:00 - 20:00" />
		</Box>	
		)
}

const Ratings = (props)=>{
	return (
		<Box>
		<Rating name="read-only" value={4} readOnly />
		<Typography variant="subtitle2">21 Sessions</Typography>

		</Box>
		)
}
