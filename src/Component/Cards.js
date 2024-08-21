import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import dish from "../icons_assets/Dish icon.svg";

export const Card = ({ image, title, price, desc }) => {
	return (
		<VStack
			bgColor="#edefee"
			borderTopLeftRadius={18}
			borderTopRightRadius={18}
			position="relative"
			align="start"
		>
			<Box h="45%" width="100%">
				<Image
					src={image}
					w="100%"
					maxH="100%"
					borderTopLeftRadius={16}
					borderTopRightRadius={16}
				/>
			</Box>
			<Box mb={12} mt={8} mx={4}>
				<HStack justify="space-between" mb={8}>
					<Text fontSize="3xl" as="b" fontFamily="fontBox">
						{title}
					</Text>
					<Text fontSize="xl" color="price">
						${price}
					</Text>
				</HStack>
				<Text textAlign="justify" fontSize="md" fontFamily="fontText">
					{desc}
				</Text>
			</Box>
			<HStack mx={4} position="absolute" top={"90%"}>
				<Text fontSize="2xl" as="b" fontFamily="fontBox">
					Order a delivery
				</Text>
				<Image src={dish} />
			</HStack>
		</VStack>
	);
};
