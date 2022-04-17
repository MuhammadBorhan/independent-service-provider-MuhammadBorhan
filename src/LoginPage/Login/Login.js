import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='container login-form'>
            <h3 className='text-center mt-3 text-success fw-bold'>Please Login</h3>
            <Form className='w-50 mx-auto p-2 border my-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button className='mx-auto d-block fw-bold' variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-center mt-1 fw-bold'>New User? <Link to="/register">Resister</Link> </p>
                <div className='text-center'>
                    <Link to=''>
                        <button>
                            SignIn with google
                        </button>
                    </Link>
                </div>
            </Form>
        </div>
    );
};

export default Login;