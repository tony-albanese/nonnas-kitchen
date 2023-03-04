import React, { useState , useEffect} from 'react'
import {
    Col,
    Row,
    Container,Form
  } from "react-bootstrap";
import NoResults from "../../assets/empty-fridge.jpg";
import BlogPost from './BlogPost';
import Asset from "../../components/Asset";
import FormSelections from "../../components/FormSelections";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation } from 'react-router-dom';
import { axiosRequest } from "../../api/axiosDefaults";
import { fetchMoreData } from '../../utils/utils';

import styles from "../../styles/PostsPage.module.css";


function PostsPage({message, filter=""}) {

    const [posts, setPosts] = useState({results: []});
    const [dataLoaded, setDataLoaded] = useState(false);
    const pathname = useLocation();
    const [queryString, setQueryString] = useState("");
    const [filterOption, setFilterOption] = useState("")

    //the useEffect hook is based on the code from the Moments walkthrough.
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
      <Col className="py-2 p-0 p-lg-2 mx-auto" lg={10}>
        <div className={styles.SearchFilterForm}>
        <i className={`fa-solid fa-magnifying-glass ${styles.SearchIcon}`}></i>
        <Form className={styles.SearchBar} onSubmit={(event) => event.preventDefault()}>
          <Form.Control
            type="text"
            className="mr-sm-2"
            placeholder="Search Posts"
            value={queryString}
            onChange={handleSearchChange}
          />

          <Form.Group className={styles.FormSelections} controlId="category-filter">
            <Form.Label className={styles.Label}>Filter by Category</Form.Label>
            <FormSelections
              controlName="category-filter"
              onChangeHandler={handleFilterCategoryChange}
              options={filterCategories}
            />
          </Form.Group>
        </Form>
        </div>
        {dataLoaded ? (
          <>
          <Row>
            <Col className='mx-auto'>
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
                <cite><a target="_blank" rel="noreferrer" href="https://www.freepik.com/free-vector/refridgerator-with-opened-door_25538317.htm#query=empty%20refrigerator&position=33&from_view=search&track=ais">Image by brgfx</a> on Freepik</cite>
              </Container>
            )}
            </Col>
            </Row>
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