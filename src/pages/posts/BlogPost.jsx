import React from 'react'
import styles from "../../styles/BlogPost.module.css";
import {useCurrentUser} from ".../../contexts/CurrentUserContext";

const BlogPost = (props) => {
const {
id,
author,
title,
body,
category,
posted_on,
post_image,
is_author,
} = props;

const currentUser = useCurrentUser();
const is_owner = currentUser?.username === author;
  return (
    <div>BlogPost Component Placeholder</div>
  )
}

export default BlogPost