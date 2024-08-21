import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Footer } from "./Component/Footer";
import { Header } from "./Component/Header";
import { Main } from "./Component/Main";
import { Nav } from "./Component/Nav";
import theme from "./Theme/Theme";
import { Specials } from "./Component/Specials";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Header>
				<Nav></Nav>
			</Header>
			<Main>
				<Specials />
			</Main>
			<Footer></Footer>
		</ChakraProvider>
	);
}

export default App;
