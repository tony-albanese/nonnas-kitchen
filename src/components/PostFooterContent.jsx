import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PostFooterContent({
  isOwner,
  isLiked,
  loggedInUser,
  onLike,
  likesCount,
  commentsCount,
  onUnlike,
  postId,
}) {
  const cantLikeOwnPostToolTip = <Tooltip>Can't like own post!</Tooltip>;
  const logInPromptToolTip = <Tooltip>Please log in.</Tooltip>;

  const iconPostIsOwner = (
    <OverlayTrigger placement="top" overlay={cantLikeOwnPostToolTip}>
      <i className="fa-regular fa-heart"></i>
    </OverlayTrigger>
  );

  const iconPostIsLiked = (
    <span onClick={onUnlike}>
      <i className="fa-solid fa-heart"></i>{" "}
    </span>
  );

  const iconUserIsLoggedIn = (
    <span onClick={onLike}>
      <i className="fa-regular fa-heart"></i>{" "}
    </span>
  );

  const iconUserNotLoggedIn = (
    <OverlayTrigger placement="top" overlay={logInPromptToolTip}>
      <i className="fa-regular fa-heart"></i>
    </OverlayTrigger>
  );

  const commentIconUserNotLoggedIn = (
    <OverlayTrigger placement="top" overlay={logInPromptToolTip}>
      <span>
        <i className="fa-solid fa-comments"></i>
        {commentsCount}
      </span>
    </OverlayTrigger>
  );

  const commentIconUserLoggedIn = (
    <Link to={`/posts/${postId}`}>
      <i className="fa-solid fa-comments"></i>
      {commentsCount}
    </Link>
  );

  return (
    <Card.Footer className="text-muted text-center">
      <>
        {isOwner
          ? iconPostIsOwner
          : isLiked
          ? iconPostIsLiked
          : loggedInUser
          ? iconUserIsLoggedIn
          : iconUserNotLoggedIn}

        {likesCount}
        {loggedInUser ? commentIconUserLoggedIn : commentIconUserNotLoggedIn}
      </>
    </Card.Footer>
  );
}
