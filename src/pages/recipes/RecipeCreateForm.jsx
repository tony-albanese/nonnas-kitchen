import React, { useState, useRef }from "react";
import { Container, Form, FormControl, Row, Col } from "react-bootstrap";
import FormSelections from "../../components/FormSelections";
function RecipeCreateForm() {
  const [errors, setErrors] = useState();

  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    recipe_image: "",
    dish_type: "app",
    difficulty: "easy",
  });

  const imageInput = useRef(null);
  const {title, description, recipe_image, dish_type, difficulty} = recipeData;

  const handleChange = (event) => {
    setRecipeData({
      ...recipeData, [event.target.name]: event.target.value
    });
  }

  const handleChangeImageChoice = (event) =>{

  };

const difficultyOptions = [
  {easy: "Easy"},
  {medium: "Medium"},
  {hard: "Hard"},
];


const dishTypeOptions = [
  {app: "Appetizer"},
  {mains: "Mains"},
  {pasta: "Pasta"},
  {meat: "Meat"},
  {dessert: "Dessert"}
];






  const formFields = (
    <>
    <Form.Group controlId="title">
      <FormControl
               type="text"
               name="title"
               value={title}
               onChange={handleChange}>
      </FormControl>
    </Form.Group>
    

    <Form.Group controlId="description">
        <Form.Label>Body</Form.Label>
        <FormControl
          as="textarea"
          name="description"
          rows={5}
          value={description}
          onChange={handleChange}
        />
      </Form.Group>


      <Form.Group controlId="dish_type">
        <Form.Label>Category</Form.Label>
        <FormSelections
          controlName="dish_type"
          onChangeHandler={handleChange}
          options={dishTypeOptions}
        />
      </Form.Group>

      <Form.Group controlId="difficulty">
        <Form.Label>Category</Form.Label>
        <FormSelections
          controlName="difficulty"
          onChangeHandler={handleChange}
          options={difficultyOptions}
        />
      </Form.Group>
    </>
  );

const imageUploadComponent = (
  <Form.Group>

    <Form.File 
             id="image-upload-field"
             accept="image/*"
             onChange={handleChangeImageChoice}
             ref={imageInput}/>
  </Form.Group>
);

  return (
    <>
      <h1>RecipeCreateForm</h1>
      <p>This is where the user can create a recipe.</p>
      <Form>
        <Container>
          <Row>
            <p>Add image. Title. Description. Difficulty. Type.</p>

            <Col md={6}>Image upload goes here.</Col>

            <Col md={6}>
            {formFields}
            </Col>
          </Row>




          <Row>
            <p>This row contains the ingredients and steps components.</p>
          </Row>


          <Row>
            <p>Row for the submit button and cancel button.</p>
          </Row>
        </Container>
      </Form>
    </>
  );
}

export default RecipeCreateForm;
