import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateInput } from "../../components/DateInput";

const setup = () => render(<DateInput setPicDate={'2022-01-01'} />);

describe('Tests on <DateInput/>', () => {

    const setPicDate = jest.fn();

    it('should display date input correctly', () => {
        setup();
        screen.debug();
        const dateInput = screen.getByLabelText(/Choose date/i);
        expect(dateInput).toBeInTheDocument();
    });

    it('Calling handleInputChange function', () => {
        setup();
        const dateInput = screen.getByLabelText(/Choose date/i);
        userEvent.click(dateInput);
        userEvent.type(dateInput, '2022-03-01');
        screen.debug();
        // ToAsk :: expect(setPicDate).toHaveBeenCalled();
    });
});
