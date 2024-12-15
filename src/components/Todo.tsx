import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../css/Todo.css'
// ? import { MdOutlineDownloadDone } from "react-icons/md";
function Todo() {
  return (
    <div>
      <div className="todo-parent">
        <div className="todo-text">Ben ilk todoyum:</div>
       <div> 
        <IoIosRemoveCircle  className="todo-icon"/>
        <FaEdit className="todo-icon" />
        </div>
      </div>
    </div>
  )
}

export default Todo
