import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Login.css';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (googleUser) {
        navigate('/checkout')
    }

    if (user) {
        navigate('/checkout')
    }

    const handleSignIn = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='container login-form'>
            <h3 className='text-center mt-3 text-success fw-bold'>Please Login</h3>
            <Form onSubmit={handleSignIn} className='w-50 mx-auto p-2 border my-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                    <p className='text-center text-danger fw-bold fs-5 mt-1'>{error?.message}</p>
                    {
                        loading && <p className='text-center text-success fw-bold fs-5'>Loading...</p>
                    }
                </Form.Group>

                <Button className='mx-auto d-block fw-bold' variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-center mt-1 fw-bold'>New User? <Link to="/register">Resister</Link> </p>
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

export default Login;