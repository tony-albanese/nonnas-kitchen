import React from "react";
import { Badge, Card, Media } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function RecipePage() {
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === author;
  const history = useHistory();


  return (
    <Card>
      <Card.Header className={styles.CardHeader}>
        {categories[category]}
      </Card.Header>
      <Media
        className={`align-items-center justify-content-between p-2 ${styles.PostInfo}`}
      >
        <Badge pill className={`${styles.Badge}`}>
          {author}
        </Badge>
      </Media>
      <Link to={`/posts/${id}`}>
        <Card.Img variant="top" src={post_image} alt={title} />
      </Link>

      <Card.Body>
        <Card.Title className={styles.Title}>{title}</Card.Title>
        <Card.Text className={styles.Body}>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RecipePage;
