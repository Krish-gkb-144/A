import { Col, Container, Row, Form, FormGroup, Label, Button, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Addlogin } from '../redux/reducers';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onchange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { email, password } = data;
    dispatch(Addlogin({email:email,password:password}))
    navigate('/home');
  };
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md='5' className='p-5 '>
          <Form className='border rounded-3 border-5 p-4  '>
            <h3 className='pb-3 text-center'>Lonig</h3>
            <FormGroup>
              <Label for='exampleEmail' hidden>
                Email
              </Label>
              <Input id='exampleEmail' name='email' value={data.email} placeholder='Email' type='email' onChange={(e) => onchange(e)} />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword' hidden>
                setPasswordValue{' '}
              </Label>
              <Input id='examplePassword' name='password' value={data.password} placeholder='Password' type='password' onChange={(e) => onchange(e)} />
              <Link to={`/`} className='text-danger '>
                Signup
              </Link>
            </FormGroup>
            <Button type='submit' onClick={handleSubmit} className='bg-success'>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
