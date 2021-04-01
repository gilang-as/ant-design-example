import React from "react";
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

const LoginPage = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div id="LoginPage">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <div className="title">
                    <div style={{
                        overflow: 'hidden',
                        paddingLeft: '40px',
                        float: 'left',
                        height: '64px',
                        lineHeight: '64px',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        transition: 'padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                        width: '100%',
                        padding: 0
                    }}>
                        <img alt="logo" style={{height: '32px', marginRight: '16px'}} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                        <img alt="Ant Design" style={{height: '16px', position: 'relative', top: '1px'}} src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg" />
                    </div>
                    <h2>Sign In</h2>
                    <h4>Sign In to access your dashboard</h4>
                </div>
                <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                    <Input size="large" prefix={<MailOutlined className="site-form-item-icon" />} type="email" placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                    <Input.Password size="large" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Sign In</Button>
                    Don't have an account? <Link to="/auth/sign-up">Create one now</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;