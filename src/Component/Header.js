import { Box } from "@chakra-ui/react";

export const Header = ({ children }) => (
	<header>
		<Box
			position={"fixed"}
			top={0}
			left={0}
			right={0}
			bgColor={"white"}
			zIndex={1000}
		>
			{children}
		</Box>
	</header>
);
