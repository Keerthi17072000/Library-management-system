import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Form , Button } from 'react-bootstrap';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';



function Register() {
  const register = useNavigate();
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: ""
  });
  const [data, setData] = useState([]);

  const getData = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const addData = (e) => {
    e.preventDefault();
    const { name, email, date, password } = inpval;

    if (name === "") {
      alert('Name field is required');
    } else if (email === "") {
      alert('Email is required');
    } else if (!email.includes('@')) {
      alert('Enter valid Email');
    } else if (date === "") {
      alert('Date field is required');
    } else if (password === "") {
      alert('Password is required');
    } else if (password.length < 5) {
      alert('Enter a valid password');
    } else {
      register("/booklogin");

      localStorage.setItem("userDetails", JSON.stringify([...data, inpval]));
    }
  }

  return (
    <>
      <Container>
        <h1 className='my-5'>Register</h1>
        <Row>
          <Col xl={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name='name' onChange={getData} />
                <Form.Text className="text-muted">
                  Enter name with the first letter capitalized
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' onChange={getData} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="date" name='date' onChange={getData} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' onChange={getData} />
              </Form.Group>

              <Button className='col-xl-4' bg="primary" type="submit" onClick={addData}>
                Register
              </Button>
            </Form>
            <p className='mt-3'>Already have an account <span><NavLink to="/booklogin">Sign in</NavLink></span></p>
          </Col>
          <Col xl={6}>
            <Image src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="Sample Image" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
