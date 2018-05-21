import React from 'react';
import { Divider, List, ListItem, TextField, SelectField, MenuItem, Subheader} from 'material-ui';
import { translate } from 'admin-on-rest';

const StoreConf = translate(({translate, state, handle, styles}) => (
    <div>
        <div style={styles.flexCenter}>
                <div style={styles.leftTitle}>{translate('resources.monitor.store.url')}</div>
                <TextField id="db_url" defaultValue={state.config.db_url} floatingLabelText='URL' hintText="mongodb://localhost:6789" onChange={handle} />
        </div>
        <Divider />
        <div style={styles.flexCenter}>
            <div style={styles.leftTitle}>{translate('resources.monitor.store.account')}</div>
            <div style={styles.flexVertical}>
                <TextField id="db_username" floatingLabelText={translate('resources.monitor.store.username')} defaultValue={state.config.db_username} onChange={handle} />
                <TextField id="db_password" type="password" floatingLabelText={translate('resources.monitor.store.password')} defaultValue={state.config.db_password} onChange={handle} />
            </div>
        </div>
        <Divider />
    </div>
));

export default StoreConf;