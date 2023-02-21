import React, { useState, useRef } from "react";
import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Alert,
  FormControl,
} from "react-bootstrap";
import Upload from "../../assets/old-woman.png";
import FormSelections from "../../components/FormSelections";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRequest } from "../../api/axiosDefaults";
import styles from "../../styles/BlogPostCreateEditForm.module.css";

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
    formData.append("title", title);
    formData.append("body", body);
    formData.append("category", category);
    formData.append("post_image", imageInput.current.files[0]);

    try {
      const { data } = await axiosRequest.post("/posts/", formData);
      console.log(data);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
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
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId="body">
        <Form.Label>Body</Form.Label>
        <FormControl
          as="textarea"
          name="body"
          rows={5}
          value={body}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.body?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <FormSelections
          controlName="category"
          onChangeHandler={handleChange}
          options={selectOptions}
        />
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Row className="d-flex justify-content-end mt-5">
        <Button
          className={styles.CancelButton}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
        <Button className={styles.SubmitButton} type="submit">
          Sumbit
        </Button>
      </Row>
    </div>
  );

  return (
    <Form className={styles.PostForm} onSubmit={handelSubmit}>
      <Row className="d-flex justify-content-center mt-5">
        <Col md={6} lg={4} className="d-flex align-items-center">
          <Form.Group>
            {post_image ? (
              <Form.Label htmlFor="image-upload-field">
              <figure>
                <Image src={post_image} fluid />
              </figure>
              </Form.Label>
            ) : (
              <Form.Label htmlFor="image-upload-field">
                <div className="my-3">
                  <Image src={Upload} fluid />
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
          {errors?.post_image?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <div className="d-md-none">{formFields}</div>
        </Col>
        <Col md={6} lg={8} className="d-none d-md-block p-0 p-md-2">
          {formFields}
        </Col>
      </Row>
    </Form>
  );
}

export default BlogPostCreateForm;
