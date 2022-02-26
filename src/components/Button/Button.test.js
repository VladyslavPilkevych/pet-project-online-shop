import Button from "./Button.js";
import {render, screen} from "@testing-library/react";


describe("Testing component Button", () => {
    test("should Button render text", () => {
        const { getByText } = render(<Button>Test Name</Button>);
        expect(getByText('Test Name')).toBeInTheDocument();
    })
})