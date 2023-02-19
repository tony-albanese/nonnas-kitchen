import React, { useState } from 'react'
import {
    Card,
    Row
} from "react-bootstrap";
import CardEdit from '../../components/CardEdit';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import ModalAlert from "../../components/ModalAlert";

function Comment({author, created_on, body}) {
    const [show, setShow] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === author;

    const showConfirmDeleteModal = (event) => {
        setShow(true);
      };

    const handleEdit = (event) => {
        console.log("Edit the comment.");
    };

    const handleDelete = () => {
        console.log("Delete the comment.")
    };

    return (
        <>
        <Card style={{ width: "20rem" }}>
            <Card.Body>
                {is_owner && (<CardEdit onDelete={showConfirmDeleteModal} onEdit={handleEdit}/>)}
                <Row>
                    <span>{author}</span>
                    <span>{created_on}</span>
                </Row>
                <Row>
                    <p>{body}</p>
                </Row>
            </Card.Body>

        </Card>
        <ModalAlert
        show={show}
        handleClose={() => setShow(false)}
        onConfirm={handleDelete}
      />
      </>
    )
}

export default Comment