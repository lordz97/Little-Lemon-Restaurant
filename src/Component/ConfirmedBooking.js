import { CheckIcon } from "@chakra-ui/icons";
import { Box, Divider, Heading } from "@chakra-ui/react";

export const ConfirmedBooking = () => {
	return (
		<Box>
			<Heading
				mx={"20vw"}
				mt={"15vh"}
				as="h1"
				fontFamily="fontBox"
				color="textBox"
			>
				Reservtion Confirmed
				<CheckIcon mx="1%" h="7" />
			</Heading>
			<Divider />
		</Box>
	);
};
