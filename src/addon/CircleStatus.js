import React from 'react';
import {CircularProgress} from  'material-ui';

const CircleStatus = (props) => (
    <div style={{position: 'relative', height: '100px'}}>
        <div style={{position: 'absolute', height: '100px', width: '100px', transform: 'rotate(-90deg)'}}>
            <CircularProgress mode="determinate" value={props.value} size={100} thickness={10} color={props.color ? `${props.color}${parseInt(props.value+155).toString(16)}`:`#FF3D00${parseInt(props.value+155).toString(16)}`}/>
        </div>
        <div style={{position: 'absolute', height: '100px', width: '100px', transform: 'rotate(-90deg)'}}>
            <CircularProgress mode="determinate" value={100} size={100} thickness={10} color={props.color ? `${props.color}30`:`#FF3D0030`}/>
        </div>
        <div style={{display: 'flex',flexDirection: 'column',width: '100px',height: '100px'}}>
            <div style={{margin: 'auto', fontSize: '12px'}}>{props.name}</div>
            <div style={{margin: '-30px auto auto auto'}}>{`${props.value}${props.unit}`}
            </div>
        </div>
    </div>
);

export default CircleStatus;