import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: ""
  });

  

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

    const getuserdata = localStorage.getItem("userDetails");
    console.log(getuserdata);

    const { email, password } = inpval;

    if (email === "") {
      alert('Email is required');
    } else if (!email.includes('@')) {
      alert('Enter valid Email');
    } else if (password === "") {
      alert('password is required');
    } else if (password.length < 5) {
      alert('Enter valid password');
    } else {

      if (getuserdata && getuserdata.length) {
        const userdata = JSON.parse(getuserdata);
        const userlogin = userdata.filter((el) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          localStorage.setItem("userlogin", JSON.stringify(getuserdata));
          history("/home");
        }
      }
    }
  }

  return (
    <>
      <Container>
        <h1 className='my-5'>Signup</h1>
        <Row>
          <Col xl={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={getData} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' onChange={getData} />
              </Form.Group>

              <Button bg="primary" type="submit" onClick={addData}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col xl={6}>
            <Image src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" alt="Sample Image" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
