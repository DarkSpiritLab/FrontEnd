import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';

import authClient from './authClient';
import sagas from './sagas';
import themeReducer from './themeReducer';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import translations from './i18n';

import RelayMap from './relays';
import Monitor from './monitor';
import Analyse from './analyse';
import Status from './status/index';

import restClient from './restClient';
import {ReportList} from "./reports/index";

class App extends Component {
    componentWillMount() {
        // this.restoreFetch = fakeRestServer();
    }

    componentWillUnmount() {
        this.restoreFetch();
    }

    render() {
        return (
            <Admin
                title="Dark Genius"
                restClient={restClient}
                customReducers={{ theme: themeReducer }}
                customSagas={sagas}
                customRoutes={customRoutes}
                authClient={authClient}
                dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
                messages={translations}
                locale="cn"
            >
                {/*<Resource name="customers" list={VisitorList} edit={VisitorEdit} remove={VisitorDelete} icon={VisitorIcon} />*/}
                {/*<Resource name="commands" list={CommandList} edit={CommandEdit} remove={Delete} icon={CommandIcon} options={{ label: 'Orders' }}/>*/}
                {/*<Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} remove={Delete} icon={ProductIcon} />*/}
                <Resource name="relays" list={RelayMap} />
                <Resource name="monitor" list={Monitor} />
                <Resource name="analyse" list={Analyse} />
                <Resource name="report" list={ReportList} />
                <Resource name="status" list={Status} />
            </Admin>
        );
    }
}

export default App;
