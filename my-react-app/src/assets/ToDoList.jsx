import React, {useState} from 'react'

function ToDoList(){

    const [tasks,setTasks] = useState(["Eat Breakfats", "Learn React", ]);

    const[newTask , setNewTask] = useState("");
    
    
    function handleInputChange(event){
        setNewTask(event.target.value);
       

    }

    function addTask(){
        setTasks(t=> [...t, newTask]);
        setTasks("");

    }


    function deleteTask(index){
        const updatedTasks = tasks.filter(__, i => i != index);

    }


    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index -1] , updatedTasks[index]];
        }

    }

    function moveTaskDown(index){
        if (index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1] , updatedTasks[index]];
        }

    }


    

    return(<>
    <div className="to-do-list">
        <h1>To-Do-list</h1>
        <div>
            <input type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
            >
            </input>
            <button className="add-button" onClick={addTask}>
            Add
            </button>
        </div>

        <ol>
            {tasks.map((task,index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className='delete-button' onClick={ ()=> deleteTask(index)}>Delete</button>
                <button className='up-button' onClick={ ()=> moveTaskUp(index)}>UP</button>
                <button className='up-button' onClick={ ()=> moveTaskDown(index)}>Down</button>
                
            </li>)}
        </ol>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    </>);
}



export default ToDoList