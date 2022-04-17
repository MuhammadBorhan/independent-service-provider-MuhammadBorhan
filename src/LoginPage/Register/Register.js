import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import './Register.css';

const Register = () => {
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user, loading, userError] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (googleUser) {
        navigate('/checkout')
    }

    if (user) {
        navigate('/login');
    }
    const handleCreateUser = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmpass.value;

        if (password.length < 6) {
            setError('Password no longer than 6 character');
            return;
        } else if (password !== confirmPassword) {
            setError('Password did not mathced');
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='container'>
            <h3 className='text-center mt-3 text-success fw-bold'>Please Register</h3>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto p-2 border my-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmpass" placeholder="Confirm Password" required />
                    <p className='text-center text-danger mt-1 fw-bold'>{error}</p>
                    {
                        userError && <div>
                            <p className='text-center text-success fw-bold ds-5'>Already User</p>
                        </div>
                    }
                </Form.Group>
                <Button className='mx-auto d-block fw-bold' variant="primary" type="submit">
                    Register
                </Button>
                <p className='text-center mt-1 fw-bold'>Already have an account? <Link to="/login">Login</Link> </p>
                <div className='text-center'>
                    <Link to=''>
                        <button onClick={() => signInWithGoogle()}>
                            SignIn with google
                        </button>
                    </Link>
                </div>
            </Form>
        </div>
    );
};

export default Register;