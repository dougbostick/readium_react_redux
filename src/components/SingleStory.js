import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import { fetchSingleStory, selectSingleStory } from '../features/singleStory/singleStorySlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SingleStory() {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    console.log(storyId, 'storyId')

    const singleStory = useSelector(selectSingleStory);
    const { title, id, content, author, comments } = singleStory;

    useEffect(() => {
        dispatch(fetchSingleStory(storyId));
    }, [dispatch])

  return (
    <div id={id} className="column">
      <h1>{singleStory?.id ? title : 'no story'}</h1>
      <p>{singleStory?.id ? content : 'no story'}</p>
      <h3>Responses:</h3>
      <div id="comments">
        {singleStory?.id ? comments.map((comment) => {
            console.log('COMMENT', comment);
            return (
                <div className="comment row" key={comment.id}>
          <img src={`/${comment.author.imageUrl}`} />
          <div className="column">
            <a>
              <h5>{comment.author.name}</h5>
            </a>
            <div>{comment.content}</div>
          </div>
        </div>
            )
        }) : 'no story'}
      </div>
    </div>
  )
}
