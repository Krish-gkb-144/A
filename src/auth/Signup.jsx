import React, { useState } from 'react';
import { Col, Container, Row, Form, FormGroup, Label, Button, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Addsignup } from '../redux/reducers';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [AllData, setAllData] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onchange = (e) => {
    const { name, value } = e.target;
    setAllData({
      ...AllData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { email, password } = AllData;
    dispatch(Addsignup({ email: email, password: password }));
    navigate('/login');
    setAllData({ email: '', password: '' });
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md='5' className='p-5 '>
          <Form className='border rounded-3 border-5 p-4  '>
            <h3 className='pb-3 text-center'>Signup</h3>
            <FormGroup>
              <Label for='exampleEmail' hidden>
                Email
              </Label>
              <Input id='exampleEmail' name='email' value={AllData.email} placeholder='Email' type='email' onChange={(e) => onchange(e)} />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword' hidden>
                setPasswordValue{' '}
              </Label>
              <Input id='examplePassword' name='password' value={AllData.password} placeholder='Password' type='password' onChange={(e) => onchange(e)} />
              <Link to={`/login`} className='text-danger '>
                Login
              </Link>
            </FormGroup>
            <Button onClick={handleSubmit} className='bg-success '>
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
