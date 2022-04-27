import { render, screen } from '@testing-library/react';
import { PicInfo } from "../../components/PicInfo";

const setup = () => render(<PicInfo picDate={'2022-01-01'} />);

describe('Tests on <PicInfo/>', () => {

    // ToAsk :: [MSW] Warning: captured a request without a matching request handler
    it(`Checking if there's an image`, function () {
        setup();
        const image = screen.getByAltText(/nasa-image/i);
        expect(image).toBeInTheDocument();
    });

    // Como probar si hay contenido, porque manda el warning del handler

    it(`Checking if there's content and title`, function () {
        setup();
        screen.debug();

    });
});