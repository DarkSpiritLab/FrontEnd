import React from 'react';
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui';
import { translate } from 'admin-on-rest';

const SiteList = translate(({translate, styles, selectHandle, state}) => (
    <div style={{width: '500px'}}>
        <div style={styles.title}>{translate('resources.monitor.title')}监听网址列表</div>
        <div style={styles.flex}>
            <Table onRowSelection={selectHandle}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Host</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        state.config.site_list.map((item) => (
                            <TableRow selected={item[0]}>
                                <TableRowColumn>{item[1]}</TableRowColumn>
                                <TableRowColumn>{item[2]}</TableRowColumn>
                                <TableRowColumn>{item[3]}</TableRowColumn>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    </div>
));

export default SiteList;