import { React } from "react"
import { Link } from "react-router-dom"
import { Header, Input, Menu, Segment } from "semantic-ui-react"


function Consumer() {
    return (
        <div>
            <Segment inverted padded>
                <Menu inverted secondary stackable>
                    <Menu.Item>
                        <Header inverted>Consumer</Header>
                    </Menu.Item>
                    <Menu.Item as={Link} to='/' name='home' active />
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
    )
}
export { Consumer }
