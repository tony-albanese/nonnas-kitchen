import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function PostFooterContent({ isOwner, isLiked, loggedInUser, onLike , likesCount, onUnlike}) {
  const cantLikeOwnPostToolTip = <Tooltip>Can't like own post!</Tooltip>;
  const logInPromptToolTip = <Tooltip>Please log in to like.</Tooltip>;

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

  return (
    <Card.Footer className="text-muted">
      {isOwner
        ? iconPostIsOwner
        : isLiked
        ? iconPostIsLiked
        : loggedInUser
        ? iconUserIsLoggedIn
        : iconUserNotLoggedIn}

        {likesCount}
    </Card.Footer>
  );
}
