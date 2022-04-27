import {App} from "../App";
import { render, screen } from '@testing-library/react';

const setup = (date) => <App defaultDate={date} />

describe('Tests on <App/>', () => {

    it('should display correctly', () => {
        setup();
        screen.debug();
    });
});