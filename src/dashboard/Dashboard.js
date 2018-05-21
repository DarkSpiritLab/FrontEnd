import React, { Component } from 'react';
import withWidth from 'material-ui/utils/withWidth';
import { AppBarMobile, GET_LIST, GET_MANY, translate } from 'admin-on-rest';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {Tabs, Tab} from 'material-ui/Tabs';

import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import HomeIcon from 'material-ui/svg-icons/action/home';
import CodeIcon from 'material-ui/svg-icons/action/code';
import FlatButton from 'material-ui/FlatButton';

import ImageFlareIcon from 'material-ui/svg-icons/image/flare';
import SystemStatus from './SystemStatus';



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
        marginLeft: 0,
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
    }
};

class Dashboard extends Component {
    state = {};

    componentDidMount() {
        const d = new Date();
        d.setDate(d.getDate() - 30);
        // restClient(GET_LIST, 'commands', {
        //         filter: { date_gte: d.toISOString() },
        //         sort: { field: 'date', order: 'DESC' },
        //         pagination: { page: 1, perPage: 50 },
        //     })
        //     .then(response => response.data
        //         .filter(order => order.status !== 'cancelled')
        //         .reduce((stats, order) => {
        //             if (order.status !== 'cancelled') {
        //                 stats.revenue += order.total;
        //                 stats.nbNewOrders++;
        //             }
        //             if (order.status === 'ordered') {
        //                 stats.pendingOrders.push(order);
        //             }
        //             return stats;
        //         }, { revenue: 0, nbNewOrders: 0, pendingOrders: [] })
        //     )
        //     .then(({ revenue, nbNewOrders, pendingOrders }) => {
        //         this.setState({
        //             revenue: revenue.toLocaleString(undefined, {
        //                 style: 'currency',
        //                 currency: 'USD',
        //                 minimumFractionDigits: 0,
        //                 maximumFractionDigits: 0,
        //             }),
        //             nbNewOrders,
        //             pendingOrders,
        //         });
        //         return pendingOrders;
        //     })
        //     .then(pendingOrders => pendingOrders.map(order => order.customer_id))
        //     .then(customerIds => restClient(GET_MANY, 'customers', { ids: customerIds }))
        //     .then(response => response.data)
        //     .then(customers => customers.reduce((prev, customer) => {
        //         prev[customer.id] = customer; // eslint-disable-line no-param-reassign
        //         return prev;
        //     }, {}))
        //     .then(customers => this.setState({ pendingOrdersCustomers: customers }));
        //
        // restClient(GET_LIST, 'reviews', {
        //         filter: { status: 'pending' },
        //         sort: { field: 'date', order: 'DESC' },
        //         pagination: { page: 1, perPage: 100 },
        //     })
        //     .then(response => response.data)
        //     .then(reviews => {
        //         const nbPendingReviews = reviews.reduce(nb => ++nb, 0);
        //         const pendingReviews = reviews.slice(0, Math.min(10, reviews.length));
        //         this.setState({ pendingReviews, nbPendingReviews });
        //         return pendingReviews;
        //     })
        //     .then(reviews => reviews.map(review => review.customer_id))
        //     .then(customerIds => restClient(GET_MANY, 'customers', { ids: customerIds }))
        //     .then(response => response.data)
        //     .then(customers => customers.reduce((prev, customer) => {
        //         prev[customer.id] = customer; // eslint-disable-line no-param-reassign
        //         return prev;
        //     }, {}))
        //     .then(customers => this.setState({ pendingReviewsCustomers: customers }));
        //
        // restClient(GET_LIST, 'customers', {
        //         filter: { has_ordered: true, first_seen_gte: d.toISOString() },
        //         sort: { field: 'first_seen', order: 'DESC' },
        //         pagination: { page: 1, perPage: 100 },
        //     })
        //     .then(response => response.data)
        //     .then(newCustomers => {
        //         this.setState({ newCustomers });
        //         this.setState({ nbNewCustomers: newCustomers.reduce(nb => ++nb, 0) })
        //     })
    }

