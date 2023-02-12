import {render, screen} from '@testing-library/react';
import Home from './Home';

describe("Home Tests", ()=>{
    beforeAll(()=>{
        render(<Home />)
    })

    it("Should render Home", () => {
         const component = screen.getByText(/Bienvenide/)
         expect(component).toBeDefined()
    })
})

