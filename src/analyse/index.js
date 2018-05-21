import React, {Component} from 'react';
import {Paper, Menu, MenuItem, AppBar, FlatButton, IconButton} from 'material-ui';
import {translate} from 'admin-on-rest';

import LA from 'material-ui/svg-icons/maps/local-airport';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import TrackChanges from 'material-ui/svg-icons/action/track-changes';
import User from 'material-ui/svg-icons/communication/contacts';
import Scan from 'material-ui/svg-icons/action/youtube-searched-for';
import Home from 'material-ui/svg-icons/action/extension';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import ExpandTransition from 'material-ui/internal/ExpandTransition';

import Trace from './trace';
import Bitcoin from './bitcoin';
import Coherence from './coherence';
import AddressCollector from './addressCollector';

const styles = {
    layout : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    menu : {
        width: '200px',
    },
    button: {
        width: 120,
        height: 150,
        padding: 30,
        flex: '0 0 25%'
    },
    back: {
        width: 30,
    }
};
const toolbox = [
    [1,'resources.analyse.menu.resolve', <HighlightOff style={{ width: 50 , height: 50, transform: 'rotateZ(45deg)' }} />, <HighlightOff/>],
    [2, 'resources.analyse.menu.bitcoin', <TrackChanges style={{ width: 50, height: 50 }} />, <TrackChanges/>],
    [3, 'resources.analyse.menu.user', <User style={{ width: 50, height: 50 }}/>, <User/>],
    [4, 'resources.analyse.menu.scan' , <Scan style={{ width: 50, height: 50 }} />, <Scan/>]
];
class target extends Component{
    componentWillMount() {
        this.setState({sel: 0, loading: false});
    }
    render() {
        const {translate} = this.props;
        const {sel, loading} = this.state;
        return (
            <Paper>
                <AppBar iconElementLeft={<IconButton>{sel ? <Back/> :<Home />}</IconButton>} style={{ backgroundColor: '#4f4f4f' }} title={sel ? `${translate('resources.analyse.name')} - ${translate(toolbox[sel - 1][1])}` : translate('resources.analyse.name')} onLeftIconButtonTouchTap={() => {this.setState({sel: 0, loading: true}); setTimeout(()=>this.setState({loading: false}), 500);}}>

                </AppBar>
                <ExpandTransition open={true} loading={loading}>
                    {sel === 0 ? <div style={styles.layout}>
                        {
                            toolbox.map(item => (
                                <FlatButton  style={styles.button} onClick={() => {this.setState({sel: item[0], loading: true}); setTimeout(()=>this.setState({loading: false}), 500);}}>
                                    {item[2]}
                                    <div>{translate(item[1])}</div>
                                </FlatButton>
                            ))
                        }

                    </div> : ''}
                    {sel === 1 ? <Trace/>: ''}
                    {sel === 2 ? <Bitcoin/> : ''}
                    {sel === 3 ? <Coherence/> : ''}
                    {sel === 4 ? <AddressCollector/> : ''}
                </ExpandTransition>
            </Paper>
        );
    }
}

export default translate(target);