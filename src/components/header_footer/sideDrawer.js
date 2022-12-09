import React from "react";

import { Drawer, List, ListItem } from "@material-ui/core";

const SideDrawer = (props) => {

    const links = [
        { where: 'featured', value: 'To top' },
        { where: 'venueinfo', value: 'Venue Info' },
        { where: 'highlight', value: 'Highlights' },
        { where: 'pricing', value: 'Pricing' },
        { where: 'location', value: 'Location' }
    ]

    const renderItem = (item) => (
        <ListItem button onClick={() => alert(item.where)} key={item.where}>
            {item.value}
        </ListItem>
    )

    return (
        <>
            <Drawer
                anchor={"right"}
                open={props.open}
                onClose={() => props.onClose(false)}
            >
                <List component="nav">

                    {links.map((item) => renderItem(item))}

                </List>


            </Drawer>
        </>
    )
}

export default SideDrawer;