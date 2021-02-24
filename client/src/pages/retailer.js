import { React } from "react"
import { Link } from "react-router-dom"
import { Header, Input, Menu, Segment } from "semantic-ui-react"
import { RetailerProducts } from "../Components/Product/Retailer_product"


function Retailer() {
    return (
        <div>
            <Segment inverted padded>
                <Menu inverted secondary stackable>
                    <Menu.Item>
                        <Header inverted>Retailer</Header>
                    </Menu.Item>
                    <Menu.Item as={Link} to='/' name='home' active />
                    <Menu.Item as = {Link} name='All Products' />
                    <Menu.Item position='right'>
                        <Input
                            action={{
                                type: "submit",
                                content: "Track Product",
                            }}
                            placeholder='Track Product by ID'
                        />
                    </Menu.Item>
                </Menu>
            </Segment>
            <RetailerProducts></RetailerProducts>
        </div>
    )
}
export { Retailer }
