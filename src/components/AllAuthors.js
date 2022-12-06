import React from 'react'
import { useSelector } from "react-redux";
import { selectAuthors } from "../features/authors/authorsSlice";
import { Link } from 'react-router-dom';

export default function AllAuthors() {
    const authors = useSelector(selectAuthors);
    // console.log(authors);
  return (
    <div>
        {authors?.length ? authors.map((author) => {
            return (
                <Link
              to={`/authors/${author.id}`}
              key={`All Authors: ${author.id}`}
            >
              <div className="author row">
                <img src={author.imageUrl} />
                <p>{author.name}</p>
              </div>
            </Link>
            )
        }) : 'no authors'}
    </div>
  )
}
