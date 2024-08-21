import { extendTheme } from "@chakra-ui/react";

const colors = {
	bgBox: "#495E57",
	bgButton: "#F4CE14",
	textBox: "#F4CE14",
	price: "#EE9972",
};

const fonts = {
	fontBox: "Helvetica Bold",
	fontText: "Helvetica",
};

const theme = extendTheme({ colors, fonts });

export default theme;
