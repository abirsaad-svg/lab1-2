import { useState, useEffect } from "react";

const Item = ({ story, onRemoveStory }) => {
  return (
    <div>
      <h3>
        <a href={story.url} target="_blank" rel="noreferrer">
          {story.title}
        </a>
      </h3>

      <p>Author: {story.author}</p>
      <p>Points: {story.points}</p>
      <p>Comments: {story.num_comments}</p>
      <button onClick={() => onRemoveStory(story)}>
  Delete
</button>
    </div>
  );
};

const List = ({ stories, onRemoveStory }) => {
  return (
    <div>
      {stories.map((story) => (
        <Item
  key={story.objectID}
  story={story}
  onRemoveStory={onRemoveStory}
/>
      ))}
    </div>
  );
};

const InputWithLabel = ({ value, onInputChange, children, id }) => {
  return (
  <div>
    <label htmlFor={id}>{children}</label>
    <input
      id={id}
      type="text"
      value={value}
      onChange={onInputChange}
    />
  </div>
);
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState(
  localStorage.getItem("search") || ""
);
const initialStories = [
    {
      objectID: "1",
      title: "React makes UI easy",
      url: "https://react.dev",
      author: "Dan Abramov",
      points: 100,
      num_comments: 20
    },
    {
      objectID: "2",
      title: "JavaScript is everywhere",
      url: "https://developer.mozilla.org",
      author: "MDN Team",
      points: 85,
      num_comments: 10
    }
  ];
const [stories, setStories] = useState(initialStories);
  useEffect(() => {
  localStorage.setItem("search", searchTerm);
}, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleRemoveStory = (item) => {
  const newStories = stories.filter(
    (story) => story.objectID !== item.objectID
  );
  setStories(newStories);
};

  
 
  return (
    <div>
      <h1>Week 7 Lab</h1>

      <InputWithLabel
  id="search"
  value={searchTerm}
  onInputChange={handleSearch}
>
  <strong>Search:</strong>
</InputWithLabel>

     <List
  stories={stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )}
  onRemoveStory={handleRemoveStory}
/>
    </div>
  );
};

export default App;