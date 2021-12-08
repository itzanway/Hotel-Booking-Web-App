import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { getDate, getEasyDate } from '../../utils/utilFunctions';
import { ActionsContainer, Button, Item, Text } from '../../components/GlobalStyles/TableStyles';

const ListItem = (props) => {
    let keys = Object.keys(props.data)
    console.log(keys)
    keys = keys.filter(k => k!=='id' && k!=='bookedBy')
    return (
        <Item style={{ gridTemplateColumns: `repeat(${keys.length}, 1fr)` }}>
            <Text><Tippy interactive={true} content={props.data.hotel.name} placement="bottom"><p>{props.data.hotel.name}</p></Tippy></Text>
            <Tippy interactive={true} content={props.data.room.name} placement="bottom"><Text>{props.data.room.name}</Text></Tippy>
            <Tippy interactive={true} content={getEasyDate(props.data.from)} placement="bottom"><Text>{getDate(props.data.from)}</Text></Tippy>
            <Tippy interactive={true} content={getEasyDate(props.data.to)} placement="bottom"><Text>{getDate(props.data.to)}</Text></Tippy>
            <Tippy interactive={true} content={getEasyDate(props.data.bookedOn)} placement="bottom"><Text>{getDate(props.data.bookedOn)}</Text></Tippy>
            <Tippy interactive={true} content={props.data.amount} placement="bottom"><Text>Rs. {props.data.amount}</Text></Tippy>
            <Tippy interactive={true} content={props.data.paid ? 'Paid' : 'Not Paid'} placement="bottom">
                <Text>{props.data.paid ? 'Paid' : 'Not Paid'}</Text>
            </Tippy>
            <ActionsContainer>
                <Button>
                    <img alt="" width="20px" src="https://img.icons8.com/plumpy/24/000000/edit--v1.png" /></Button>
                <Button><img alt="" width="20px" src="https://img.icons8.com/color/48/000000/connection-status-off--v1.png"/></Button>
                <Button><img alt="" width="20px" src="https://img.icons8.com/flat-round/48/000000/delete-sign.png" /></Button>
            </ActionsContainer>
        </Item>
    )
}

export default ListItem
