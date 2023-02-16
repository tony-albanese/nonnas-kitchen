import React, { useState } from "react";
import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert,
  FormText,
  FormControl,
} from "react-bootstrap";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import styles from "../../styles/BlogPostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import FormSelections from "../../components/FormSelections";

function BlogPostCreateForm() {
  const [errors, setErrors] = useState();
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    body: "",
    post_image: "",
    category: "anec",
  });

  const { title, body, post_image, category } = blogPostData;

  const handleChange = (event) => {
    setBlogPostData({
      ...blogPostData,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log("blogPostData: ");
    console.log(blogPostData);
  };

  const handleChangeImageChoice = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(post_image);
      setBlogPostData({
        ...blogPostData,
        post_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const selectOptions = [
    { anec: "Anecdote" },
    { tip: "Tip" },
    { hist: "History" },
    { fact: "Fun Fact" },
    { orig: "Origin" },
    { remin: "Reminiscence" },
  ];

  const formFields = (
    <div>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <FormControl
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="body">
        <Form.Label>Body</Form.Label>
        <FormControl
          as="textarea"
          name="body"
          value={body}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="category">
        <Form.Label>Example select</Form.Label>
        <FormSelections
          controlName="category"
          onChangeHandler={handleChange}
          options={selectOptions}
        />
      </Form.Group>

      <Button variant="secondary">Cancel</Button>
      <Button variant="primary" type="submit">
        Sumbit
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handelSubmit}>
      <Row>
        <Col>
          <Container>
            <Form.Group>
              {post_image ? (
                <>
                  <figure>
                    <Image src={post_image} rounded />
                  </figure>
                </>
              ) : (
                <Form.Label>
                  <Asset message="Upload an image." src={Upload} />
                </Form.Label>
              )}

              <Form.File
                id="image-upload-field"
                accept="image/*"
                onChange={handleChangeImageChoice}
              />
            </Form.Group>
            <div className="d-md-none">{formFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container>{formFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default BlogPostCreateForm;
