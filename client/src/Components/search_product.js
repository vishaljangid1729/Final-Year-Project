import { React } from "react"
import { Input } from "semantic-ui-react"

function ProductSearch() {
    return (
        <Input
        action={{ type: "submit", content: "Track Product" }}
        placeholder='Track Product by ID'
    />
    )
}

export {ProductSearch}
