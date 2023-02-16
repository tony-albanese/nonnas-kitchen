import React, { useState,useRef } from "react";
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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRequest } from "../../api/axiosDefaults";

function BlogPostCreateForm() {
  const [errors, setErrors] = useState();
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    body: "",
    post_image: "",
    category: "anec",
  });

  const { title, body, post_image, category } = blogPostData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setBlogPostData({
      ...blogPostData,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('category', category);
    formData.append('post_image', imageInput.current.files[0]);


    try {
      const {data} = await axiosRequest.post('/posts/', formData);
      console.log(data);
      history.push(`/posts/${data.id}`);
    }catch (err) {
      console.log(err);
      if (err.response?.status !==401) {
        setErrors(err.response?.data);
      }
    }
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

      <Button
       variant="secondary"
       onClick={() => history.goBack()}
       >Cancel</Button>
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
                ref={imageInput}
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
