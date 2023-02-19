import React from 'react'
import {
    Card,
    Row
} from "react-bootstrap";

function Comment({author, created_on, body}) {
    return (
        <Card style={{ width: "20rem" }}>
            <Card.Body>
                <Row>
                    <span>{author}</span>
                    <span>{created_on}</span>
                    <span>...Icons if Owner</span>
                </Row>
                <Row>
                    <p>{body}</p>
                </Row>
            </Card.Body>

        </Card>
    )
}

export default Comment