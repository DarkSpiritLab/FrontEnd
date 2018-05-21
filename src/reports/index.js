import React, {Component} from 'react';

import {
    AutocompleteInput,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    Filter,
    List,
    LongTextInput,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
} from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import {Card, CardHeader, CardText, CardActions, Avatar, Chip} from 'material-ui';
import PersonIcon from 'material-ui/svg-icons/communication/contacts';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Markdown from 'react-markdown';

const cardStyle = {
    minWidth: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top',
    flex: '1 0 auto',
    maxHeight: 500,
};

const PostPagination = ({ page, perPage, total, setPage }) => {
    const nbPages = Math.ceil(total / perPage) || 1;
    return (
        nbPages > 1 &&
        <Toolbar style={{ backgroundColor: 'none'}}>
            <ToolbarGroup>
                {page > 1 &&
                <FlatButton primary key="prev" label="Prev" icon={<ChevronLeft />} onClick={() => setPage(page - 1)} />
                }
                {page !== nbPages &&
                <FlatButton primary key="next" label="Next" icon={<ChevronRight />} onClick={() => setPage(page + 1)} labelPosition="before" />
                }
            </ToolbarGroup>
        </Toolbar>
    );
};

const Action = props => {
    return (
        <FlatButton icon={<Refresh />} onClick={props.refresh} style={{ marginRight: '20px', marginTop: '20px'}}> 刷新 </FlatButton>
    );
};

const Report = ({ ids, data, basePath }) => {
    return (
    <div style={{ margin: '1em', display: 'flex', flexWrap: 'wrap' }}>
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader
                    title={<TextField record={data[id]} source="title" />}
                    subtitle={<TextField record={data[id]} source="time" />}
                    avatar={<Avatar icon={<PersonIcon />} />}
                />
                <CardText style={{overflow : 'auto', maxHeight: 400}}>
                    {data[id].tags ? data[id].tags.split(' ').map(item => (<Chip style={{margin: 4, display: 'inline-block'}}>{item}</Chip>)) : ''}
                    <Markdown source={data[id].abstract} />
                </CardText>
                <CardText>
                    about&nbsp;
                    {/*<ReferenceField label="Post" resource="comments" record={data[id]} source="post_id" reference="posts" basePath={basePath}>*/}
                        {/*<TextField source="title" />*/}
                    {/*</ReferenceField>*/}
                </CardText>
                <CardActions style={{ textAlign: 'right' }}>
                    <FlatButton label="查看" resource="posts" basePath={basePath} record={data[id]} />
                </CardActions>
            </Card>
        )}
    </div>
)
};

export const ReportList = (props) => (
    <List {...props} perPage={25} sort={{ field: 'date', order: 'DESC' }} pagination={<PostPagination />} actions={<Action />}>
        <Report />
    </List>
);
