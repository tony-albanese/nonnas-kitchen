import React , { useState , useEffect} from 'react'
import {
    Col,
    Row,
    Container
  } from "react-bootstrap";
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import InfiniteScroll from 'react-infinite-scroll-component';
import Recipe from "../recipes/Recipe";
import { useLocation } from 'react-router-dom';
import { axiosRequest } from "../../api/axiosDefaults";
import { fetchMoreData } from '../../utils/utils';

function RecipesPage({message}) {

  const [recipes, setRecipes] = useState({results: []});
  const [dataLoaded, setDataLoaded] = useState(false);
  const pathname = useLocation();

  useEffect(
    ()=>{
        const getRecipes = async () => {
            try {
                const {data} = await axiosRequest.get(`/recipes/`)
                setRecipes(data);
                setDataLoaded(true);
                
            }catch (err){
                console.log(err);
            }

        };
        setDataLoaded(false);
        const timer = setTimeout(
            () => {
                getRecipes();
            }, 1200);
        return () =>{
            clearTimeout(timer);
        }
       
    },
    [pathname]
);

  return (
    <>
<Row className="h100">
      <Col className="py-2 p-0 p-lg-2 mx-auto" lg={10}>
        {dataLoaded ? (
          <>
          <Row>
            <Col className='mx-auto'>
            {recipes.results.length ? (
              <InfiniteScroll 
              children={recipes.results.map((recipe) => (
                <Recipe key={recipe.id} {...recipe} setRecipes={setRecipes} />
              ))}
              dataLength={recipes.results.length}
              loader={<Asset spinner />}
              hasMore={!!recipes.next}
              next={() => fetchMoreData(recipes, setRecipes)}
              />
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
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

    </>
  );
}

export default RecipesPage