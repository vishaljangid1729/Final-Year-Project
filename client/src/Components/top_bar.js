import React from "react"
import { Link } from "react-router-dom"
import { Header, Input, Menu, Segment } from "semantic-ui-react"


const TopBar = () => (
    <Segment inverted padded>
        <Menu inverted secondary stackable>
            <Menu.Item >
                <Header inverted >Manufacture</Header>

            </Menu.Item>
            <Menu.Item as={Link} to='/' name='home' active />
            <Menu.Item name='Add Product' />
            <Menu.Item name='Sell to Distributor' />
            <Menu.Item position='right'>
                <Input
                    action={{ type: "submit", content: "Track Product" }}
                    placeholder='Track Product by ID'
                />
            </Menu.Item>
        </Menu>
    </Segment>
)

export default TopBar
