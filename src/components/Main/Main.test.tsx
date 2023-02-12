import {render, screen} from '@testing-library/react';
import Main from './Main';

describe("Main Content tests", ()=>{
    beforeAll(()=>{
        render(<Main/>)
    })

    it("Should render Main", ()=>{
        const component = screen.getAllByTestId("row-main")
        expect(component.length).toBe(4)
    })
})