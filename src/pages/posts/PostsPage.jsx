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
import FormSelections from "../../components/FormSelections";
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/utils';


function PostsPage({message, filter=""}) {

    const [posts, setPosts] = useState({results: []});
    const [dataLoaded, setDataLoaded] = useState(false);
    const pathname = useLocation();
    const [queryString, setQueryString] = useState("");
    const [filterOption, setFilterOption] = useState("")

    useEffect(
        ()=>{
            const getPosts = async () => {
                try {
                    const {data} = await axiosRequest.get(`/posts/?${filter}search=${queryString}&category=${filterOption}`)
                    setPosts(data);
                    setDataLoaded(true);
                    
                }catch (err){
                    console.log(err);
                }

            };
            setDataLoaded(false);
            const timer = setTimeout(
                () => {
                    getPosts();
                }, 1200);
            return () =>{
                clearTimeout(timer);
            }
           
        },
        [filter, pathname, queryString,filterOption]
    );

    const handleSearchChange = (event) =>{
        setQueryString(event.target.value);
    };

    const handleFilterCategoryChange = (event)=>{
        if (event.target.value === 'blank'){
            setFilterOption("");
        } else {
            setFilterOption(event.target.value);
        }
        
    }

    const filterCategories = [
        {blank: "None"},
        { anec: "Anecdote" },
        { tip: "Tip" },
        { hist: "History" },
        { fact: "Fun Fact" },
        { orig: "Origin" },
        { remin: "Reminiscence" },
      ];

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

          <Form.Group controlId="category-filter">
            <Form.Label>Example select</Form.Label>
            <FormSelections
              controlName="category-filter"
              onChangeHandler={handleFilterCategoryChange}
              options={filterCategories}
            />
          </Form.Group>
        </Form>
        {dataLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll 
              children={posts.results.map((post) => (
                <BlogPost key={post.id} {...post} setPosts={setPosts} />
              ))}
              dataLength={posts.results.length}
              loader={<Asset spinner />}
              hasMore={!!posts.next}
              next={() => fetchMoreData(posts, setPosts)}
              />
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