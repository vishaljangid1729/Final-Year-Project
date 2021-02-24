import { React } from "react"
import { Link } from "react-router-dom"
import { Header, Input, Menu, Segment } from "semantic-ui-react"
import { DistributorProduct } from "../Components/Product/Distributor_product"


function Distributor() {
    return (
        <div>
            <Segment inverted padded>
                <Menu inverted secondary stackable>
                    <Menu.Item>
                        <Header inverted>Distributor</Header>
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

            <DistributorProduct></DistributorProduct>
        </div>
    )
}
export { Distributor }
