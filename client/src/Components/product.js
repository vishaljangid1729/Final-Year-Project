import { React } from "react"
import { Card, Button, Icon } from "semantic-ui-react"

function Product() {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Product Name</Card.Header>
                <Card.Meta>ID: 345454</Card.Meta>
                <Card.Description>
                    A product description is the marketing copy used to describe
                    a product's value proposition to potential customers. A
                    compelling product description
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div>
                    <Button negative>Remove</Button>
                    <Button primary>Sell</Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export { Product }
