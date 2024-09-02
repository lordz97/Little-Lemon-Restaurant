import {
	Box,
	Button,
	FormLabel,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Select,
	VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const BookingForm = ({ availableTimes, dispatch }) => {
	const formik = useFormik({
		initialValues: {
			date: "",
			time: "",
			guests: "",
			occasion: "Occasion",
		},
		validationSchema: Yup.object({
			date: Yup.string().required("Date is required"),
			time: Yup.string().required("Time is required"),
			guests: Yup.number().required(
				"The number of guests must be between 1 and 6"
			),
			occasion: Yup.string().required("Select the occasion"),
		}),
		onSubmit: (values) => {
			navigate("/booking_confirmed");
			console.log("Form values:", values);
		},
	});

	const navigate = useNavigate();

	const handleOccasion = (occasion) => {
		formik.setFieldValue("occasion", occasion);
	};
	const handleDateChange = (e) => {
		formik.handleChange(e);
		dispatch({ type: "date", date: e.target.value });
	};
	return (
		<Box rounded="md" w="100%" justifyContent="center">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					formik.handleSubmit(e);
				}}
			>
				<VStack mx="20%" spacing={1} align="start">
					<FormLabel fontFamily="fontText" htmlFor="date" mt="4%" color="white">
						Set the date
						<Input
							id="date"
							value={formik.values.date}
							onChange={handleDateChange}
							size="md"
							type="date"
							focusBorderColor="focusBorderColor"
						/>
					</FormLabel>
					<FormLabel fontFamily="fontText" htmlFor="time" mt="4%" color="white">
						Choose the time
					</FormLabel>
					<Select
						name="time"
						value={formik.values.time}
						onChange={formik.handleChange}
						id="time"
						size="md"
						color="white"
						focusBorderColor="focusBorderColor"
					>
						{availableTimes.times.map((availableTime, index) => (
							<option
								key={index}
								style={{ color: "black" }}
								value={availableTime}
							>
								{availableTime}
							</option>
						))}
					</Select>
					<FormLabel mt="4%" htmlFor="guests" color="white">
						Number of guests {formik.values.guests}
					</FormLabel>
					<NumberInput
						color="white"
						name="guests"
						size="lg"
						id="guests"
						value={formik.values.guests}
						onChange={(valueAsString, valueAsNumber) =>
							formik.setFieldValue("guests", valueAsNumber)
						}
						min={1}
						max={10}
						focusBorderColor="focusBorderColor"
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper color="white" />
							<NumberDecrementStepper color="white" />
						</NumberInputStepper>
					</NumberInput>

					<FormLabel mt="4%" color="white" fontFamily="fontText">
						Occasion
					</FormLabel>
					<Menu>
						<MenuButton
							id="occasion"
							name="occasion"
							value={formik.values.occasion}
							onChange={formik.handleChange}
							as={Button}
							bgColor="bgButton"
							_hover={{ bg: "white" }}
							_active={{ bg: "white" }}
							fontFamily="fontText"
							rightIcon={<ChevronDownIcon />}
						>
							{formik.values.occasion}
						</MenuButton>
						<MenuList>
							<MenuItem
								onClick={() => handleOccasion("Birthday")}
								_hover={{ bg: "bgButton" }}
							>
								Birthday
							</MenuItem>
							<MenuItem
								_hover={{ bg: "bgButton" }}
								onClick={() => handleOccasion("Anniversary")}
							>
								Anniversary
							</MenuItem>
						</MenuList>
					</Menu>
					<Button
						alignSelf="end"
						my="4%"
						type="submit"
						bgColor="bgButton"
						size="lg"
						fontFamily="fontText"
						borderRadius={16}
					>
						Make your reservation
					</Button>
				</VStack>
			</form>
		</Box>
	);
};
