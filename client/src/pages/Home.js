import React from "react"
import { Link } from "react-router-dom"
import { Button, Card, Segment } from "semantic-ui-react"

const Home = () => (
    <Segment padded='very' size='large'>
        <Card.Group centered>
            <Card>
                <Card.Content>
                    <Card.Header>Manufacture</Card.Header>
                    <Card.Description>
                        A person or company that makes something
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button.Group>
                            <Button secondary>Sign up</Button>
                            <Button.Or />
                            <Button as={Link} to='/manufacture' primary>
                                Login{" "}
                            </Button>
                        </Button.Group>
                    </div>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header>Distributor</Card.Header>
                    <Card.Description>
                        An agent who supplies goods to retailers
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button.Group>
                            <Button secondary>Sign up</Button>
                            <Button.Or />
                            <Button as = {Link} to = "/distributor" primary>Login </Button>
                        </Button.Group>
                    </div>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header>Retailer</Card.Header>
                    <Card.Description>
                        A person or business that sells goods to the public in
                        relatively small quantities for use or consumption
                        rather than for resale.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button.Group>
                            <Button secondary>Sign up</Button>
                            <Button.Or />
                            <Button as = {Link} to = "/retailer" primary>Login </Button>
                        </Button.Group>
                    </div>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header>Consumer</Card.Header>
                    <Card.Description>
                        A person who purchases goods and services for personal
                        use.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button.Group>
                            <Button secondary>Sign up</Button>
                            <Button.Or />
                            <Button as = {Link} to = "/consumer" primary>Login </Button>
                        </Button.Group>
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
    </Segment>
)

export default Home
