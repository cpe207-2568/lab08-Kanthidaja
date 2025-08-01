import {Header} from "./components/Header.tsx"
import {Footer} from "./components/Footer.tsx"
import { Sidebar } from "./components/Sidebar.tsx";
import { TaskInput } from "./components/TaskInput.tsx";
import { Task } from "./components/Task.tsx";     


function App() {
    const tasks = [
    { id: 1, title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: true },
    { id: 2, title: "Write code", description: "Finish project for class", isDone: false },
    { id: 3, title: "Deploy app", description: "Push project to GitHub Pages", isDone: false }
  ];
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Kanthida" type="admin"></Sidebar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
        <TaskInput></TaskInput>    
            {/* Card รายการ */}
            <Task id={tasks[0].id} title={tasks[0].title} description={tasks[0].description} isDone={tasks[0].isDone}></Task>
            <Task id={tasks[1].id} title={tasks[1].title} description={tasks[1].description} isDone={tasks[1].isDone}></Task>
            <Task id={tasks[2].id} title={tasks[2].title} description={tasks[2].description} isDone={tasks[2].isDone}></Task>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2025" fullName="Kanthida Khunyotying" studentId ="670610673"></Footer>
    </div>
  );
}

export default App;
