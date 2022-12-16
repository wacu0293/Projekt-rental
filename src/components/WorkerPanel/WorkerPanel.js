import React, {useState} from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

export const WorkerPanel = () => {
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{height: '100vh'}}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: <Link to="rental">Wypożyczenia</Link>,
                },
                {
                  key: '2',
                  icon: <UserOutlined />,
                  label: <Link to="rent">Wypożycz</Link>,
                },
                {
                  key: '3',
                  icon: <UserOutlined />,
                  label: <Link to="return">Zwrot</Link>,
                },
                {
                    key: '4',
                    icon: <UserOutlined />,
                    label: <Link to="service">Serwis</Link>,
                },
                {
                    key: '5',
                    icon: <UserOutlined />,
                    label: <Link to="sale">Sprzedaż</Link>,
                },
                {
                    key: '6',
                    icon: <UserOutlined />,
                    label: <Link to="daily-report">Raport Dzienny</Link>,
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: colorBgContainer, width:'100%' }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
              <Button className='logout' style={{display:'block', marginLeft:'auto', marginRight:'30px', top:'-50px'}} type='primary' onClick={() => navigate('/')}>Logout</Button>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Outlet/>
            </Content>
          </Layout>
        </Layout>
      );
}

export default WorkerPanel;