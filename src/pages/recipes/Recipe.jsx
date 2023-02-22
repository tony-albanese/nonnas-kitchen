import React, { useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Badge, Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardEdit from "../../components/CardEdit";
import ModalAlert from "../../components/ModalAlert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/Recipe.module.css";


const Recipe = (props) => {
  const {
    id,
    author,
    title,
    description,
    dish_type,
    dish_type_name,
    difficulty,
    ingredients_list,
    procedure,
    recipe_image,
    recipePage

  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === author;
  const history = useHistory();


  const difficultyOptions = {
     easy: "Easy" ,
     medium: "Medium" ,
    hard: "Hard" ,
  };

  const dishTypeOptions = {
    app: "Appetizer" ,
    mains: "Mains",
    pasta: "Pasta",
    meat: "Meat" ,
    dessert: "Dessert",
  };


  const showConfirmDeleteModal = (event) => {
    setShow(true);
  };


  const handleDelete = async () => {
    console.log("Handle delete post.")
    try {
      // await axiosResponse.delete(`/recipes/${id}`);
      //history.goBack();
    } catch (err) {
      console.log(err);
    }
    setShow(false);
  };

  const [show, setShow] = useState(false);

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

        </Media>
        <Link to={`/recipes/${id}`}>
          <Card.Img variant="top" src={recipe_image} alt={title} />
        </Link>
        <Card.Body>
          <Card.Title className={styles.Title}>{title}</Card.Title>
          <Card.Text className={styles.Body}>{description}</Card.Text>
        </Card.Body>
        {is_owner && recipePage && (
          <CardEdit showEdit={false} onDelete={showConfirmDeleteModal}/>
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