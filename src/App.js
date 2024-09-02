import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Footer } from "./Component/Footer";
import { Header } from "./Component/Header";
import { Main } from "./Component/Main";
import { Nav } from "./Component/Nav";
import theme from "./Theme/Theme";
import { Specials } from "./Component/Specials";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { BookingPage } from "./Component/BookingPage";
import { ConfirmedBooking } from "./Component/ConfirmedBooking";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Header>
					<Nav></Nav>
				</Header>
				<div className="app-container">
					<Routes>
						<Route
							path="/"
							element={
								<Main>
									<Specials />
								</Main>
							}
						/>
						{/* <Route path="/about" element={<Main />} />
					<Route path="/menu" element={<Main />} /> */}
						<Route path="/reservations" element={<BookingPage />} />
						<Route path="/booking_confirmed" element={<ConfirmedBooking />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</ChakraProvider>
	);
}

export default App;
