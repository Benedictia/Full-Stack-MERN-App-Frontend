
import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [source, setSource] = useState('');
  const [publishedAt, setPublishedAt] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      title,
      description,
      url,
      source,
      publishedAt,
    };

    axios.post('https://full-stack-mern-app-backend-2.onrender.com/api/articles', newArticle)
      .then((response) => {
        console.log('Article created successfully:', response.data);
        // clear the form fields
        setTitle('');
        setDescription('');
        setUrl('');
        setSource('');
        setPublishedAt('');
      })
      .catch((error) => {
        console.error('There was an error creating the article!', error);
      });
  };

  return (
    <div>
      <h2>Add a New Article</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />

        <label>URL:</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <br />

        <label>Source:</label>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
        <br />

        <label>Published Date:</label>
        <input
          type="date"
          value={publishedAt}
          onChange={(e) => setPublishedAt(e.target.value)}
          required
        />
        <br />

        <button type="submit">Submit Article</button>
      </form>
    </div>
  );
};

export default ItemForm;
