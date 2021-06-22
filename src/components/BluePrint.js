import {Box,useMediaQuery} from '@material-ui/core/';
import { makeStyles, useTheme } from "@material-ui/core/styles";

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

export default function BluePrintComponent(props){
	const classes = useStyles();
	const theme = useTheme();
	const system = useMediaQuery(theme.breakpoints.up("sm"));
	const mobile = useMediaQuery(theme.breakpoints.down("sm"));
	return(
		<Box>
		</Box>
		)
}