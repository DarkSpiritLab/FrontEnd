import React,{Component} from 'react';
import {IconButton, IconMenu, MenuItem, ToolbarSeparator} from 'material-ui';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ActionAlarm from 'material-ui/svg-icons/action/alarm';
import io from 'socket.io-client';
import { translate, GET_LIST } from 'admin-on-rest';
import restClient from '../restClient';

const socket = io.connect('http://127.0.0.1:5000/notifies');

const styles = {
    badge:
        {
            position: 'absolute',
            left: '26px',
            top: '29px',
            backgroundColor: 'rgba(190, 46, 92, 200)',
            padding: "1px 5px 3px 4px",
            borderRadius: '100px',
            textAlign: 'center',
            fontSize: '13px',
            color: '#dbd730'
        }
    ,
};
class Tools extends Component{
    componentWillMount(){
        this.setState({notify : [], open: false });
       // this.getNotify();

    }
    componentDidMount(){
        // TODO: Remember remove this notes before deploy.
       // this.setState({timer: setInterval(this.getNotify.bind(this), 2000)});
        socket.on('notify_list', data=> { console.log(data); this.setState({notify: data.data});});
        socket.on('new_notify', data=> { this.setState({notify: [...this.state.notify, data.data]})});
        socket.emit('get_notify', 'give me notify');
    }
    componentWillUnmount(){
        clearInterval(this.state.timer);
    }
    getNotify(){
        restClient(GET_LIST, 'notify', {pagination: {page: 1, perPage: 5}, sort: {field: 'title', order: 'ASC'}, filter:{}})
            .then((response) => {
                this.setState({notify: response.data.data});
            }
        );
    }
    render(){
        return(
        <div style={{ display: 'flex' }}>
            {/*<ToolbarSeparator style={{ height: '100%' }} />*/}
            <Status />
            <IconMenu iconButtonElement={
                <div style={{ position: 'relative', height: '48px', width: "48px" }}>
                <div style={{ position: 'absolute'}}>
                    <IconButton> <NotificationsIcon /> </IconButton>
                </div>{this.state.notify ? (<div style={styles.badge} > {this.state.notify.length} </div>) : <div/> }
                </div>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              maxHeight={500}
                      menuStyle={{ width: '500px'}}
            >
                {this.state.notify.map(item => {return (<MenuItem key={item[0]} primaryText={item[1]} value={item[1]} onClick={()=>{console.log("read" + item)}} leftIcon={<ActionAlarm style={!item[2] ? {fill: 'red'} : {fill: 'green'}} />}/>)})}
            </IconMenu>
        </div>
        );
    }
}

export default Tools;
const Status = translate(({translate}) => (<div style={{ margin: 'auto', color: "#388fdc" }}>{translate("pos.tools.status.spiders",{spiders: 100})}<br/>{translate("pos.tools.status.honeyPots",{honeyPots: 40})}</div>));