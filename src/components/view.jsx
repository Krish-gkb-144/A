import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getuser } from '../redux/todoslice';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { setUserId  } from '../redux/todoslice';

const View = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { record } = useSelector((state) => state.todos);

  const viewform = (e) => {
    navigate('/home');
    e.preventDefault();
  };
  useEffect(() => {
    const useractiv = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        try {
          dispatch(setUserId(currentUser.uid));
        } catch (error) {
          console.log(error);
        }
      }
    });
    return () => {
      useractiv();
    };
  }, []);

  return (
    <Container className='pt-5'>
      <Link onClick={(e) => viewform(e)} to={`/home`}>
        View Form
      </Link>
      <Table hover className='border rounded-3 border-5  '>
        <thead className='border-bottom border-dark '>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {record.map((val, i) => {
            return (
              <tr key={i}>
                <th scope='row'>{i + 1}</th>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <td>
                  <Button color='danger' outline> Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default View;
