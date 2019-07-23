import React from 'react';
import { Button, Drawer, Icon, Menu, Card, Collapse, Row, Typography, Col } from 'antd';
import Space from './Space';
import { InsertMenuClick } from './InsertMenu';

const { Panel } = Collapse;
const { Title } = Typography;

export class Editor extends React.Component {
    
    constructor(props)
    {
        super(props);

        this.state = {
            children: []
        }

        this.elements = [
            {
                title: 'Component',
                children: [
                    'Entity', 'Attribute'
                ]
            },
            {
                title: 'Relationship',
                children: [
                    'Entity', 'Attribute',
                ]
            },
        ];
    }

    elementClicked = (parent, child) => {
        const existing = this.state.children;
        existing.push(InsertMenuClick(parent, child));
        this.setState({
            children: existing
        })
    }

    render() {
        return (
            <div>

                {this.state.children.map((child, i) => (
                    {...child}
                ))}

                <Collapse style={{position: 'absolute', bottom: '0', width: '100vw'}} className='default-font' defaultActiveKey={['add-comp']}>
                    <Panel key='add-comp' header='Insert' className='small-font' default-font>
                        <Col  style={{maxHeight: '20vh'}} className='vertical-scroll'>
                            {this.elements.map((element, i) => (
                                <div key={`element-${i}`}>
                                    <div className='extra-small-font bold-font'>
                                        {element.title}
                                    </div>
                                    <Row type='flex' className='flex-wrap'>
                                    
                                    {element.children.map((child, i) => (
                                        <Button className='primary-background white-color' key={`child-${i}`} style={{margin: '10px'}} onClick={() => {this.elementClicked(element.title, child)}}>
                                            {child}
                                        </Button>
                                    ))}
                                    </Row>
                                </div>
                            ))}
                        </Col>
                    </Panel>
                </Collapse>
            </div>
        )
    }
};