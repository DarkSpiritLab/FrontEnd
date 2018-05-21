import React, {Component} from 'react';
import { Paper, Divider, Toggle, CardTitle, CardText, List, ListItem, FlatButton, IconButton, Dialog, TextField, SelectField, MenuItem, Subheader} from 'material-ui';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import { translate } from 'admin-on-rest';


import ActionHome from 'material-ui/svg-icons/action/home';
import ImageNavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import ImageBlurOn from 'material-ui/svg-icons/image/blur-on';
import ImageStyle from 'material-ui/svg-icons/image/style';
import ImageWbCloudy from 'material-ui/svg-icons/image/wb-cloudy';
import EditorTitle from 'material-ui/svg-icons/content/content-copy';
import ContentMail from 'material-ui/svg-icons/content/mail';
import AIIcon from 'material-ui/svg-icons/maps/person-pin';
import DBSettingIcon from 'material-ui/svg-icons/content/archive';

import RunningState from './runningState';
import StoreConf from './storeConf';
import SiteList from './siteList';
import Templates from './templates';

const styles = {
    card:{
        transition: 'all 2s ease',
    },
    cardTitle: {
        fontSize: '23px',
        fontWeight: '200',
        textAlign: 'center',
        background: 'linear-gradient(rgba(106, 182, 183, 0.13) 40%, rgba(37, 37, 37, 0.21) 100%)',
        color: 'white',
    },
    toggle: {
        maxWidth: '250px',
        fontSize: '17px',
        margin: '35px 35px 35px 0px',
    },
    thumbOff: {
        backgroundColor: '#ff2e36',
    },
    trackOff: {
        backgroundColor: '#caffc5',
    },
    thumbSwitched: {
        backgroundColor: '#24f814',
    },
    trackSwitched: {
        backgroundColor: '#2c432e',
    },
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    flexCenter: {
        display: 'flex',
        alignContent: 'center',
    },
    flexVertical: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        textAlign: 'center',
        fontSize: '19px',
        fontWeight: 500,
    },
    list: {
        border: 'solid 1px #66666666',
        width: '80%',
        margin: 'auto',
        marginTop: '20px',
    },
    runningState: {
        textAlign: 'center',
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
    },
    light: {
        width: "10px",
        height: "10px",
        backgroundColor: "#14e428",
        display: 'inline-block',
        borderRadius: '1000px',
        border: 'solid 1px white',
        marginLeft: '3px',
        marginRight: '3px',
    },
    inline: {
        display: 'inline-block',
    },
    large: {
        width: 120,
        height: 120,
        padding: 30,
        flex: '0 0 25%'
    },
    largeIcon:{
        transform: 'scale(2.5,2.5 )',
    },
    leftTitle:{
        fontSize: "17px",
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: '50px',
        marginRight: '50px',
        width: '150px',
        borderRight: '2px solid rgba(140, 140, 140, 0.38)',
    }
};
class Monitor extends Component{
    componentWillMount(){
        this.setState({
            isRun: true,
            page: 0,
            loading: false,
            dialog: false,
            loglevel: 1,
            confirmFunction: ()=>{},
            config: {
                log_level: 1,
                master_ip: "192.168.1.100",
                master_proxy: "http://192.168.1.101:8080",
                master_queue: "rabbit://192.168.1.101:9000",
                slave_log_level: 2,
                slave_pool: "192.168.1.1",
                slave_proxy: "http://192.168.1.101:8080",
                slave_queue: "rabbit://192.168.1.101:9001",
                db_url: "mangodb://localhost:7890",
                db_username: 'mango',
                db_password: 'password',
                templates: '# 威胁报告\n' +
                '时间：{{ times }}\n' +
                '\n' +
                '类别：{{ type }}\n' +
                '\n' +
                '等级：{{ level }}\n' +
                '\n' +
                '标题：{{ title }}',
                site_list: [],
            },
            spiders: {
                master: {
                    ip: '192.168.1.100',
                    lastSeen: 'right now',
                },
                slave: [
                    {ip: '192.168.1.101', lastSeen: '1s before', id: 1},
                    {ip: '192.168.1.102', lastSeen: '2s before', id: 2},
                    {ip: '192.168.1.103', lastSeen: '3s before', id: 3},
                    {ip: '192.168.1.104', lastSeen: '4s before', id: 4},
                    {ip: '192.168.1.105', lastSeen: '5s before', id: 5},

                ]

            }
        });
    }
    onToggle(event) {
        const {translate} = this.props;
        this.setState({
            dialog: true,
            tips: translate('pos.tips.confirm'),
            confirmFunction: () => {this.setState({ isRun : !this.state.isRun, dialog: false });}
        });
    }
    setData(event, value){
        let data = this.state.config;
        data[event.target.id] = value;
        this.setState({
             config: data,
        });
    }
    handleSelect(event, value){

    }
    render(){
        const {translate} = this.props;
        const {page, loading, dialog, confirmFunction, tips} = this.state;
        const page_list = [
            {id : 1, title: translate('resources.monitor.menu.node'), icon: <ImageBlurOn style={styles.largeIcon}/>},
            {id : 2, title: translate('resources.monitor.menu.dbSetting'), icon: <DBSettingIcon style={styles.largeIcon}/>},
            {id : 3, title: translate('resources.monitor.menu.website'), icon: <ImageWbCloudy style={styles.largeIcon}/>},
            {id : 4, title: translate('resources.monitor.menu.flagTag'), icon: <ImageStyle style={styles.largeIcon}/>},
            {id : 5, title: translate('resources.monitor.menu.ai'), icon: <AIIcon style={styles.largeIcon}/>},
            {id : 6, title: translate('resources.monitor.menu.template'), icon: <EditorTitle style={styles.largeIcon}/>},
            {id : 7, title: translate('resources.monitor.menu.sig'), icon: <ContentMail style={styles.largeIcon}/>},
        ];
        const confirmAction = [
            <FlatButton label='取消' secondary={true} onClick={()=>{this.setState({dialog: false});}} />,
            <FlatButton label='确定' onClick={confirmFunction} />
        ];
        return (
            <Paper style={styles.card}>
                <CardTitle style={styles.cardTitle}>
                    <div>{translate('resources.monitor.title')}</div>
                </CardTitle>
                <CardText>
                    <div style={styles.runningState}>{translate('resources.monitor.state')}
                        {this.state.isRun ? <div><div style={{...styles.light, backgroundColor: '#0ff800'}}/>
                            <div style={styles.inline}>{translate('pos.tips.running')}</div></div> : <div><div style={{...styles.light, backgroundColor: '#f80e0e'}}/>
                            <div style={styles.inline}>{translate('pos.tips.stop')}</div></div>}

                    </div>
                        <ExpandTransition open={true} loading={loading} transitionDuration={200}>
                            <div style={{position: 'relative', textAlign:'center', fontSize: '20px', color: '#8d8d8d'}}>
                                <div style={{position: 'absolute', top:'-7px'}}>
                                    <IconButton onClick={() => {
                                        this.setState({loading: true, page: 0});
                                        setTimeout( () =>{
                                            this.setState({loading: false})} , 500);
                                    }}
                                    >
                                        <ImageNavigateBefore color="#fffd00" />
                                    </IconButton>
                                </div>
                                { this.state.page !== 0 ? <div style={{marginTop: '4px'}}>{page_list[page - 1].title}</div> : ''}
                            </div>
                        </ExpandTransition>
                    <Divider />
                    <ExpandTransition open={true} loading={loading}>
                        <div style={{transition: 'all 1s ease'}}>
                                    {
                                        (page === 0 || loading) &&
                                        <div style={styles.flex}>
                                            {
                                                page_list.map((item)=> (
                                                    <FlatButton style={styles.large} onClick={()=>{
                                                        this.setState({loading: true,page: item.id});
                                                        setTimeout(()=>{this.setState({loading: false})}, 500);}}
                                                        key={item.id}
                                                    >
                                                        {item.icon}
                                                        <div>{item.title}</div>
                                                    </FlatButton>
                                                ))
                                            }

                                        </div>
                                    }
                        </div>
                        <div>
                            {page === 1? <RunningState styles={styles} state={this.state} toggle={this.onToggle.bind(this)} handle={this.setData.bind(this)} spiders={this.state.spiders} />: ''}
                            {page === 2? <StoreConf styles={styles} state={this.state} handle={this.setData.bind(this)} />: ''}
                            {page === 3? <SiteList styles={styles} state={this.state} selectHandle={()=>{}} /> : ''}
                            {page === 6? <Templates styles={styles} state={this.state} handle={this.setData.bind(this)} /> : ''}
                        </div>
                    </ExpandTransition>

                </CardText>
                <Dialog open={dialog} actions={confirmAction} title={tips}>
                </Dialog>
            </Paper>
        );
    }
}

export default translate(Monitor);