import React, {Component} from 'react';

import {TextField} from 'material-ui';

import Markdown from 'react-markdown';


export default class templates extends Component{
    render(){
        const {templates} = this.props.state.config;
        return (
            <div style={{ display: 'flex',  flexDirection: 'row'}}>
                <TextField style={{ flex: '0 0 50%' }} id="templates" value={templates} onChange={this.props.handle} multiLine rows={20} fullWidth />
                <Markdown style={{ flex: '0 0 50%', overflow: 'scroll' }} source={templates} />
            </div>
        );
    }

}