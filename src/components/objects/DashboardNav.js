import {
	List,
	Paper,
	Box,
	ListItem,
	ListItemText,
	ListItemAvatar,
} from "@material-ui/core/";
import {
	HomeSharp,
	AddBoxSharp,
	AllInboxSharp,
	LocalMallSharp,
	EqualizerSharp,
} from "@material-ui/icons/";
import { useHistory } from "react-router-dom";

export default function DashBoardNav(props) {
	const history = useHistory();

	const links = [
		{
			name: "Dashboard",
			to: "/admin/dashboard",
		},
		{
			name: "Doctors",
			to: "/admin/dashboard/doctors",
		},
		{
			name: "Customers",
			to: "/admin/dashboard/add",
		},
		{
			name: "Bookings",
			to: "/admin/dashboard/orders",
		},
		{
			name: "Revenue",
			to: "/admin/dashboard",
		},
		{
			name: "Analytics",
			to: "/admin/dashboard/videos",
		},
	];

	const navigate = (to) => {
		// console.log(to)
		history.push(to);
	};

	return (
		<Paper
			style={{ minHeight: "100vh", maxHeight: "100%" }}
			elevation={3}
			variant="outlined"
			square
		>
			<Box>
				<img
					style={{ resizeMode: "contain", width: 230 }}
					src="../../../logo.png"
					alt="logo"
				/>
				<List>
					{links.map((item) => {
						return (
							<Box
								
								border={0}
								onClick={() => navigate(item.to)}
								p={2}
								key={item.name}
							>
								<ListItem button>
									<ListItemAvatar>
										{item.name === "Dashboard" ? (
											<HomeSharp fontSize="large" />
										) : item.name === "Doctors" ? (
											<AllInboxSharp />
										) : item.name === "Customers" ? (
											<AddBoxSharp />
										) : item.name === "Revenue" ? (
											<LocalMallSharp />
										) : (
											<EqualizerSharp />
										)}
									</ListItemAvatar>
									<ListItemText primary={item.name} />
								</ListItem>
							</Box>
						);
					})}
				</List>
			</Box>
		</Paper>
	);
}
