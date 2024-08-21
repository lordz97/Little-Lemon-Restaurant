import { Box, Button, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import salad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemon from "../icons_assets/lemon dessert.jpg";
import { Card } from "./Cards";

export const Specials = () => {
	const specials = [
		{
			id: 1,
			image: salad,
			title: "Greek salad",
			price: 12.99,
			desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style teta cheese, garnished with crunchy garlic ans rosemary croutons.",
		},
		{
			id: 2,
			image: bruchetta,
			title: "Bruchetta",
			price: 5.99,
			desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
		},
		{
			id: 3,
			image: lemon,
			title: "Lemon Dessert",
			price: 6.0,
			desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined",
		},
	];
	return (
		<VStack mx="20vw" mt="12vh">
			<HStack w="100%">
				<Text fontSize={"5xl"} as="b" fontFamily="fontBox">
					This week's specials!
				</Text>
				<Spacer />
				<Button
					bgColor="bgButton"
					size="lg"
					fontSize="medium"
					fontFamily="fontText"
					borderRadius={16}
				>
					Online Menu
				</Button>
			</HStack>
			<Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap={8}>
				{specials.map((special) => (
					<Card
						key={special.id}
						title={special.title}
						image={special.image}
						price={special.price}
						desc={special.desc}
					/>
				))}
			</Box>
		</VStack>
	);
};
