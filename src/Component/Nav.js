import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../icons_assets/Logo.svg";
import { Link } from "react-router-dom";

export const Nav = () => (
	<nav>
		<Box h={"10vh"} mx={"20vw"} bgColor={"white"}>
			<HStack h={"100%"} alignItems={"center"} justify={"space-between"}>
				<Link to="/">
					<Image src={logo} mr={8} />
				</Link>
				<Link to="/">
					<Text fontFamily="fontBox" as={"b"}>
						Home
					</Text>
				</Link>
				<Link to="/about">
					<Text fontFamily="fontBox" as={"b"}>
						About
					</Text>
				</Link>
				<Link to="/menu">
					<Text fontFamily="fontBox" as={"b"}>
						Menu
					</Text>
				</Link>
				<Link to="/reservations">
					<Text fontFamily="fontBox" as={"b"}>
						Reservations
					</Text>
				</Link>
				<Link to="/order">
					<Text fontFamily="fontBox" as={"b"}>
						Order Online
					</Text>{" "}
				</Link>
				<Link to="/login">
					<Text fontFamily="fontBox" as={"b"}>
						Login
					</Text>
				</Link>
				{/* <Link href="/home">
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
				</Link> */}
			</HStack>
		</Box>
	</nav>
);
