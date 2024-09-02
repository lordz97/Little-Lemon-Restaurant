import { render, screen } from "@testing-library/react";
import { BookingPage } from "./Component/BookingPage";

test("render  BookingForm", () => {
	render(<BookingPage />);
	const elt = screen.getByText("Choose the time");
	expect(elt).toBeInTheDocument();
});

test("test the initialize function", () => {
	render(<BookingPage />);
});
