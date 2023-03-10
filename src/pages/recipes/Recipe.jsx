import React, { useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Badge, Card, Media, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardEdit from "../../components/CardEdit";
import ModalAlert from "../../components/ModalAlert";
import ListDisplay from "../../components/ListDisplay";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosResponse } from "../../api/axiosDefaults";
import styles from "../../styles/Recipe.module.css";


const Recipe = (props) => {
  const {
    id,
    author,
    title,
    description,
    dish_type_name,
    difficulty,
    recipe_image,
    recipePage,
    ingredientsList,
    steps
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === author;
  const history = useHistory();


  const difficultyOptions = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
  };

  const showConfirmDeleteModal = (event) => {
    setShow(true);
  };

  const handleEdit = (event) => {
    history.push(`/recipes/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosResponse.delete(`/recipes/${id}`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
    setShow(false);
  };

  const [show, setShow] = useState(false);

  const details = recipePage ? (
    <Row>
      <Col md={6}>
        <ListDisplay ordered={false} list={ingredientsList} heading="Ingredients" />
      </Col>

      <Col md={6}>
        <ListDisplay ordered={true} list={steps} heading="Preparation" />
      </Col>

    </Row>
  ) : (
    <></>
  );

  return (
    <>
      <Card className={`my-4 mx-auto ${styles.Card}`}>
        <Card.Header className={styles.CardHeader}>
          {dish_type_name}
        </Card.Header>
        <Media
          className={`align-items-center justify-content-between p-2 ${styles.PostInfo}`}
        >
          <Badge pill className={`${styles.Badge}`}>
            {author}
          </Badge>

          <Badge pill className={`${styles.Badge}`}>
              {difficultyOptions[difficulty]}
            </Badge>
        </Media>
        <Link to={`/recipes/${id}`}>
          <Card.Img variant="top" src={recipe_image} alt={title} />
        </Link>
        <Card.Body>
          <Card.Title className={styles.Title}>{title}</Card.Title>
          <Card.Text className={styles.Body}>{description}</Card.Text>
          {details}
        </Card.Body>
        {is_owner && recipePage && (
          <CardEdit showEdit={true} onDelete={showConfirmDeleteModal} onEdit={handleEdit} />
        )}
      </Card>

      <ModalAlert
        show={show}
        handleClose={() => setShow(false)}
        onConfirm={handleDelete}
        title="Nonna Says.."
        message={"Delete recipe?"}
      />
    </>
  );
};

export default Recipe;
