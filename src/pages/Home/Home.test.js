import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from './Home.js'
import { getProducts } from "../../services/apiServices";
import mockData from '../../mockData/productsData';


//mocks
jest.mock('../../services/apiServices');

// jest.mock("recharts", () => ({ ResponsiveContainer: jest.fn().mockImplementation((
//       { children }) => children), 
//       PieChart: jest.fn().mockImplementation(({ children }) => children), 
//       Pie: jest.fn().mockImplementation(({ children }) => children),
//       }
//     ));

// jest.mock('recharts', () => {
//   const OriginalResponsiveContainerModule = jest.requireActual('recharts');

//   return {
//     ResponsiveContainer: ({ height, children }) => (
//       <OriginalResponsiveContainerModule.ResponsiveContainer
//         width={800}
//         height={height}
//       >
//         {children}
//       </OriginalResponsiveContainerModule.ResponsiveContainer>
//     ),
//   };
// });


let component;
let products;

describe("Tests para la vista Home", () => {

  beforeEach( async()=>{
    products = await getProducts.mockResolvedValue([...mockData ])

    await act( async ()=>{
      component = render(
        
        <Home />
        
        , { wrapper: BrowserRouter })
    })
  })


  it("La vista debe renderizarse correctamente", async () => {
    const { container } = component;

    expect(container).toMatchSnapshot()
  });


  it("Se deben renderizar dos componentes HomeCard", ()=>{

    const imagesInView = screen.getAllByRole('img', name="Icono de Card");

    expect(imagesInView.length).toBe(2);
    
  })


});
