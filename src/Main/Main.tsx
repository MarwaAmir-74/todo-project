import useMain from './useMain'

const Main = () => {
const {darkMode,setDarkMode,todos,handleDone,inputRef,handleAddTodo,handleDeleteItem} = useMain()
    return (
        <div className={`min-h-screen flex items-center justify-center p-4 sm:p-6 transition-colors duration-300 ${darkMode
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-gray-900'
      }`}>
      <div
        className={`rounded-2xl p-4 sm:p-8 w-full max-w-md transition-colors duration-300 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-100'
        }`}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-4 px-3 py-1 rounded-lg bg-purple-500 hover:bg-purple-600 text-white">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <h1 className="max-sm:text-2xl text-3xl font-bold mb-6 text-center">📝 My Todo List</h1>

        <ul className="space-y-3 mb-6">
          {todos.map((todo, index) => (
              <li key={index} className="flex justify-between items-center">
                <span
            className={`cursor-pointer flex-1 min-w-0 max-w-full break-words p-3 rounded-xl shadow
                ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'}
                ${todo.completed ? (darkMode ? 'bg-purple-400 hover:bg-purple-500 line-through text-gray-900' : 'bg-green-200 line-through text-gray-500') : ''}
            `}
            onClick={() => handleDone(index)}>
            {todo.text}
            </span>
            <span className="cursor-pointer flex-shrink-0 ml-3" onClick={() => handleDeleteItem(index)}> ❌
            </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
        <input
            type="text"
            ref={inputRef}
            placeholder="Add a new task..."
            className={`flex-1 px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 
            ${darkMode
                ? 'bg-gray-700 text-gray-200'
                : 'bg-gray-100 text-gray-700 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]'
            }`}/>
        <button
            onClick={handleAddTodo}
            className="w-full sm:w-auto px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-xl shadow transition duration-300">
            Add
        </button>
        </div>

            </div>
            </div>
  )
}

export default Main