import React from 'react';
import {CardHeader, Card, CardActions} from 'material-ui';
import CircleStatus from '../addon/CircleStatus';
import NotificationPersonalVideo from 'material-ui/svg-icons/notification/personal-video';
import {translate} from 'admin-on-rest';
import {Avatar} from 'material-ui';
const styles = {
    welcome: { marginBottom: '2em',borderLeft: 'solid 4px #FFEB3B' },
    flex: { display: 'flex', flexWrap: 'wrap' },
    flexVertical : {
        display: 'flex',
        flexDirection: 'column',
    },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em' },
    flexStart: {
        alignItems: 'flex-start',
        display: 'flex',
        flexWrap: 'wrap'
    },
    masterSpider: {
        marginBottom: '2em',
        flex: '1',
        borderLeft: 'solid 4px #039BE5',
    },
    slaveSpider: {
        marginBottom: '2em',
        marginLeft: '30px',
        borderLeft: 'solid 4px #8BC34A',
        flex: '2',
    },
    originCard: {
        marginBottom: '2em',
        // marginRight: '50px',
        borderLeft: 'solid 4px #AB47BC',
    },
    textAlignR:{
        textAlign: 'right',
    },
    textAlignC:{
        textAlign: 'center',
    },
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    systemStatus: {
        borderLeft: 'solid 4px #26C6DA',
        marginBottom: '5px',
    },
    processor: {
        margin: '15px',
        padding: 'auto',
        flexGrow: 1,
    }
};


const SystemStatus = translate(({translate, status}) => (
    <Card style={styles.systemStatus}>
        <CardHeader
            title={translate('pos.dashboard.status.title')}
            subtitle={translate('pos.dashboard.status.subtitle')}
            avatar={<Avatar backgroundColor="#26C6DA" icon={<NotificationPersonalVideo />} />}
        />
        <CardActions style={{ textAlign: 'right' }}>
            <div style={styles.flexVertical}>
                <div>{translate('pos.dashboard.status.label.upTime', {time: '1天09小时18分20秒'})}</div>
                <div style={{...styles.flex, margin: 'auto'}}>
                    <div style={styles.processor}><CircleStatus value={78.9} unit="%" name={translate('pos.dashboard.status.label.cpu')} color="#b71c1c" /></div>
                    <div style={styles.processor}><CircleStatus value={10} unit="%" name={translate('pos.dashboard.status.label.queue')} color="#FF8F00"/></div>
                    <div style={styles.processor}><CircleStatus value={30} unit="%" name={translate('pos.dashboard.status.label.memory')} color="#FBC02D"/></div>
                    <div style={styles.processor}><CircleStatus value={50} unit="%" name={translate('pos.dashboard.status.label.masterSpider')} color="#689F38" /></div>
                    <div style={styles.processor}><CircleStatus value={20} unit={translate('pos.dashboard.status.label.unit')} name={translate('pos.dashboard.status.label.masterQueue')} color="#26A69A"/></div>
                    <div style={styles.processor}><CircleStatus value={90} unit={translate('pos.dashboard.status.label.unit')} name={translate('pos.dashboard.status.label.eventPerSecond')} color="#0D47A1"/></div>
                </div>
                <div style={styles.flex}>
                    <div> </div>
                </div>
            </div>
        </CardActions>
    </Card>
));

export default SystemStatus;