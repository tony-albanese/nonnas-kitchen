import React from "react";
import { Badge, Card, Media } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function RecipePage(props) {


  const currentUser = useCurrentUser();
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosRequest.get(`/posts/${id}`),
          axiosRequest.get(`/comments/?blog_post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col lg={8} className="mx-auto">
        <BlogPost {...post.results[0]} setPosts={setPost} postPage />
        <Container>
          {currentUser ? (
            <CommentCreateForm
              postId={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll 
            children={comments.results.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
                setPost={setPost}
                setComments={setComments}
              />
            ))}
            dataLength={comments.results.length}
            hasMore={!!comments.next}
            loader={<Asset spinner />}
            next={() => fetchMoreData(comments, setComments)}
            />
            
          ) : (
            <span>No comments to display.</span>
          )}
        </Container>
      </Col>
    </Row>
  );
}


