import React, { useState, useRef, useEffect } from "react";
import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert,
  FormControl,
} from "react-bootstrap";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import styles from "../../styles/BlogPostCreateEditForm.module.css";
import FormSelections from "../../components/FormSelections";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRequest } from "../../api/axiosDefaults";

/*
The code for this component is modeled from the Post component of Code Institute's Moment's walkthrough project.
It has been modified as needed.
https://github.com/Code-Institute-Solutions/moments/blob/master/src/pages/posts/PostEditForm.js
*/

function BlogPostEditForm() {
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
  const {id} = useParams(); 

  useEffect(()=> {
    const handleMount = async () =>{
        try {
          const {data} = await axiosRequest.get(`/posts/${id}/`);
          const {title, body, category, post_image, is_author} = data;
          console.log(data);
          is_author ? setBlogPostData({title, body, post_image, category}): history.push("/")
        }catch (err){
            console.log(err);
        }
    };
    handleMount()
  }, [id, history]);


  const handleChange = (event) => {
    setBlogPostData({
      ...blogPostData,
      [event.target.name]: event.target.value,
    });
  };

  //The handleSubmit is based on the method in the Moments walkthrough.
  const handelSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("category", category);
    
    if(imageInput?.current?.files[0]){
        formData.append("post_image", imageInput.current.files[0]);
    }
    

    try {
      await axiosRequest.put(`/posts/${id}/`, formData);
      history.push(`/posts/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  //The handleChangeImageChoice is based on the method in the Moments walkthrough.
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
    <Form onSubmit={handelSubmit} className={styles.PostForm}>
      <Container>
      <Row className="d-flex justify-content-center mt-5">

        <Col md={6} className="d-flex align-items-center">
            <Form.Group>
              {post_image ? (
                <Form.Label htmlFor="image-upload-field">
                  <figure>
                    <Image src={post_image} rounded fluid/>
                  </figure>
                  <p>Click on the picture to update.</p>
                </Form.Label>
              ) : (
                <Form.Label htmlFor="image-upload-field">
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
            {errors?.post_image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}  
        </Col>

        <Col md={6}>
          {formFields}
        </Col>
      </Row>
      </Container>
    </Form>
  );
}

export default BlogPostEditForm;
