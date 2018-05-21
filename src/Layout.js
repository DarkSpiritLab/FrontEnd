import { connect } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Layout from './mui';

darkBaseTheme.palette.canvasColor = "#2e2e2e";
darkBaseTheme.palette.textColor = "#2E7D32";
darkBaseTheme.palette.secondaryTextColor = "#4CAF50";
darkBaseTheme.palette.alternateTextColor = "#4CAF50";
darkBaseTheme.palette.primary1Color = "#BA68C8";
darkBaseTheme.fontFamily = 'Roboto, sans-serif';
export default connect(state => (
    {
    theme: darkBaseTheme,
}))(Layout);