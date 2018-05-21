import React, {Component} from 'react';

import SystemStatus from '../dashboard/SystemStatus';
import {MasterSpiders, SlaveSpiders} from '../dashboard/Dashboard';
import HoneyPot from './honeyPot';

const styles = {
    flex: {
        display: 'flex',
        flexDirection: 'column',
    }
};

class Status extends Component{

    render () {
        return (
            <div style={styles.flex}>
                <SystemStatus />
                <div style={{ marginTop : 25}} >
                    <MasterSpiders />
                </div>
                <SlaveSpiders nodes={[[0,"192,168.1.1", "Running"],[1,"192,168.1.1", "Running"],[2,"192,168.1.1", "Running"]]} />
                <HoneyPot/>
            </div>
        );
    }
}

export default Status