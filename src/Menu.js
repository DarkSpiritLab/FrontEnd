import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import LabelIcon from 'material-ui/svg-icons/action/label';
import { translate, DashboardMenuItem, MenuItemLink } from 'admin-on-rest';

import  MapsDirections from 'material-ui/svg-icons/maps/directions';
import ImageFlareIcon from 'material-ui/svg-icons/image/flare';
import ImageRemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Analyse from 'material-ui/svg-icons/action/aspect-ratio';
import Assessment from 'material-ui/svg-icons/action/assessment';

const items = [
    // { name: 'customers', icon: <VisitorIcon /> },
    // { name: 'segments', icon: <LabelIcon /> },
    // { name: 'commands', icon: <CommandIcon /> },
    // { name: 'products', icon: <ProductIcon /> },
    // { name: 'categories', icon: <CategoryIcon /> },
    // { name: 'reviews', icon: <ReviewIcon /> },
    { name: 'status', icon: <Assessment />},
    { name: 'monitor', icon: <ImageRemoveRedEye />},
    { name: 'relays', icon: <MapsDirections />},
    { name: 'analyse', icon: <ImageFlareIcon />},
    { name: 'report', icon: <Analyse />},

];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        <DashboardMenuItem onClick={onMenuTap} />
        {items.map(item => (
            <MenuItemLink
                key={item.name}
                to={`/${item.name}`}
                primaryText={translate(`resources.${item.name}.name`, { smart_count: 2 })}
                leftIcon={item.icon}
                onClick={onMenuTap}
            />
        ))}
        <MenuItemLink
            to="/configuration"
            primaryText={translate('pos.configuration')}
            leftIcon={<SettingsIcon />}
            onClick={onMenuTap}
        />
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);
