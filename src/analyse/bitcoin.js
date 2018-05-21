import React, {Component} from 'react';

import {TextField, RaisedButton, Divider, SelectField, MenuItem, Table, TableRow, TableHeader, TableBody, TableHeaderColumn, TableRowColumn, TableH} from 'material-ui';

import {translate} from 'admin-on-rest';


const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 20,
    },
    submit: {
        margin: 'auto',
    },
    select: {
        width: 'none',
        transform: 'translateY(15px)',
    }
};
class BitCoin extends Component{
    constructor(props){
        super(props);
    }
    translate = this.props.translate;
    handleSubmit() {
        let {tasks} = this.state;
        tasks.push('1');
        this.setState({tasks});
    }
    componentWillMount(){
        this.setState({ target : '', pri: 1, tasks: [], tasks2: []});
    }
    render(){
        const {tasks, pri, tasks2} = this.state;
        return (
            <div style={styles.layout}>
                <div style={styles.submit}>
                    自定义地址：
                    <TextField floatingLabelText={'钱包地址'} onChange={(t) => this.setState({target: t.target.value})}/>
                    <SelectField style={styles.select} floatingLabelText={"区块"} value={pri} onChange={(event, index, value) => this.setState({pri: value})}>
                        <MenuItem value={1} primaryText={"比特币"} key={1} />
                    </SelectField>
                    <RaisedButton style={{marginLeft: 5}} label={'加入列表'} onClick={this.handleSubmit.bind(this)} />
                </div>
                <Divider style={{marginTop: 10, marginBottom: 10}}/>
                <div style={{ display: 'flex' }}>
                    <Table style={{ margin: '10px' }}>
                        <TableHeader displaySelectAll={false}
                                     adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn style={{textAlign: 'center', fontSize: 25}} colSpan={4} tooltip="该部分由您自行添加">自定列表 </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn width={60}>ID</TableHeaderColumn>
                                <TableHeaderColumn width={200}>地址</TableHeaderColumn>
                                <TableHeaderColumn width={50}>备注</TableHeaderColumn>
                                <TableHeaderColumn width={70}>操作</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            { tasks.length ?
                                tasks.map(item => (<TableRow>
                                    <TableRowColumn width={60}>1</TableRowColumn>
                                    <TableRowColumn width={200}>1</TableRowColumn>
                                    <TableRowColumn width={50}>1</TableRowColumn>
                                    <TableRowColumn width={100}>1</TableRowColumn>
                                    <TableRowColumn width={70}><button>test</button></TableRowColumn>
                                </TableRow>))
                                : <TableRow> <TableRowColumn colSpan={100}>没有任务！</TableRowColumn> </TableRow>
                            }
                        </TableBody>
                    </Table>
                    <Table style={{ margin: '10px' }}>
                        <TableHeader displaySelectAll={false}
                                     adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn style={{textAlign: 'center', fontSize: 25}} colSpan={4} tooltip="该部分地址由蜜罐从流量中截取，自动进行布控，您可以控制删除">蜜罐截获列表</TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn width={60}>ID</TableHeaderColumn>
                                <TableHeaderColumn width={200}>地址</TableHeaderColumn>
                                <TableHeaderColumn width={50}>备注</TableHeaderColumn>
                                <TableHeaderColumn width={70}>操作</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            { tasks2.length ?
                                tasks2.map(item => (<TableRow>
                                    <TableRowColumn width={60}>1</TableRowColumn>
                                    <TableRowColumn width={200}>1</TableRowColumn>
                                    <TableRowColumn width={50}>1</TableRowColumn>
                                    <TableRowColumn width={100}>1</TableRowColumn>
                                    <TableRowColumn width={70}><button>test</button></TableRowColumn>
                                </TableRow>))
                                : <TableRow> <TableRowColumn colSpan={100}>没有任务！</TableRowColumn> </TableRow>
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default translate(BitCoin);