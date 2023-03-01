import React, { useState, useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  Container,
  Form,
  FormControl,
  Row,
  Col,
  Image,
  Alert
} from "react-bootstrap";
import FormSelections from "../../components/FormSelections";
import Upload from "../../assets/old-woman.png";
import ListEntry from "../../components/ListEntry";
import styles from "../../styles/RecipeCreateEditForm.module.css";
import { axiosRequest } from "../../api/axiosDefaults";

function RecipeEditForm() {
  
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
  const [ingredientFields, setIngredientFields] = useState([{ item: "" }]);

  const imageInput = useRef(null);
  const history = useHistory();
  const {id} = useParams();


  useEffect(()=> {
    const handleMount = async () =>{
        try {
          const {data} = await axiosRequest.get(`/recipes/${id}/`);
          const {title,description, recipe_image, dish_type, is_author, difficulty, ingredients_list, procedure} = data;
          if (is_author){
            setRecipeData({title, description, recipe_image, dish_type, difficulty});
            setStepsFields(procedure);
            setIngredientFields(ingredients_list);
          } else {
            history.push("/");
          }
          //is_author ? setRecipeData({title, description, recipe_image, dish_type, difficulty}): history.push("/")
        }catch (err){
            console.log(err);
        }
    };
    handleMount()
  }, [id, history]);




  const handleChange = (event) => {
    setRecipeData({
      ...recipeData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImageChoice = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(recipe_image);
      setRecipeData({
        ...recipeData,
        recipe_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ingredientJsonString = JSON.stringify(ingredientFields);
    const procedureJsonString = JSON.stringify(stepsFields)
    const formData = new FormData();
    
    formData.append("title", title);
    formData.append("description", description);
    formData.append("recipe_image", recipe_image);
    formData.append("dish_type", dish_type);
    formData.append("difficulty", difficulty);
    formData.append("ingredients_list", ingredientJsonString);
    formData.append("procedure", procedureJsonString);
    formData.append("tags", "default");
    formData.append("recipe_image", imageInput.current.files[0]);


    try {
      //const { data } = await axiosRequest.post("/recipes/", formData);
      //console.log(data);
      //history.push(`/recipes/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }


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
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

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
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId="dish_type">
        <Form.Label>Category</Form.Label>
        <FormSelections
          controlName="dish_type"
          onChangeHandler={handleChange}
          options={dishTypeOptions}
        />
      </Form.Group>
      {errors?.dish_type?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId="difficulty">
        <Form.Label>Difficulty</Form.Label>
        <FormSelections
          controlName="difficulty"
          onChangeHandler={handleChange}
          options={difficultyOptions}
        />
      </Form.Group>
      {errors?.difficulty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    </>
  );

  const imageUploadComponent = (
    <>
    <Form.Group>
              {recipe_image ? (
                <Form.Label htmlFor="image-upload-field">
                  <figure>
                    <Image src={recipe_image} fluid />
                  </figure>
                </Form.Label>
              ) : (
                <Form.Label htmlFor="image-upload-field">
                  <div className="my-3">
                    <Image src={Upload} fluid alt="A cartoon of a grandmother."/>
                  </div>
                  <p>Click the granny to upload a photo.</p>
                </Form.Label>
              )}
              <Form.File
                id="image-upload-field"
                accept="image/*"
                onChange={handleChangeImageChoice}
                ref={imageInput}
              />
    </Form.Group>
    {errors?.recipe_image?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
    </>
  );

  return (
    <>
    <div className={styles.Header}>Add a Recipe</div>
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

        <Row className="d-flex justify-content-center mb-2">
          <button className={styles.CancelButton} onClick={() => history.goBack()}>Cancel</button>
          <button className={styles.SubmitButton} type="submit">Submit</button>
        </Row>
      </Container>
    </Form>
    </>
  );



}

export default RecipeEditForm