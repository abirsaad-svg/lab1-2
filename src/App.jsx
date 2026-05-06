const courseTitle = "Web Development";

function App() {
  const studentName = "Abir Saad";
  
  const student = {
    name: "Abir",
    age: 21,
    track: "Web Development"
  };

function sayHello() {
  return `Hello ${studentName}`;
}

return (
    <div>
      <h1>My first React component</h1>

      <p>Student name: {studentName}</p>

      <p>Course: {courseTitle}</p>

      <p>Welcome to {courseTitle}, {studentName}!</p>

      <label htmlFor="studentInput">Enter your name:</label>

      <input type="text" id="studentInput" />
      
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>
    </div>
    
  );
}
export default App;

// One thing I understand well in this lab: I understand how React components return JSX and how variables are displayed using {}.

// One thing that is still confusing: I still find it a bit confusing when to use variables inside or outside the component.

// One mistake I made and fixed: I tried to display a whole object directly instead of accessing its properties.
