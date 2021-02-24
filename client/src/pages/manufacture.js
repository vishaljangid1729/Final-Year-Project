import { React, useState } from "react"
import { Link } from "react-router-dom"
import { Header, Input, Menu, Segment } from "semantic-ui-react"
import { AddProduct } from "../Components/Add_products"
import { AllProduct } from "../Components/All_products"
import { ManufactureProduct } from "../Components/Product/Manufacture_product"

function Manufacture() {
    const [display, changeDisplay] = useState("add_product")

    return (
        <>
            <div>
                <Segment inverted padded>
                    <Menu inverted secondary stackable>
                        <Menu.Item>
                            <Header inverted>Manufacture</Header>
                        </Menu.Item>
                        <Menu.Item as = {Link} to='/' name='home' />
                        <Menu.Item
                            name='Add Product'
                            onClick={() => changeDisplay("add_product")}
                        />
                        <Menu.Item
                            as={Link}
                            name='All Product'
                            onClick={() => changeDisplay("all_product")}
                        />
                        
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
            </div>
            <br></br>

            {display == "add_product" ? <AddProduct></AddProduct> : <div></div>}
            {display == "all_product" ? <ManufactureProduct></ManufactureProduct> : <div></div>}
            
        </>
    )
}
export { Manufacture }
