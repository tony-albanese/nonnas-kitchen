import React from "react";
import { Container, Row } from "react-bootstrap";

function RecipeCreateForm() {
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
