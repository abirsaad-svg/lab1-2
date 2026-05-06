import { useState, useEffect } from "react";

const Item = ({ story }) => {
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
    </div>
  );
};

const List = ({ stories }) => {
  return (
    <div>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} />
      ))}
    </div>
  );
};

const Search = ({ onSearch, searchTerm }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState(
  localStorage.getItem("search") || ""
);
  useEffect(() => {
  localStorage.setItem("search", searchTerm);
}, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const stories = [
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

  return (
    <div>
      <h1>Week 7 Lab</h1>

      <Search onSearch={handleSearch} searchTerm={searchTerm} />

      <List
        stories={stories.filter((story) =>
          story.title.toLowerCase().includes(searchTerm.toLowerCase())
        )}
      />
    </div>
  );
};

export default App;