import '../css/TodoCreate.css'

function TodoCreate() {
  return (
    <div>
      <div className='todo-create-parent'>
        <input  placeholder='Bir todo elave edin' className='todo-input' type="text" />
        <button className="todo-create-button">Elave et </button>
      </div>
    </div>
  )
}

export default TodoCreate
