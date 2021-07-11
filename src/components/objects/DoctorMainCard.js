import {
	Box,
	Grid,
	Chip,
	Button,
	Typography,
	Paper,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@material-ui/core/";
import noImage from "../../images/nodoctorimage.png";
import { useState, useEffect } from "react";
import { LocationOnSharp } from "@material-ui/icons/";

export default function DoctorMainCard(props) {
	const [image, imageSet] = useState(props.data.image);
	const [modal, setModal] = useState(true);

	const deleteDoctor = () => {
		// setModal(false);
	};

	return (
		<Paper>
			<DeleteDialog
				modal={modal}
				setModal={setModal}
				deleteDoctor={deleteDoctor}
				id={props.data._id}
			/>
			<Box border={0} p={2} borderRadius={2}>
				<Grid container>
					<Grid item xs={12} md={2}>
						<img
							style={{
								width: 130,
								resizeMode: "contain",
								borderRadius: "100%",
							}}
							src={image}
							onError={() => imageSet(noImage)}
							alt={props.data.name}
						/>
						<p>Hello {JSON.stringify(modal)}</p>
					</Grid>
					<Grid item xs={12} md={8}>
						<DoctorTextInformation
							name={props.data.name}
							city={props.data.address.city}
							charge={props.data.charge}
							qualification={props.data.qualification}
						/>
					</Grid>
					<Grid item xs={12} md={2}>
						<AdminAction setModal={setModal} />
					</Grid>
					<Grid item xs={12} md={12}>
						<Box p={2}>
							<Grid container>
								<Grid xs={12} md={6}>
									<Typography variant="h5" gutterBottom>
										Contact:
									</Typography>
									<Typography variant="subtitle1">
										{props.data.contact}
									</Typography>
									<Typography variant="subtitle1">
										{props.data.sub_contact}
									</Typography>
								</Grid>
								<Grid xs={12} md={6}>
									<Typography variant="h5" gutterBottom>
										Calendly:
									</Typography>
									<Typography variant="subtitle1">
										{props.data.calendly}
									</Typography>
								</Grid>
							</Grid>
							<Spicialities data={props.data.specialist} />
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Paper>
	);
}

const DoctorTextInformation = (props) => {
	return (
		<Box>
			<Typography
				style={{ textTransform: "capitalize" }}
				variant="h5"
				gutterBottom
			>
				{props.name}
			</Typography>
			<Box display="flex" flexDirection="row" alignItems="center">
				<LocationOnSharp />
				<Typography style={{ padding: 2 }} variant="h6">
					{props.city}
				</Typography>
			</Box>
			<Box display="flex" flexDirection="row" alignItems="center">
				<Typography variant="h6" gutterBottom>
					Charge:
				</Typography>

				<Typography
					style={{
						paddingLeft: 10,
						fontSize: 20,
						fontWeight: "bold",
					}}
					variant="subtitle1"
				>
					{" "}
					₹ {props.charge}
				</Typography>
			</Box>
			<Typography variant="h6">{props.qualification}</Typography>
		</Box>
	);
};

const AdminAction = (props) => {
	return (
		<Box>
			<Button
				style={{
					backgroundColor: "blue",
					color: "#ffffff",
					paddingLeft: 20,
					paddingRight: 20,
					margin: 1,
				}}
				size="large"
				fullWidth={true}
			>
				Edit
			</Button>
			<Button
				onClick={() => props.setModal(true)}
				style={{
					backgroundColor: "red",
					color: "#ffffff",
					paddingLeft: 20,
					paddingRight: 20,
					margin: 1,
				}}
				size="large"
				fullWidth={true}
			>
				Delete
			</Button>
		</Box>
	);
};

const Spicialities = (props) => {
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

const DeleteDialog = (props) => {
	return (
		<Dialog
			open={props.modal}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				Do you want to delete a doctor
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					It will Remove all the information related to that doctor.
					The action is irrevesible
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={props.setModal(false)}
					color="primary"
					autoFocus
				>
					Cancel
				</Button>
				<Button onClick={props.deleteDoctor} color="primary">
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
};

// {
//   "_id": "60eabd13bb6906262d01eb14",
//   "username": "doctor2",
//   "name": "the kong",
//   "mail": "doctor2@mail.com",
//   "password": "$2b$10$KpgfPNxkgrt6ajL7LCvxwO4IyrarZPhKJfnzKC.zxtSjqTfO/4uB2",
//   "image": "image",
//   "qualification": "MBBS",
//   "specialist": [
//     "general"
//   ],
//   "contact": "9987654321",
//   "sub_contact": "1123456789",
//   "timings": [
//     [
//       "09-00",
//       "11-00"
//     ],
//     [
//       "13-00",
//       "15-00"
//     ]
//   ],
//   "charge": "200",
//   "address": {
//     "street": "the Street",
//     "city": "The City"
//   },
//   "calendly": "url"
// }