    render() {
        const { width } = this.props;
        return (
            <div>
                {width === 1 && <AppBarMobile title="Dark Genius" />}
                {/*<Welcome style={styles.welcome} />*/}
                {/*<div style={styles.flex}>*/}
                    {/*<div style={styles.leftCol}>*/}
                        {/*<div style={styles.flex}>*/}
                            {/*<MonthlyRevenue value={revenue} />*/}
                            {/*<NbNewOrders value={nbNewOrders} />*/}
                        {/*</div>*/}
                        {/*<div style={styles.singleCol}>*/}
                            {/*<PendingOrders orders={pendingOrders} customers={pendingOrdersCustomers} />*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div style={styles.rightCol}>*/}
                        {/*<div style={styles.flex}>*/}
                            {/*<PendingReviews nb={nbPendingReviews} reviews={pendingReviews} customers={pendingReviewsCustomers} />*/}
                            {/*<NewCustomers nb={nbNewCustomers} visitors={newCustomers} />*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div style={styles.flex}>
                    <div style={styles.leftCol}>
                        <div style={styles.flexVertical}>
                            <div style={styles.flexStart}>
                                <MasterSpiders />
                                <SlaveSpiders nodes={[[0,"192,168.1.1", "Running"],[1,"192,168.1.1", "Running"],[2,"192,168.1.1", "Running"],
                                    [3,"192,168.1.1", "Running"],[4,"192,168.1.1", "Running"],[5,"192,168.1.1", "Running"],[6,"192,168.1.1", "Running"]]} />
                            </div>
                            <div>
                                <SystemStatus />
                            </div>
                        </div>
                    </div>
                    <div style={styles.rightCol}>
                        <Welcome />
                        <OriginCard info={{critical: [], warning: [], normal: []}} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withWidth()(Dashboard);

const Welcome = translate(({translate}) => (
    <Card style={styles.welcome}>
        <CardHeader
            title={translate('pos.dashboard.welcome.title')}
            subtitle={translate('pos.dashboard.welcome.subtitle')}
            avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon />} />}
        />
        <CardActions style={{ textAlign: 'right' }}>
            <div>{translate('pos.dashboard.welcome.status', {time: '01天17分08秒'})}</div>
            <FlatButton label={translate('pos.dashboard.welcome.button1')} icon={<HomeIcon />} href="#" />
            <FlatButton label={translate('pos.dashboard.welcome.button2')} icon={<CodeIcon />} href="#" />
        </CardActions>
    </Card>
));

export const MasterSpiders = translate(({translate}) => (
    <Card style={styles.masterSpider}>
        <CardHeader
            title={translate('pos.dashboard.spiders.title')}
            subtitle={translate('pos.dashboard.spiders.subtitle')}
            avatar={<Avatar backgroundColor="#039BE5" icon={<SpiderIcon />} />}
        />
        <CardActions style={{ textAlign: 'right', fontSize: '13px' }}>
            <div>Queuing tasks: 5000
                <br/>Nodes queuing :5673
                <br/>Slave spiders connecting: 800
                <br/>Slave spiders idle: 89
            </div>
        </CardActions>
    </Card>
));

export const SlaveSpiders = translate(({translate, nodes}) => (
    <Card style={{ ...styles.slaveSpider }}>
        <CardHeader
            title={translate('pos.dashboard.slaveSpiders.title')}
            subtitle={translate('pos.dashboard.slaveSpiders.subtitle', nodes.length)}
            avatar={<Avatar backgroundColor="#8BC34A" icon={<SlaveSpiderIcon />} />}
        />
        <CardActions style={{ textAlign: 'right', fontSize: '13px' }}>
            <Table
                selectable={false}
                height={250}
            >
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>IP</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        nodes.map(item=>(
                            <TableRow key={item[0]}>
                                <TableRowColumn style={styles.textAlignR}>{item[0] + 1}</TableRowColumn>
                                <TableRowColumn style={styles.textAlignC}>{item[1]}</TableRowColumn>
                                <TableRowColumn style={styles.textAlignC}>{item[2]}</TableRowColumn>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </CardActions>
    </Card>
));

export const OriginCard = translate(({translate, info}) => (
    <Card style={styles.originCard}>
        <CardHeader
            title={translate('pos.dashboard.origin.title')}
            subtitle={translate('pos.dashboard.origin.subtitle')}
            avatar={<Avatar backgroundColor="#AB47BC" icon={<ImageFlareIcon />} />}
        />
        <CardActions style={{ textAlign: 'right' }}>
            <Tabs>
                <Tab label={translate('pos.dashboard.origin.tabs.critical')} >
                    <div>
                        <Table
                            selectable={false}
                            height={250}
                        >
                            <TableHeader displaySelectAll={false}>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Origin</TableHeaderColumn>
                                    <TableHeaderColumn>Details</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {
                                    info['critical'].map(item=>(
                                        <TableRow key={item[0]}>
                                            <TableRowColumn style={styles.textAlignR}>{item[0] + 1}</TableRowColumn>
                                            <TableRowColumn style={styles.textAlignC}>{item[1]}</TableRowColumn>
                                            <TableRowColumn style={styles.textAlignC}>{item[2]}</TableRowColumn>
                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>
                    </div>
                </Tab>
                <Tab label={translate('pos.dashboard.origin.tabs.warning')} >
                    <Table
                        selectable={false}
                        height={250}
                    >
                        <TableHeader displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Origin</TableHeaderColumn>
                                <TableHeaderColumn>Details</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {
                                info['warning'].map(item=>(
                                    <TableRow key={item[0]}>
                                        <TableRowColumn style={styles.textAlignR}>{item[0] + 1}</TableRowColumn>
                                        <TableRowColumn style={styles.textAlignC}>{item[1]}</TableRowColumn>
                                        <TableRowColumn style={styles.textAlignC}>{item[2]}</TableRowColumn>
                                    </TableRow>
                                ))
                            }

                        </TableBody>
                    </Table>
                </Tab>
                <Tab
                    label={translate('pos.dashboard.origin.tabs.normal')}
                    // onActive={handleActive}
                >
                    <Table
                        selectable={false}
                        height={250}
                    >
                        <TableHeader displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Origin</TableHeaderColumn>
                                <TableHeaderColumn>Details</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {
                                info['normal'].map(item=>(
                                    <TableRow key={item[0]}>
                                        <TableRowColumn style={styles.textAlignR}>{item[0] + 1}</TableRowColumn>
                                        <TableRowColumn style={styles.textAlignC}>{item[1]}</TableRowColumn>
                                        <TableRowColumn style={styles.textAlignC}>{item[2]}</TableRowColumn>
                                    </TableRow>
                                ))
                            }

                        </TableBody>
                    </Table>
                </Tab>
            </Tabs>
        </CardActions>
    </Card>
));

export const SpiderIcon = (props) => (
    <svg version="1.1" id="spider" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 100 100" style={{enableBackground: 'new 0 0 100 100',height: '80%', fill: "#444446"}} xmlSpace="preserve" >
<g>
    <path xmlns="http://www.w3.org/2000/svg" d="M97.635,56.061c-9.252-6.534-19.894-9.792-28.337-11.415c6.792-3.236,14.602-8.856,21.461-18.627  c1.036-1.477,0.68-3.514-0.797-4.55c-1.478-1.037-3.515-0.68-4.551,0.796c-6.633,9.449-14.177,14.48-20.394,17.165  c3.778-4.709,7.831-12.14,11.353-23.886c0.519-1.728-0.463-3.549-2.19-4.067c-1.731-0.517-3.55,0.462-4.067,2.191  c-5.449,18.175-11.796,24.271-15.279,26.31c-0.507-1.304-1.309-2.367-2.288-3.037c0.11-0.384,0.178-0.797,0.178-1.233  c0-1.611-0.828-2.953-1.944-3.335l-0.36,3.807c-0.094-0.007-0.187-0.019-0.282-0.019s-0.188,0.012-0.283,0.019l-0.36-3.807  c-1.116,0.383-1.944,1.724-1.944,3.335c0,0.436,0.067,0.849,0.177,1.233c-0.979,0.67-1.781,1.733-2.288,3.037  c-3.483-2.039-9.829-8.134-15.279-26.31c-0.519-1.729-2.344-2.708-4.067-2.191c-1.729,0.518-2.709,2.339-2.191,4.067  c3.503,11.684,7.532,19.099,11.293,23.813c-6.224-2.7-13.759-7.723-20.336-17.091c-1.037-1.477-3.075-1.833-4.55-0.796  c-1.477,1.036-1.833,3.074-0.796,4.55c6.862,9.774,14.674,15.396,21.468,18.63c-8.442,1.621-19.084,4.874-28.342,11.412  c-1.474,1.04-1.825,3.079-0.784,4.553c0.637,0.9,1.646,1.382,2.671,1.382c0.651,0,1.309-0.194,1.881-0.599  c9.217-6.509,20.247-9.434,28.335-10.75c-6.757,5.944-14.83,17.129-21.636,38.173c-0.555,1.716,0.386,3.558,2.103,4.113  c0.334,0.107,0.673,0.159,1.006,0.159c1.379,0,2.66-0.88,3.107-2.263c6.005-18.563,12.795-28.591,18.342-34.011  c-0.487,1.842-0.765,3.813-0.765,5.878c0,9.765,5.927,17.682,13.239,17.682c7.311,0,13.238-7.917,13.238-17.682  c0-2.064-0.278-4.038-0.766-5.88c5.546,5.42,12.337,15.45,18.341,34.013c0.447,1.383,1.729,2.263,3.107,2.263  c0.333,0,0.672-0.052,1.006-0.159c1.717-0.556,2.658-2.397,2.104-4.113c-6.814-21.067-14.905-32.254-21.671-38.193  c8.08,1.309,19.115,4.233,28.37,10.769c0.573,0.404,1.23,0.599,1.882,0.599c1.025,0,2.035-0.481,2.671-1.382  C99.459,59.14,99.108,57.101,97.635,56.061z"/>
</g>
</svg>

);

export const SlaveSpiderIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="slavespider" x="0px" y="0px" viewBox="0 0 242.001 242.001" style={{enableBackground: 'new 0 0 242.001 242.001',height: '100%', fill: "#444446"}} xmlSpace="preserve">
<g>
	<path d="M196.932,67.262c-0.294-0.023-0.591-0.042-0.887-0.062c-0.32-0.368-0.895-0.531-1.396-0.126   c-0.01,0.008-0.021,0.017-0.032,0.026c-0.261-0.018-0.523-0.035-0.783-0.055c0.17-0.308,0.144-0.716-0.26-0.963   c-11.694-7.153-21.644-13.989-27.589-26.828c-5.413-11.69-8.384-24.304-11.178-36.812c0.136-0.198,0.271-0.398,0.407-0.596   c0.933-1.356-1.261-2.608-2.196-1.283c-0.043,0.061-0.087,0.122-0.13,0.183c-0.187-0.018-0.382-0.004-0.587,0.091   C123.457,14.285,90.83,11.464,61.594,22.985c-0.207-0.157-0.407-0.326-0.614-0.482c-0.274-0.207-0.543-0.116-0.749,0.064   c-0.837-0.298-1.938,0.287-1.554,1.344c8.813,24.266,1.445,47.155-5.403,70.796c-2.972,1.544-5.93,3.112-8.852,4.748   c-1.266,0.709-0.402,2.974,1.016,2.41c3.207-1.274,6.465-2.661,9.738-4.103c22.465,6.924,43.301,18.359,65.289,26.622   c1.551,5.69,3.194,11.336,5.022,16.861c0.175,0.528,0.601,0.688,1.014,0.666c0.468,15.743,1.558,31.542,2.272,47.285   c-4.213-0.078-8.095,1.642-10.931,4.634c-0.665,0.505-1.246,1.096-1.834,1.678c-4.861-6.143-3.85-13.888-0.111-20.8   c0.773-1.429-1.27-2.598-2.163-1.264c-4.992,7.454-5.846,17.524,0.569,24.025c-1.761,2.308-3.045,4.967-3.579,7.882   c-9.483-1.361-13.512-10.909-14.595-20.174c-0.166-1.423-2.11-1.458-2.242,0c-0.929,10.263,5.961,22.246,16.551,22.831   c-0.055,1.639,0.075,3.317,0.485,5.019c-5.757-0.404-11.821,2.122-14.759,7.172c-0.631,1.085,0.792,2.097,1.686,1.301   c4.564-4.057,8.795-5.919,14.021-5.666c0.812,1.949,1.843,3.734,3.157,5.232c-7.335,2.115-12.635,12.97-8.901,19.655   c0.694,1.244,2.816,0.41,2.341-0.987c-2.152-6.332,2.281-15.051,8.871-16.417c1.664,1.338,3.534,2.379,5.521,3.083   c-1.47,1.656-2.149,3.804-0.902,5.899c0.62,1.041,2.16,0.339,1.911-0.806c-0.358-1.644,0.466-3.288,1.765-4.325   c1.783,0.337,3.617,0.388,5.447,0.183c0.507,0.694,0.746,1.577,0.878,2.516c0.192,1.366-0.363,2.487-0.27,3.786   c0.059,0.828,0.824,1.231,1.559,0.895c2.2-1.007,1.624-4.519,1.119-6.421c-0.123-0.465-0.317-0.881-0.515-1.292   c2.255-0.619,4.453-1.677,6.475-3.249c0.211-0.164,0.386-0.353,0.587-0.524c8.38,1.88,13.663,8.452,12.752,17.811   c-0.127,1.306,1.975,1.563,2.276,0.308c2.171-9.077-4.245-18.572-13.08-20.082c1.88-2.237,3.027-4.864,3.599-7.622   c4.05,0.038,7.852,1.158,9.954,5.32c0.503,0.996,2.218,0.301,1.825-0.769c-1.878-5.115-6.609-6.787-11.495-6.735   c0.196-2.19-0.008-4.418-0.506-6.587c10.256,0.21,19.62-7.748,19.475-18.621c-0.018-1.311-2.195-1.724-2.387-0.323   c-1.341,9.795-8.19,16.494-17.773,16.583c-0.992-2.813-2.558-5.43-4.647-7.587c5.646-4.35,11.231-13.622,4.539-18.545   c-0.871-0.641-1.731,0.692-1.096,1.42c4.431,5.078-0.534,11.888-4.868,15.863c-0.352-0.296-0.67-0.625-1.046-0.896   c-2.533-1.824-5.133-2.833-7.665-3.221c0.625-16.095,0.11-33.066-2.558-48.904c-0.031-0.185-0.148-0.285-0.258-0.388   c0.094-0.096,0.189-0.19,0.25-0.341c12.471-31.001,43.78-46.916,66.389-69.9c0.776,0.003,1.562,0.032,2.337,0.033   C198.636,69.881,198.593,67.39,196.932,67.262z M150.595,3.966c-3.971,5.596-7.965,11.188-11.965,16.794   c-0.278-0.136-0.614-0.159-0.977,0.049c-17.498,10.059-35.664,14.23-54.924,19.268c-6.638-5.64-13.368-11.146-20.241-16.391   C91.749,16.878,122.932,16.16,150.595,3.966z M149.617,64.375c-7.348-0.319-14.696-0.594-22.027-0.762   c-3.657-3.236-6.071-7.189-6.915-11.97c6.13-8.389,12.075-16.941,17.958-25.526C137.042,38.784,139.881,55.887,149.617,64.375z    M82.88,44.646c5.051,4.257,10.174,8.435,15.35,12.49c0.304,2.262,0.868,4.348,0.556,6.76c-0.369,2.851-1.225,5.796-3.965,7.206   c-0.35,0.18-0.405,0.549-0.323,0.882c-5.049,3.025-10.073,6.098-15.168,9.014C83.176,69.248,86.355,56.774,82.88,44.646z    M100.833,59.158c2.294,1.783,4.589,3.59,6.878,5.341c-2.898,1.496-5.745,3.098-8.573,4.739c0.608-1.055,1.066-2.227,1.356-3.512   C100.919,63.838,101.247,61.335,100.833,59.158z M100.996,55.897c5.613,0.204,11.146-1.137,16.027-3.868   c-2.42,3.672-4.858,7.336-7.175,11.06c-0.192-0.015-0.351,0.015-0.525,0.087C106.551,60.766,103.774,58.329,100.996,55.897z    M118.961,53.944c0.955,3.634,2.739,6.897,5.329,9.612c-4.114-0.08-8.237-0.192-12.334-0.213   C114.344,60.258,116.64,57.089,118.961,53.944z M118.736,48.457c-5.957,3.322-11.722,5.197-18.523,5.761   c-0.331,0.027-0.527,0.204-0.657,0.419c-5.193-4.549-10.418-9.091-15.683-13.581c17.92-2.76,36.615-7.099,52.19-16.703   c-5.642,7.933-11.24,15.909-16.647,23.986C119.197,48.31,118.967,48.328,118.736,48.457z M108.969,65.637   c1.104,8.768,2.484,17.625,4.122,26.464c-0.148-0.054-0.239-0.106-0.42-0.161c-4.996-1.499-9.404-4.506-14.718-5.784   c-5.038-1.212-10.188-1.853-15.343-2.352C92.037,78.3,101.058,72.231,108.969,65.637z M111.039,65.159   c4.833,0.577,9.724,1.016,14.605,1.477c-2.88,4.018-5.246,8.298-7.146,12.91c-1.031,2.501-1.598,5.524-2.499,8.226   C114.336,80.234,112.655,72.699,111.039,65.159z M55.151,93.745c8.33-21.975,14.5-45.881,6.432-68.678   c5.981,6.095,12.331,11.939,18.907,17.569c-0.021,0.131-0.092,0.236-0.048,0.395c3.699,13.433,0.768,25.797-2.689,38.889   c-0.029,0.016-0.056,0.033-0.084,0.049C70.28,86.122,62.68,89.869,55.151,93.745z M58.649,96.189   c6.736-3.075,13.516-6.444,20.137-10.152c10.165,0.724,28.893,0.913,34.971,10.24c0.038,0.058,0.105,0.081,0.154,0.129   c1.659,8.474,3.602,16.9,5.797,25.211C100.403,111.899,79.501,101.961,58.649,96.189z M116.808,91.459   c2.518-8.746,6.411-16.657,10.993-24.606c8.179,0.744,16.41,1.291,24.647,1.751c-13.43,14.198-23.977,32.492-29.409,51.293   C120.986,110.416,118.904,100.936,116.808,91.459z M150.261,104.215c-10.241,9.004-19.779,19.488-23.58,32.792   c-0.936-4.445-1.882-8.889-2.838-13.333c8.504-20.37,18.226-37.413,31.587-54.909c12.003,0.622,23.993,0.94,35.89,1.036   C177.487,81.024,163.613,92.476,150.261,104.215z M153.36,64.551c-11.817-9.16-13.821-27.249-12.788-41.274   c4.34-6.351,8.66-12.701,12.995-19.02c1.736,13.083,5.307,26.299,11.068,38.164c5.868,12.086,15.547,18.701,27.289,24.491   C179.137,65.965,166.261,65.152,153.36,64.551z"/>
</g></svg>
);