import { render, screen } from '@testing-library/react';
import { PicInfo } from "../../components/PicInfo";

const setup = () => render(<PicInfo picDate={'2022-01-01'} />);

describe('Tests on <PicInfo/>', () => {

    it(`must check if there's an image`, function () {
        setup();
        screen.debug();
        const image = screen.getByAltText(/nasa-image/i);
        expect(image).toBeInTheDocument();
    });
});