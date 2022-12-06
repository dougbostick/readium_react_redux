import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchSingleAuthor,
  selectSingleAuthor,
} from "../features/singleAuthor/singleAuthorSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SingleAuthor() {
  const dispatch = useDispatch();
  const { authorId } = useParams();
  console.log(authorId, "storyId");

  const singleAuthor = useSelector(selectSingleAuthor);
  // const { title, id, content, author, comments } = singleAuthor;
  console.log('Single Author', singleAuthor);

  useEffect(() => {
    dispatch(fetchSingleAuthor(authorId));
  }, [dispatch]);

  return (
    <div id="single-author" className="column">
      <div id="single-author-detail" className="row">
        <div className="column mr1">
          <h1>{singleAuthor.name}</h1>
          <p>{singleAuthor.bio}</p>
        </div>
        <img src={`/${singleAuthor.imageUrl}`} />
      </div>
      <hr />
      <div>
        <h4>STORIES</h4>
        <h4>COMMENT</h4>
      </div>
    </div>
  );
}
