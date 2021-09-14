import { React, useState , useEffect} from 'react'
import "./index.css"
const getLocalData = ()=>{
    const lists = localStorage.getItem("mytodolist")

    if(lists){
        return JSON.parse(lists)

    }else{
        return[]
    }
}

const Todo = () => {

    const [inputdata, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData())

    const addItems = () => {
        if (!inputdata) {
            alert("please die")
        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData])
            setInputData("");
        }
    }

    const deleteItem = (index)=>{
        const updatedItem = items.filter((curElem)=>{
            return curElem.id !== index
        })
        setItems(updatedItem)
    }
    const removeAll  = ()=>{
        setItems([])
    }

    useEffect(()=>{
        localStorage.setItem("mytodolist",JSON.stringify(items))

    },[items])



    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                    
                        <img src="./images/todo.svg" alt="todo" />
                        <figcaption>add your list here</figcaption>


                    </figure>
                   
                     <div className="addItems">
                        <input type="text" placeholder="✍ Add Items"
                            className="form-control"
                            value={inputdata}
                            onChange={(event) => setInputData(event.target.value)}

                        />
                        <i className="fa fa-plus add-btn" onClick={addItems}></i>

                    </div>
                    <div className="showItems">
                        {items.map((curElem, index) => {
                            return (
                                <div className="eachItem" key="index">
                                    <h3>{curElem.name}</h3>
                                    <div className="todo-btn"></div>
                                    <i className="far fa-edit add-btn"></i>
                                    <i className="far fa-trash-alt add-btn"
                                     onClick={() => deleteItem(curElem.id)}></i>
                                </div>
                            )
                        })}



                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All"
                        onClick={removeAll}>
                            <span>Check List</span>
                        </button></div>
                </div>




            </div>
        </>
    )
}

export default Todo
