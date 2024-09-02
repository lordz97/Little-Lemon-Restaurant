import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
import { BookingForm } from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "./api";

export const BookingPage = () => {
	const initializeTimes = () => {
		const avTimes = fetchAPI(new Date());
		return { times: avTimes };
	};

	const updateTimes = (availableTime, action) => {
		switch (action.type) {
			case "date":
				return {
					...availableTime,
					times: fetchAPI(new Date(action.date)),
				};
			default:
				return { ...availableTime };
		}
	};
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		undefined,
		initializeTimes
	);

	return (
		<Box w="100%" minH="85vh" bg={"bgBox"}>
			<VStack mx="20vw" align="start" rounded="md" bg={"bgBox"}>
				<Heading mt="15vh" as="h1" fontFamily="fontBox" color="textBox">
					Book your table
				</Heading>
				<Divider />
				<BookingForm dispatch={dispatch} availableTimes={availableTimes} />
			</VStack>
		</Box>
	);
};
