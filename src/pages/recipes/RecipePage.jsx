import React , { useEffect, useState }from "react";
import Recipe from "../recipes/Recipe";
import { useParams } from "react-router-dom";
import { Col, Row} from "react-bootstrap";
import { axiosRequest } from "../../api/axiosDefaults";



export default function RecipePage() {

  const { id } = useParams();
  const [recipe, setRecipe] = useState({ results: [] });
  const [ingredients, setIngredients] = useState([]);
  const [recipeSteps, setRecipeSteps] = useState([]);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: recipe }] = await Promise.all([
          axiosRequest.get(`/recipes/${id}`),
        ]);
        setRecipe({ results: [recipe] });

        const newIngredientsList = [...recipe?.ingredients_list];
        setIngredients(newIngredientsList);

        const newInstructionsList = [...recipe?.procedure];
        setRecipeSteps(newInstructionsList);

      } catch (err) {
        console.log(err);
      }

      
    };
    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col lg={8} className="mx-auto">
        <Recipe {...recipe.results[0]} setRecipes={setRecipe} recipePage ingredientsList={ingredients} steps={recipeSteps}/>
      </Col>
    </Row>
  );
}


