import { useContext } from "react";
import {
  Navbar,
  Nav as N,

  // Form,
  // FormControl,
  // Button
} from "react-bootstrap"
import {
  Link
} from "react-router-dom"
import UserContext from "./context/UserContext";

function Nav({logout}) {

  const {user, isLoading} = useContext(UserContext)

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand as={Link} to="/">Jobify</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <N className="ml-auto">
          
          {user && !isLoading?
          <>
          <N.Link as={Link} to="/companies">Companies</N.Link>
          <N.Link as={Link} to="/jobs">Jobs</N.Link>
          <N.Link as={Link} to="/profile">Profile</N.Link>
          <N.Link onClick={logout} >Logout</N.Link>

          </>
          :
          <>
          <N.Link as={Link} to="/login">Login</N.Link>
          {/* <N.Link onClick={logout} >Logout</N.Link> */}
          <N.Link as={Link} to="/signup">Signup</N.Link>
          </>
          }
          
        </N>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;

