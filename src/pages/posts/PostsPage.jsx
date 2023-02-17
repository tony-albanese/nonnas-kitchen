import React, { useState , useEffect} from 'react'
import {
    Col,
    Row,
    Container,
  } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { axiosRequest } from "../../api/axiosDefaults";


function PostsPage({message, filter=""}) {

    const [posts, setPosts] = useState({results: []});
    const [dataLoaded, setDataLoaded] = useState(false);
    const pathname = useLocation();

    useEffect(
        ()=>{
            const getPosts = async () => {
                try {
                    const {data} = await axiosRequest.get(`/posts/?${filter}`)
                    
                }catch (err){
                    console.log(err);
                }

            };
            getPosts();
        },
        [filter, pathname]
    );

  return (
    <Row className='h100'>
    <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>List of posts here</p>
        <p>{message}</p>
      </Col>

    </Row>
  )
}

export default PostsPage