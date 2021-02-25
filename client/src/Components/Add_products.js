import {React } from  'react'
import {
    Button,
    Container,
    Form,
    Header,
    Icon,
    Segment,
} from "semantic-ui-react"

function AddProduct() {
    return (
        <div>
            <Container>
                <Segment padded size='huge'>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='add' />
                        Add Product
                        <Header.Subheader>
                            To add the product to the blockchain, add the
                            details of the products.
                        </Header.Subheader>
                    </Header>
                    <Form>
                        <Form.Field>
                            <label>Product Name</label>
                            <input placeholder='Enter Name of the product' />
                        </Form.Field>
                        <Form.Field>
                            <label>Batch </label>
                            <input placeholder='Enter Batch number of prouct' />
                        </Form.Field>
                        <Form.Field>
                            <label>Location</label>
                            <input value = "26.9154576, 75.8189817" />
                        </Form.Field>
                        <Form.TextArea
                            label='Description'
                            placeholder='Other product description...'
                        />

                        <Button type='submit' primary>
                            Add to Blockchain
                        </Button>
                    </Form>
                </Segment>
            </Container>
        </div>
    )
}

export {AddProduct}