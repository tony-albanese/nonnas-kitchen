import React, { useState } from 'react'
import {
    Card,
    Row
} from "react-bootstrap";
import CardEdit from '../../components/CardEdit';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import ModalAlert from "../../components/ModalAlert";
import { axiosResponse } from '../../api/axiosDefaults';
import CommentEditForm from './CommentEditForm';

function Comment({ id, author, created_on, body, setPost, setComments }) {
    const [show, setShow] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === author;
    const [showCommentEditForm, setShowCommentEditForm] = useState(false);

    const showConfirmDeleteModal = (event) => {
        setShow(true);
    };

    const handleEdit = (event) => {
        console.log("Edit the comment.");
        setShowCommentEditForm(true);
    };

    const handleDelete = async () => {
        console.log("Delete the comment.");
        try {
            await axiosResponse.delete(`/comments/${id}/`);
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count - 1,
                    },
                ],
            }));

            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) {
            console.log(err);
        }
        setShow(false);
    };

    return (
        <>
            <Card style={{ width: "20rem" }}>
                <Card.Body>
                    {is_owner && (<CardEdit onDelete={showConfirmDeleteModal} onEdit={handleEdit} />)}
                    <Row>
                        <span>{author}</span>
                        <span>{created_on}</span>
                    </Row>
                    <Row>
                        {showCommentEditForm ?
                            (<CommentEditForm
                                id={id}
                                body={body}
                                setComments={setComments}
                                setShowCommentEditForm={setShowCommentEditForm}
                            />) : <p>{body}</p>}
                    </Row>
                </Card.Body>
            </Card>
    
            <ModalAlert
                show={show}
                handleClose={() => setShow(false)}
                onConfirm={handleDelete}
                title="Nonna Says..."
                message="Delete comment?"
            />
        </>
    )
}

export default Comment