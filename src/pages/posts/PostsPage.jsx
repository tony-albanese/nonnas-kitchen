import React, { useState , useEffect} from 'react'
import {
    Col,
    Row,
    Container,Form
  } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { axiosRequest } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import BlogPost from './BlogPost';
import Asset from "../../components/Asset";


function PostsPage({message, filter=""}) {

    const [posts, setPosts] = useState({results: []});
    const [dataLoaded, setDataLoaded] = useState(false);
    const pathname = useLocation();
    const [queryString, setQueryString] = useState("");

    useEffect(
        ()=>{
            const getPosts = async () => {
                try {
                    const {data} = await axiosRequest.get(`/posts/?${filter}search=${queryString}`)
                    setPosts(data);
                    setDataLoaded(true);
                    
                }catch (err){
                    console.log(err);
                }

            };
            setDataLoaded(false);
            getPosts();
        },
        [filter, pathname, queryString]
    );

    const handleSearchChange = (event) =>{
        setQueryString(event.target.value);
    };

  return (
    <Row className="h100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <Form onSubmit={(event) => event.preventDefault()}>
          <Form.Control
            type="text"
            className="mr-sm-2"
            placeholder="Search Posts"
            value={queryString}
            onChange={handleSearchChange}
          />
        </Form>
        {dataLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <BlogPost key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default PostsPage