import { useState, useEffect } from "react";
import { Box, Grid, Typography, Chip} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

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

	const [image, imageSet] = useState(props.image);

	return (
		<Box component={Link} to={`/admin/dashboard/doctor/${props.id}`} style={{textDecoration:"none",color: "inherit"}}>
		
		<Box
			style={{ height: "100%" }}
			border={0}
			p={2}
			m={1}
			bgcolor="#ffffff"
		>
			<Grid container>
				<Grid item xs={12} md={3}>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						border={0}
					>
						<img
							style={{
								width: 120,
								height: "100%",
								resizeMode: "contain",
								borderRadius: "100%",
							}}
							src={image}
							onError={() => imageSet("../../nodoctorimage.png")}
							alt={props.name}
						/>
						<Typography align="center" variant="subtitle2">
							Consulting Fee
						</Typography>
						<Typography align="center" variant="subtitle1">
							{props.charge}₹
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={9}>
					<Box px={1} border={0}>
						<Typography variant="h5">{props.name}</Typography>
						<Spicialities
							data={props.specialist
								.split(",")
								.map((item) => item.trim())}
						/>
						<Typography variant="h6">
							{props.qualification}
						</Typography>
						<Ratings />
					</Box>
				</Grid>
			</Grid>
		</Box>
	</Box>
	);
}

const Spicialities = (props) => {
	console.log(props);
	return (
		<Box
			display="flex"
			flexDirection="row"
			alignItems="center"
			flexWrap="wrap"
		>
			{props.data.map((item) => {
				return (
					<Box key={item} pr={1} py={1}>
						<Chip
							size="small"
							variant="outlined"
							color="primary"
							label={item}
						/>
					</Box>
				);
			})}
		</Box>


	);
};

const Ratings = (props) => {
	return (
		<Box>
			<Rating name="read-only" value={4} readOnly />
			<Typography variant="subtitle2">0 Sessions</Typography>
		</Box>
	);
};
