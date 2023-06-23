import { useState } from "react";
import { HeaderImage, MainContainer, ToDoCheckBox, ToDoInput, ToDoInputContainer, ToDoListContainer, ToDoListElement, ToDoListElementText, ToDoListFilter, ToDoListFilterContainer, ToDoListFooter, ToDoSection, ToDoSectionHeader, TodoListCaption } from "./styles";
import { v4 } from "uuid";

const Main = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    const [toDoList, setToDoList] = useState({
        list:[],
        listBackup:[]
    });
    const [filters, setFilters] = useState({
        all:true,
        active:false,
        completed:false
    });

	return (
	<>
		<MainContainer  darkMode={darkMode}>
            <HeaderImage  darkMode={darkMode}></HeaderImage>
            <ToDoSection>
                <ToDoSectionHeader>
                    <h1>TODO</h1>
                    <img onClick={()=>handleDarkMode(darkMode,setDarkMode)} src={darkMode ? '../../images/icon-sun.svg':'../../images/icon-moon.svg'} alt="" />
                </ToDoSectionHeader>
                <ToDoInputContainer darkMode={darkMode}>
                    <ToDoCheckBox type="checkbox" />
                    <ToDoInput onKeyDownCapture={e=>addActivity(e,e.target.value,toDoList,setToDoList)} darkMode={darkMode} type="text" placeholder="Create a new todo…"/>
                </ToDoInputContainer>
                <ToDoListContainer  darkMode={darkMode}>
                {toDoList.list.map(user =>
                    <ToDoListElement key={user.id}>
                        <ToDoCheckBox type="checkbox" onClick={()=>setCompleted(user.id,toDoList,setToDoList)} checked={user.completed}></ToDoCheckBox>
                        <ToDoListElementText  isChecked={user.completed} darkMode={darkMode}>{user.concept}</ToDoListElementText>
                    </ToDoListElement>
                )}
                    <ToDoListFooter>
                        <p>{toDoList.list.length} items left</p>
                        <ToDoListFilterContainer>
                            <ToDoListFilter onClick={()=>restoreList(toDoList,setToDoList,filters,setFilters)} darkMode={darkMode} className={filters.all && "active"}>All</ToDoListFilter>
                            <ToDoListFilter onClick={()=>viewActive(toDoList,setToDoList,filters,setFilters)} darkMode={darkMode} className={filters.active && "active"}>Active</ToDoListFilter>
                            <ToDoListFilter onClick={()=>viewCompleted(toDoList,setToDoList,filters,setFilters)} darkMode={darkMode} className={filters.completed && "active"}>Completed</ToDoListFilter>
                        </ToDoListFilterContainer>
                        <p onClick={()=>deleteCompleted(toDoList,setToDoList)}>Clear Completed</p>
                    </ToDoListFooter>
                </ToDoListContainer>
                <TodoListCaption>Drag and drop to reorder list</TodoListCaption>
            </ToDoSection>
        </MainContainer>
	</>
	);
};

const handleDarkMode = (darkMode,setDarkMode)=>{
    setDarkMode(!darkMode);
}

const addActivity = (event,text,toDoList,setToDoList)=>{

    if(event.key === 'Enter' && text!==''){
        event.target.value= "";
        const list = [...toDoList.listBackup];
        list.push({id: v4(),
            concept:text,
            completed: false});
            setToDoList({...toDoList,
                list,
                listBackup:list
        
            });
      }

}
const setCompleted = (id,toDoList,setToDoList)=>{
    let pos;
    const list = [...toDoList.listBackup];
    for (let index = 0; index < list.length; index++) {
        if (list[index].id===id) {
            pos = index;
            break;
        }
    }

    list[pos].completed=!list[pos].completed;
    
    setToDoList({...toDoList,
        list,
        listBackup:list

    });
      
}

const deleteCompleted = (toDoList,setToDoList)=>{
        const list = [...toDoList.listBackup];
        const listFiltered=[];
        list.forEach(element => {
            if (!element.completed) {
                listFiltered.push(element);
            }
        });
        setToDoList({...toDoList,
            list:listFiltered,
            listBackup:listFiltered
    
        });
}
const restoreList = (toDoList,setToDoList,filters,setFilters)=>{
        const list = [...toDoList.listBackup];
        
        setToDoList({...toDoList,
            list,
            listBackup:list
    
        });
        setFilters({...filters,
            all:true,
            active:false,
            completed:false
    
        });
}
const viewActive = (toDoList,setToDoList,filters,setFilters)=>{
        const list = [...toDoList.listBackup];
        const listFiltered=[];
        list.forEach(element => {
            if (!element.completed) {
                listFiltered.push(element);
            }
        });
        setToDoList({...toDoList,
            list:listFiltered

        });
        setFilters({...filters,
            all:false,
            active:true,
            completed:false
    
        });
}
const viewCompleted = (toDoList,setToDoList,filters,setFilters)=>{
        const list = [...toDoList.listBackup];
        const listFiltered=[];
        list.forEach(element => {
            if (element.completed) {
                listFiltered.push(element);
            }
        });
        setToDoList({...toDoList,
            list:listFiltered

        });
        setFilters({...filters,
            all:false,
            active:false,
            completed:true
    
        });
}

export default Main;
