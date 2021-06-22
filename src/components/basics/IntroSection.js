import { Box, Typography, useMediaQuery } from "@material-ui/core/";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		background:
			"linear-gradient(90deg, rgba(48,224,20,1) 0%, rgba(0,212,255,1) 100%);	",
	},
	boldfont: {
		fontWeight: 500,
	},
}));

export default function IntroSection() {
	const classes = useStyles();
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Box className={classes.root} px={mobile ? 2 : 10} py={mobile ? 2 : 12}>
			<Typography
					variant={mobile ? "h3" : "h2"}
					className={classes.boldfont}
				>
					Natyacharya Books
				</Typography>
				<Typography
					component={Box}
					py={mobile ? 2 : 1}
					variant={mobile ? "h4" : "h4"}
				>
					Buy online Books
				</Typography>
		</Box>
	);
}
