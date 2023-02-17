import React from 'react'
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";


export default function PostFooterContent({is_owner, is_liked, user, likes_count}) {
  return (
    <>
    <div>Post Footer Content</div>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-heart"></i>
    <i class="fa-regular fa-comments"></i>
    </>
  )
}
