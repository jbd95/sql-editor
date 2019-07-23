import React from 'react';
import { Button, Drawer, Icon, Menu } from 'antd';
import { BrowserRouter, Link } from 'react-router-dom';

export class MainMenu extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            drawerVisible: false,
            current: this.props.tab
        }
    }

    toggleDrawer = () => {
        this.setState({
            drawerVisible: !this.state.drawerVisible
        });
    }

    drawerClosed = () => {
        this.setState({
            drawerVisible: false
        });
    }

    drawerSelect = (e) => {
        this.setState({
            drawerVisible: false,
            current: e.key
        })
    }
    
    render() {
        return (
            <div>
                <Button type='primary' icon='menu' onClick={this.toggleDrawer} className='menu-button primary-background'/>

                <Drawer title='Navigation'
                        placement='left'
                        closeable
                        onClose={this.drawerClosed}
                        visible={this.state.drawerVisible}>

                        <Menu mode='vertical' selectedKeys={[this.state.current]} onSelect={this.drawerSelect}>
                            <Menu.Item key='home' className='default-font bold-font'>
                                <Link to={'/'}>
                                    <Icon type='home'/>
                                    Home
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='Editor' className='default-font bold-font'>
                                <Link to={'/editor'}>
                                    <Icon type='edit'/>
                                    Editor
                                </Link>
                            </Menu.Item>
                        </Menu>       
                </Drawer>
            </div>
        )
    }
};