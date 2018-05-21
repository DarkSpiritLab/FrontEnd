import React, {Component} from 'react';

import {Table, TableHeaderColumn, TableHeader, TableRow, TableRowColumn, TableBody, Card, CardHeader, CardActions, FlatButton, Avatar, RaisedButton, Dialog} from 'material-ui';
import CodeIcon from 'material-ui/svg-icons/action/code';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';

class honeyPot extends Component{
    componentWillMount(){
        this.setState({ auth: false, list: [], dialog: false });
    }



    render () {
        const {auth, list, dialog} = this.state;
        console.log(auth);
        return (
            <div>
            <Card>
                    <CardHeader
                        title={'蜜罐信息'}
                        subtitle={'蜜罐列表'}
                        avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon />} />}
                    >
                        { auth ? <RaisedButton primary style={{ float: 'right' }} label={'隐藏'} onClick={()=> this.setState({auth: false})} /> : '' }
                    </CardHeader>
                    <CardActions style={{ textAlign: 'right' }}>

                            { auth?
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHeaderColumn>id</TableHeaderColumn>
                                            <TableHeaderColumn>IP</TableHeaderColumn>
                                            <TableHeaderColumn>国家</TableHeaderColumn>
                                            <TableHeaderColumn>描述</TableHeaderColumn>
                                            <TableHeaderColumn>备注</TableHeaderColumn>
                                            <TableHeaderColumn>状态</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {list.map( item => (
                                           <TableRow>
                                               <TableRowColumn>id</TableRowColumn>
                                               <TableRowColumn>IP</TableRowColumn>
                                               <TableRowColumn>国家</TableRowColumn>
                                               <TableRowColumn>描述</TableRowColumn>
                                               <TableRowColumn>备注</TableRowColumn>
                                               <TableRowColumn>状态</TableRowColumn>
                                           </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                : <div><div>机密信息，请认证后查看</div><br/><FlatButton label={'认证'} icon={<CodeIcon />} onClick={()=> this.setState({dialog: true, list: [1,2,3,4,5]})} /></div> }
                    </CardActions>
            </Card>
                <Dialog open={dialog} actions={[<FlatButton label={'确定'} onClick={()=> this.setState({auth: true, dialog: false})}/>]}>
                    请完成认证
                </Dialog>
            </div>
        );
    }
}

export default honeyPot;