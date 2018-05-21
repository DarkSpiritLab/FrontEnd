import React from 'react';
import { Divider, Toggle, List, ListItem, TextField, SelectField, MenuItem, Subheader} from 'material-ui';
import { translate } from 'admin-on-rest';


const RunningState = translate(({translate, state, spiders, toggle, handle, styles}) => (
    <div>
        <div style={styles.flexCenter}>
            <div style={styles.leftTitle}>{translate("resources.monitor.states.control")}</div>
            <Toggle style={styles.toggle}
                    label={state.isRun ? '终止布控':'启动布控'}
                    toggled={state.isRun}
                    onToggle={toggle}
                    labelPosition="right"
                    thumbStyle={styles.thumbOff}
                    trackStyle={styles.trackOff}
                    thumbSwitchedStyle={styles.thumbSwitched}
                    trackSwitchedStyle={styles.trackSwitched}
            />
        </div>
        <Divider />
        <div style={styles.flexCenter}>
            <div style={styles.leftTitle}>{translate("resources.monitor.states.master.name")}</div>
            <div style={styles.flexVertical}>
                <TextField id="master_ip" defaultValue={state.config.master_ip} floatingLabelText={translate('resources.monitor.states.master.ip')} hintText={'192.168.1.100'} onChange={handle}/>
                <TextField id="master_proxy" defaultValue={state.config.master_proxy} floatingLabelText={translate('resources.monitor.states.master.proxy')} hintText={'http://192.168.1.100:8080（选填）'} onChange={handle}/>
                <TextField id='master_queue' defaultValue={state.config.master_queue} floatingLabelText={translate('resources.monitor.states.master.queue')} hintText={'rabbit://192.168.1.100:8080'} onChange={handle}/>
                <TextField id='master_alert' defaultValue={state.config.master_alert} floatingLabelText={translate('resources.monitor.states.master.alert')} hintText={'rabbit://192.168.1.100:8080'} onChange={handle}/>
                <SelectField value={state.config.log_level} floatingLabelText={translate('resources.monitor.states.master.logLevel')} onChange={(event, value)=>{handle({target: {id:'log_level'}}, value + 1)}}>
                    <MenuItem value={1} primaryText='WARNING' key={1} />
                    <MenuItem value={2} primaryText='INFO' key={2} />
                    <MenuItem value={3} primaryText='DEBUG' key={3} />
                </SelectField>
            </div>
        </div>
        <Divider/>
        <div style={styles.flexCenter}>
            <div style={styles.leftTitle}>{translate("resources.monitor.states.slave.name")}</div>
            <div style={styles.flexVertical}>
                <TextField id="slave_pool" fullWidth={true} value={state.config.slave_pool} floatingLabelText={translate('resources.monitor.states.slave.ip')} hintText={'192.168.1.100'} underlineShow={false}/>
                <TextField id="slave_proxy" defaultValue={state.config.slave_proxy} floatingLabelText={translate('resources.monitor.states.slave.proxy')} hintText={'http://192.168.1.100:8080（选填）'} onChange={handle}/>
                <TextField id='slave_queue' defaultValue={state.config.slave_queue} floatingLabelText={translate('resources.monitor.states.slave.queue')} hintText={'rabbit://192.168.1.100:8080'} onChange={handle}/>
                <SelectField value={state.config.slave_log_level} floatingLabelText={translate('resources.monitor.states.master.logLevel')} onChange={(event, value)=>{handle({target: {id:'slave_log_level'}}, value + 1)}}>
                    <MenuItem value={1} primaryText='WARNING' key={1} />
                    <MenuItem value={2} primaryText='INFO' key={2} />
                    <MenuItem value={3} primaryText='DEBUG' key={3} />
                </SelectField>
            </div>
        </div>
        <Divider/>
        <List style={styles.list}>
            <Subheader inset={true}>{translate('resources.monitor.states.spiders.master')}</Subheader>
            <Divider/>
            <ListItem key={-1} primaryText={spiders.master.ip} secondaryText={`${translate("resources.monitor.states.spiders.lastSeen")}: ${spiders.master.lastSeen}`}/>
            <Subheader inset={true}>{translate('resources.monitor.states.spiders.slave')}</Subheader>
            <Divider/>
            {spiders.slave.map(item=>(
                <ListItem key={item.id} primaryText={item.ip} secondaryText={`${translate("resources.monitor.states.spiders.lastSeen")}: ${item.lastSeen}`}/>
            ))}
        </List>
    </div>
));

export default RunningState;