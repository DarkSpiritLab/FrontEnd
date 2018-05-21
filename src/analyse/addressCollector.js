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
class AddressCollector extends Component{
    constructor(props){
        super(props);
    }
    translate = this.props.translate;
    handleSubmit() {
        console.log('submit', this.state.target);
        let {tasks} = this.state;
        tasks.push('1');
        this.setState({tasks});
    }
    componentWillMount(){
        this.setState({ target : '', pri: 1, tasks: []});
    }
    render(){
        const {tasks, pri} = this.state;
        return (
            <div style={styles.layout}>
                <div style={styles.submit}>
                    新任务：
                    <TextField floatingLabelText={'关键词'} onChange={(t) => this.setState({target: t.target.value})}/>
                    <SelectField style={styles.select} floatingLabelText={"优先级"} value={pri} onChange={(event, index, value) => this.setState({pri: value})}>
                        <MenuItem value={1} primaryText={"最高"} key={1} />
                        <MenuItem value={2} primaryText={"一般"} key={2} />
                        <MenuItem value={3} primaryText={"最低"} key={3} />

                    </SelectField>
                    <RaisedButton style={{marginLeft: 5}} label={'发起'} onClick={this.handleSubmit.bind(this)} />
                </div>
                <Divider style={{marginTop: 10, marginBottom: 10}}/>
                <div>

                    <Table style={{ margin: 'auto' }} border={1}>
                        <TableHeader displaySelectAll={false}
                                     adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn style={{textAlign: 'center', fontSize: 25}} colSpan={5}>全部任务列表 </TableHeaderColumn> </TableRow>
                            <TableRow>
                                <TableHeaderColumn width={100}>ID</TableHeaderColumn>
                                <TableHeaderColumn width={200}>关键词</TableHeaderColumn>
                                <TableHeaderColumn width={50}>优先级</TableHeaderColumn>
                                <TableHeaderColumn width={100}>状态</TableHeaderColumn>
                                <TableHeaderColumn width={70}>操作</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            { tasks.length ?
                                tasks.map(item => (<TableRow>
                                    <TableRowColumn width={100}>1</TableRowColumn>
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

export default translate(AddressCollector);