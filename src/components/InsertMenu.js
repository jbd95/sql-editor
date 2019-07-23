import React from 'react';
import { Entity } from './Entity';

export const InsertMenuClick = (parent, child) => {
    switch(child.toLowerCase())
    {
        case 'entity':
            return ShowAppropriateForm(child);
        break;
    }
}

const ShowAppropriateForm = (child) => (
    <Entity title='testing'/>
);