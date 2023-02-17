import React from 'react'
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function PostFooterContent({is_owner, is_liked, user, likes_count}) {
  return (
    <>
    <div>Post Footer Content</div>
    {
      is_owner ? (
        <p>Is owner of the post</p>
      ) : is_liked ? (<p>Owner likes this post</p>) : user? (<p>They are logged in.</p>): (<p>Sign in to like.</p>)
    }
    {likes_count}
    </>
  )
}
