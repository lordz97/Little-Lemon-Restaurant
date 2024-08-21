import { Box, HStack, Image, Link, Text } from "@chakra-ui/react";
import logo from "../icons_assets/Logo.svg";

export const Nav = () => (
	<nav>
		<Box h={"10vh"} mx={"20vw"} bgColor={"white"}>
			<HStack h={"100%"} alignItems={"center"} justify={"space-between"}>
				<Image src={logo} mr={8} />
				<Link href="/home">
					<Text as={"b"}>Home</Text>
				</Link>
				<Link href="/About">
					<Text as={"b"}>About</Text>
				</Link>
				<Link href="/Menu">
					<Text as={"b"}>Menu</Text>
				</Link>
				<Link href="/Reservations">
					<Text as={"b"}>Reservations</Text>
				</Link>
				<Link href="/Order">
					<Text as={"b"}>Order Online</Text>
				</Link>
				<Link href="/Login">
					<Text as={"b"}>Login</Text>
				</Link>
			</HStack>
		</Box>
	</nav>
);
