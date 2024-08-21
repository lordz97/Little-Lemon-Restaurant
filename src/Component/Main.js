import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import food from "../icons_assets/restauranfood.jpg";

export const Main = ({ children }) => (
	<main>
		<Box
			h={["60vh", "50vh", "40vh", "35vh"]}
			bg={"bgBox"}
			mt="10vh"
			position="relative"
			zIndex={0}
		>
			<HStack mx="20vw" h="100%">
				<VStack w={"35%"} h="100%" spacing="0px" align="start">
					<Text
						fontFamily="fontBox"
						mt={4}
						fontSize="6xl"
						mb={-4}
						color="textBox"
					>
						Little Lemon
					</Text>
					<Text fontFamily="fontBox" fontSize="4xl" color="white">
						Chicago
					</Text>
					<Text fontFamily="fontText" fontSize="xl" color="white">
						We are a family owned Medditeranean restaurant focused on
						traditional recipes served with a modern twist.
					</Text>
					<Button
						bgColor="bgButton"
						size="lg"
						fontFamily="fontText"
						borderRadius={16}
						zIndex={0}
					>
						Reserve a Table
					</Button>
				</VStack>
				<HStack position="relative" w="65%" h="100%" justify="end">
					<Image
						src={food}
						maxH={"110%"}
						w="50%"
						position="absolute"
						top={10}
						objectFit="fill"
						borderRadius={16}
						zIndex={-5}
					/>
				</HStack>
			</HStack>
		</Box>
		{children}
	</main>
);
/* <Image
						src={food}
						maxH={"100%"}
						w="45%"
						mt={16}
						objectFit="fill"
						borderRadius={16}
					/> */
