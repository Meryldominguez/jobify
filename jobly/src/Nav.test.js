import { render  } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserContext from './context/UserContext';
import Nav from './Nav';
import { commonBeforeEach, commonAfterEach } from "./_testCommon";

beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <UserContext.Provider value={{...providerProps}}>
      <MemoryRouter>
      {ui}
      </MemoryRouter>
      </UserContext.Provider>,
    renderOptions
  )
}
describe("smoke tests, and testing for user", ()=>{
  test('Smoke test', () => {
    customRender(<Nav  />, {user:{}, isLoading:false});
  });
  test('Snapshot', () => {
   const {asFragment}=customRender(<Nav  />, {user:{}, isLoading:false});
   const noUser = asFragment()
   expect(noUser).toMatchSnapshot()
  });

  test('Rendering with no user', () => {
    const {getByText} = customRender(<Nav  />, {user:{}, isLoading:false});
    expect(getByText("Jobify")).toBeInTheDocument()

    expect(getByText("Login")).toBeInTheDocument()
    expect(getByText("Signup")).toBeInTheDocument()

  });

  test('Navbar responds to user', () => {
    const providerProps = {
      user:{username:"Testuser"},
      isLoading:false
    }
    const {getByText} = customRender(<Nav />, { providerProps })
    expect(getByText("Jobify")).toBeInTheDocument()

    expect(getByText("Companies")).toBeInTheDocument()
    expect(getByText("Jobs")).toBeInTheDocument()
    expect(getByText("Profile")).toBeInTheDocument()
    expect(getByText("Logout")).toBeInTheDocument()
  })
})


// describe("navigation and router tests", ()=>{
//   test("logging out",()=>{
//     let providerProps = {
//       user:{username:"Testuser"},
//       isLoading:false
//     }

//     const {debug, getByText,asFragment} = customRender(<Nav />, {providerProps});
//     const firstRender = asFragment()
//     expect(firstRender).toMatchSnapshot()

//     expect(getByText("Logout")).toBeInTheDocument()

//     fireEvent.click(getByText("Logout"))
//     debug()

   
//   })
// })