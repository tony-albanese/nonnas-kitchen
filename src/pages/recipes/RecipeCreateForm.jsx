import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Form, FormControl, Row, Col, Image, Button } from "react-bootstrap";
import FormSelections from "../../components/FormSelections";
import Upload from "../../assets/old-woman.png";
import ListEntry from "../../components/ListEntry";


function RecipeCreateForm() {
  const [errors, setErrors] = useState();
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    recipe_image: "",
    dish_type: "app",
    difficulty: "easy",
  });
  const { title, description, recipe_image, dish_type, difficulty } =
    recipeData;

  const [stepsFields, setStepsFields] = useState([{ item: "" }]);
  const [ingredientFields, setIngredientFields] = useState([{item: ""}]);

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setRecipeData({
      ...recipeData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImageChoice = (event) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(recipeData);
    console.log("Instruction Data: ");
    console.log(stepsFields);
    console.log(ingredientFields);
  };

  const difficultyOptions = [
    { easy: "Easy" },
    { medium: "Medium" },
    { hard: "Hard" },
  ];

  const dishTypeOptions = [
    { app: "Appetizer" },
    { mains: "Mains" },
    { pasta: "Pasta" },
    { meat: "Meat" },
    { dessert: "Dessert" },
  ];

  const formFields = (
    <>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <FormControl
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        ></FormControl>
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
      <Form.Label htmlFor="image-upload-field">
        <div className="my-3">
          <Image src={Upload} fluid />
        </div>
        <p>Click the granny to upload a recipe photo.</p>
      </Form.Label>
      <Form.File
        id="image-upload-field"
        accept="image/*"
        onChange={handleChangeImageChoice}
        ref={imageInput}
      />
    </Form.Group>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Row className="d-flex justify-content-center mt-5">
          <Col md={6} className="d-flex align-items-center my-auto">
            {imageUploadComponent}
          </Col>

          <Col md={6} className="my-auto">
            {formFields}{" "}
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <ListEntry
              label="Instructions"
              fields={stepsFields}
              setFields={setStepsFields}
            />
          </Col>

          <Col md={6}>
            <ListEntry
              label="Ingredients"
              fields={ingredientFields}
              setFields={setIngredientFields}
            />
          </Col>
        </Row>

        <Row>
          <button onClick={() => history.goBack()}>
            Cancel
          </button>
          <button type="submit">
            Submit
          </button>
        </Row>
      </Container>
    </Form>
  );
}

export default RecipeCreateForm;
