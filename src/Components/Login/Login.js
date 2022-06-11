import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox, Col, Row } from 'antd';
import "./Login.css";
import './illustration.png';


const Login = () => {
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const updateEmail = (e) => {
        setloginEmail(e.target.value);
      };
    
      const updatePassword = (e) => {
        setloginPassword(e.target.value);
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        try {
          const data = await axios({
            method: "post",
            url: "https://reqres.in/api/login",
            data: {
              email: loginEmail,
              password: loginPassword,
            },
          });
          return alert("Login successfull");
        }
          catch (e) {
            console.log(e);
            return alert("Missing Password");
          }
        }

  return (
    <div className='pageLayout'>
            <div className='form'>
            <div className='loginPage__form'>
                <h1 className='text'>Welcome Back</h1>
                <h3 className='text'>Sub-title text goes here</h3>
                <Form className='Form'
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                      
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        ]}
                    >
                        <Input className="input" placeholder="Email Address *" size="large" onChange={updateEmail} required/>
                    </Form.Item>

                    <Form.Item
                        
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input className="input" placeholder="Password *" size="large" onChange={updatePassword} required/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" className='submit' onClick={onSubmit}>
                        Login
                        </Button>
                    </Form.Item>
                    <Row className='row'>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperRow={{
                        offset: 8,
                        span: 16,
                        }}
                        className="col"
                    >
                        <Col span={6}><Checkbox >Remember me</Checkbox></Col>
                    </Form.Item>
                    <Form.Item
                        name="forgot"
                        wrapperRow={{
                        offset: 8,
                        span: 16,
                        }}
                        className="col"
                    >
                       <Col span={6}>Forgot password?</Col>
                    </Form.Item>
                    </Row>
                    </Form>

                    </div>
                    <div className='illustration' style={{backgroundImage: 'url(images/illustration.png)'}}>
                    {/* <img src={require('./illustration.png')} alt="illustration" width={1300} height={650}/> */}
                    </div>
                    </div>
                    </div>
  )
}

export default Login;