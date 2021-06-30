import { useState, useEffect } from "react";

import {
	Typography,
	Backdrop,
	CircularProgress,
	Grid,
	TextField,
	Box,
	Button,
	Snackbar,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { createDoctorRemote } from "../../remote/doctorRemote";

const useStyles = makeStyles((theme) => ({
	button: {
		width: "100%",
		height: 60,
	},
}));

let values = {
	mail: "mail@mail.com",
	password: "test",
	image: "https://www.wtutors.com/image/user/203",
	qualification: "MBBS",
	charge: "200",
	specialist: "Childrens,Fever, Headache",
	timings: "08:00-11-30, 13:00-15:00",
	address: "The Address",
	"contact": "+919987654321",
	"sub_contact": "+911123456789",

};

export default function AddNewDoctor(props) {
	const classes = useStyles();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch
	} = useForm({
		defaultValues:values
	});
	const history = useHistory();

	const [loading, loadingSet] = useState(false);
	const [error, errorSet] = useState(false);



	const createDoctor = async (data) => {
		console.log('called')
		errorSet(false);
		loadingSet(true);
		let obj = {
			...data
		}
		
		obj.timings = data.timings.split(',').map(item => item.trim())
		obj.address = {
		"city": data.address
		}
		const response = await createDoctorRemote(obj)
		loadingSet(false);
		if(response){
			history.push("/admin/dashboard/doctors");
		}
		else{
			errorSet(true)
		}
		
		
	};


	return (
		<DashboardLayout>
			<Box p={2}>
				<Typography variant="h4" gutterBottom>
					Add New Doctor:
				</Typography>

				<form
					onSubmit={handleSubmit((e) => {
						createDoctor(e);
					})}
				>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4}>
							<TextField
								
								{...register("username", {
									required: true,
									minLength: 3,
									maxLength: 20,
								})}
								error={errors.username ? true : false}
								helperText={
									errors.username
										? "username length should be 3 - 20"
										: false
								}
								fullWidth={true}
								label="Doctor UserName"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} md={8}>
							<TextField
								
								{...register("name", {
									required: true,
									minLength: 5,
									maxLength: 40,
								})}
								error={errors.name ? true : false}
								helperText={
									errors.name
										? "name length should be 4 - 50"
										: false
								}
								fullWidth={true}
								label="Doctor Name"
								variant="outlined"
							/>
						</Grid>

						<Grid item xs={12} md={6}>
							<TextField
								defaultValue={values.mail}
								{...register("mail", {
									required: true,
									minLength: 1,
									maxLength: 40,
								})}
								error={errors.mail ? true : false}
								helperText={
									errors.mail
										? "mail length should be 1 - 40"
										: false
								}
								fullWidth={true}
								label="Doctor Mail"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								defaultValue={values.password}
								defaultValue="password"
								{...register("password", {
									required: true,
									minLength: 1,
									maxLength: 40,
								})}
								error={errors.password ? true : false}
								helperText={
									errors.password
										? "password length should be 1 - 40"
										: false
								}
								fullWidth={true}
								label="Doctor password"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								defaultValue={values.image}
								{...register("image", {
									required: true,
									minLength: 1,
									maxLength: 40,
								})}
								error={errors.image ? true : false}
								helperText={
									errors.image
										? "image length should be 3 - 40"
										: false
								}
								fullWidth={true}
								label="Doctor Image"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} md={8}>
							<TextField
								defaultValue={values.qualification}
								{...register("qualification", {
									required: true,
									minLength: 1,
									maxLength: 40,
								})}
								error={errors.qualification ? true : false}
								helperText={
									errors.qualification
										? "qualification length should be 1 - 40"
										: false
								}
								fullWidth={true}
								label="Qualification"
								variant="outlined"
							/>
						</Grid>

						<Grid item xs={12} md={4}>
							<TextField
								defaultValue={values.charge}
								{...register("charge", {
									required: true,
									minLength: 1,
									maxLength: 10,
								})}
								error={errors.charge ? true : false}
								helperText={
									errors.charge ? "charge Required" : false
								}
								
								fullWidth={true}
								label="Consultation Charge"
								variant="outlined"
							/>
						</Grid>

						<Grid item xs={12} md={12}>
							<TextField
								defaultValue={values.specialist}
								{...register("specialist", {
									required: true,
									minLength: 1,
									maxLength: 40,
								})}
								error={errors.specialist ? true : false}
								helperText={
									errors.specialist
										? "specialist length should be 1 - 40"
										: false
								}
								multiline
								rows={2}
								fullWidth={true}
								label="Specialist in, add comma to separate the points"
								variant="outlined"
							/>
						</Grid>

						<Grid item xs={12} md={6}>
							<TextField
								defaultValue={values.contact}
								{...register("contact", {
									required: true,
									minLength: 13,
									maxLength: 13,
								})}
								error={errors.specialist ? true : false}
								helperText={
									errors.specialist
										? "Valid Contact Required"
										: false
								}
	
								fullWidth={true}
								label="Contact"
								variant="outlined"
							/>
						</Grid>

						<Grid item xs={12} md={6}>
							<TextField
								defaultValue={values.sub_contact}
								{...register("sub_contact", {
									required: true,
									minLength: 13,
									maxLength: 13,
								})}
								error={errors.sub_contact ? true : false}
								helperText={
									errors.specialist
										? "Valid sub_contact Required"
										: false
								}
						
								fullWidth={true}
								label="Specialist in, add comma to separate the points"
								variant="outlined"
							/>
						</Grid>

						<Grid item xs={12} md={12}>
							<TextField
								defaultValue={values.timings}

								{...register("timings", {
									required: true,
									minLength: 2,
								})}
								error={errors.timings ? true : false}
								helperText={
									errors.timings
										? "timings length should be 1 - 40"
										: false
								}
								fullWidth={true}
								label="Service Timings Example 08:00-11:30, 13:00-18:00	"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12} md={12}>
							<TextField
								defaultValue={values.address}

								{...register("address", {
									required: true,
									minLength: 5,
								})}
								error={errors.address ? true : false}
								helperText={
									errors.address ? "address Required" : false
								}
								multiline={true}
								rows={3}
								fullWidth={true}
								label="Doctor Addreess"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								type="submit"
								className={classes.button}
								fullWidth={true}
								size="large"
								variant="contained"
								color="primary"
							>
								Add Product
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>

			<Backdrop  open={loading}>
  <CircularProgress color="inherit" />
</Backdrop>

<Snackbar open={error} message="Doctor Creation Failed, Please Check your Input, UserName is should to unique" />

		</DashboardLayout>
	);
}
