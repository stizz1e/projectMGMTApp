import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectLoded from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState(prevState => {
      const taskID = Math.random();
      const newTask = {
        text: text,
        projectID: prevState.selectedProjectId,
        id: taskID,
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    });
  }

  const handleDeleteTask = (id) => {
      setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        tasks: prevState.tasks.filter((task) => {task.id !== id})
      }
    });
  }

  const handleStartAddProj = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  const handleCancelProj = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  const handleAddProject = (projData) => {
    setProjectsState(prevState => {
      const newProj = {
        ...projData,
        id: Math.random(),
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProj]
      }
    });
  }
const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
const handleSelectProject = (id) => {
  setProjectsState((prevState) => {
    return{
      ...prevState,
      selectedProjectId: id,
    };
  });
}

const handleDeleteProject = () => {
  setProjectsState((prevState) => {
    
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project) => {project.id !== prevState.selectedProjectId})
    }
  });
}


  let content = (
    <SelectedProject 
      project={selectedProject} 
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProj}/>
  }else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectLoded onStartAdd={handleStartAddProj} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onStartAdd={handleStartAddProj} 
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
