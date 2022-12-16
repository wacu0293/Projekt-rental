import React, {useState, useContext} from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import sport from '../..//components/assets/images/sport.gif';
import logo from '../../components/assets/images/logo.jpg';
import { LoginWrapper, ButtonLogin, Image, AlertMessage, Logo } from './styled';
import { UserLoginContext } from '../LoginContext/LoginContext';

const Login = () => {
    const navigate = useNavigate();
    const context = useContext(UserLoginContext);
    const {isAuthenticated, isAdmin} = context;
    const [data, setData] = useState(false);

    const onFinish = (values) => {
        if (values.username === 'user' && values.password === 'test') {
            isAuthenticated(true)
            isAdmin(false)
            navigate("/worker-panel/rental");
          } 
          else if(values.username === 'admin' && values.password === 'admin') {
            isAuthenticated(true);
            isAdmin(true)
            navigate("/worker-panel-admin/rental");
          }
          else {
           navigate('/')
           setData(true);
          }
      };
    
      return (
        <LoginWrapper>
            <Logo src={logo}/>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
                <a className="login-form-forgot" href=".">
                Forgot password
                </a>
            </Form.Item>
        
            <Form.Item>
                <ButtonLogin type="primary" htmlType="submit" className="login-form-button">
                Log in
                </ButtonLogin>
                Or <a href=".">register now!</a>
            </Form.Item>
            <AlertMessage>
                    {data ? <Alert message="Incorrect username or password" type="error" /> : null}
                </AlertMessage>
            </Form>
            <Image src={sport} alt='sport image'/>
        </LoginWrapper>
      );
}

export default Login