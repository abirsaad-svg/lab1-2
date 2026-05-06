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

function App() {
  return (
   <div>
  <h1>Week 3 Lab</h1>

  {stories.map((story) => (
    <div key={story.objectID}>
      <h3>
       <a href={story.url} target="_blank" rel="noreferrer">
        {story.title}
       </a>
      </h3>
      
      <p>Author: {story.author}</p>
      <p>Points: {story.points}</p>
      <p>Comments: {story.num_comments}</p>
    </div>
  ))}
</div>
  );
}

export default App;