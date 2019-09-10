import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ContactForm from './form';
import ContacTable from './table'
import 'antd/dist/antd.css';
import { Typrography,Layout, Menu, Icon, Typography } from 'antd';

const {Title} = Typography;
const {Header, Content, Footer, Sider } = Layout;


function App() {
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user-add" />
            <span className="nav-text">Agregar Contacto</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="contacts" />
            <span className="nav-text">Contactos</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="edit" />
            <span className="nav-text">Modificar Contacto</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 20 }}>
          <Title>Contacto Nuevo:</Title>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            <ContacTable/>
          </div>
        </Content>
      </Layout>
    </Layout>

    /*<div className="App">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/contactos" component={Bye} />
        </div>
      </BrowserRouter>
      
    </div>*/
  );
}

function Home() {
  return (
    <div/>
  );
}

function Bye() {
  return (
    <div>
      <h2>Bye</h2>
    </div>
  );
}


export default App;
