import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const BlogNavbar = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href='writepost'>On My Mind</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="ms-auto">
                <Nav.Link href="writepost">Write a Post</Nav.Link>
                <Nav.Link href="pastposts">Past Posts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>
    );
}

export default BlogNavbar;