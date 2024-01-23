import { Col, Container, Row, Form, FormGroup, Label, Button, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { addTodo, setUser } from '../redux/todoslice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';

const Home = () => {
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onchange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(addTodo(data));
      setData('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const useractiv = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      if (currentUser) {
        const AddUserData = async () => {
          
          const data = await getDocs(collection(db, "user"));
          const AllData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

          const userDoc = doc(db, "user", currentUser.uid);
          const DataDoc = { AllData, sinupAt: new Date() };
          // const addtodo = await setDoc(userref, userData);
          console.log(userDoc);
          // const update = await updateUser(userDoc,DataDoc)
          //     const { email } = currentUser;
          //     const userref = doc(db, 'user', currentUser.uid);
          //     try {
          //       const userData = { email, sinupAt: new Date() };
          //       dispatch(setUser(currentUser));
          //     } catch (error) {
          //       console.log(error);
          //     }
          dispatch(setUser(currentUser.uid))
        };
        AddUserData();
      }
    });
    const userViewactiv = onAuthStateChanged(auth, (currentUser) => {
      const alldata = collection(db, 'user', currentUser.uid, 'data');
      const getList = async () => {
        const data = await getDocs(alldata);
        // console.log(data.docs[0]);
        // console.log(data.docs);
        // setRecord(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getList();
    });

    return () => {
      // useractiv();
      userViewactiv();
    };
  }, []);

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md='5' className='p-5 '>
          <Form className='border rounded-3 border-5 p-4  '>
            <h3 className='pb-3 text-center'>Form</h3>
            <FormGroup>
              <Label for='exampleEmail' hidden>
                Name
              </Label>
              <Input id='exampleEmail' name='name' value={data.name} placeholder='User name' type='text' onChange={(e) => onchange(e)} />
            </FormGroup>
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
              <Link to={`/view`} className='text-danger '>
                View
              </Link>
            </FormGroup>
            <Button type='submit' onClick={(e) => FormSubmit(e)} className='bg-success me-3'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
