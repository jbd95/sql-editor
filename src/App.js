import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { MainMenu } from './components/Menu'
import { Home } from './components/Home';
import { Editor } from './components/Editor';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

    render() {
        return (
            <Layout className='layout'>
                <Content className='fill-screen background-color'>
                    <BrowserRouter>
                    <MainMenu tab='home'/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/editor' component={Editor}/>
                        </Switch>
                    </BrowserRouter>
                </Content>
            </Layout>
        )
    }
}

export default App;
