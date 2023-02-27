import React, { useState } from 'react'
import {
    Card,
    Row, Media, Badge
} from "react-bootstrap";
import CardEdit from '../../components/CardEdit';
import ModalAlert from "../../components/ModalAlert";
import CommentEditForm from './CommentEditForm';
import { axiosResponse } from '../../api/axiosDefaults';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Comment.module.css";


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
            <Card className={styles.Comment}>
                <Media
                    className={`align-items-center justify-content-between p-2 mt-3`}>
                    <Badge pill className={styles.Badge}>
                        {author}
                    </Badge>
                    <span className={styles.Date}>{created_on}</span>
                </Media>
                <Card.Body>
                    <Row>
                        {showCommentEditForm ?
                            (<CommentEditForm
                                id={id}
                                body={body}
                                setComments={setComments}
                                setShowCommentEditForm={setShowCommentEditForm}
                            />) : <p className={styles.Body}>{body}</p>}
                    </Row>
                    <Row>
                    {is_owner && (<CardEdit onDelete={showConfirmDeleteModal} onEdit={handleEdit}  showEdit={true}/>)}
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