import { useState, useEffect } from "react";
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

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
  const [url, setUrl] = useState(`${API_ENDPOINT}react`);

  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleRemoveStory = (item) => {
  const newStories = stories.filter(
    (story) => story.objectID !== item.objectID
  );
  setStories(newStories);
};
const handleSearchSubmit = () => {
  setUrl(`${API_ENDPOINT}${searchTerm}`);
};
  useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setStories(data.hits);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  fetchData();
}, [url]);
 
  return (
    <div>
      <h1>Week 9 Labs </h1>

      <InputWithLabel
  id="search"
  value={searchTerm}
  onInputChange={handleSearch}
>
  <strong>Search:</strong>
</InputWithLabel>
<button
  onClick={handleSearchSubmit}
  disabled={!searchTerm}
>
  Search
</button>

    {isError && <p>Something went wrong...</p>}

{isLoading ? (
  <p>Loading...</p>
) : (
  <List stories={stories} onRemoveStory={handleRemoveStory} />
)}
    </div>
  );
};

export default App;