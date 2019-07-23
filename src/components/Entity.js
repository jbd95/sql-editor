import React from 'react';
import { Card } from 'antd';

export class Entity extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <Card title={this.props.title}>
                {this.props.children}
            </Card>
        )
    }
}

export class EntityForm extends React.Component {

}