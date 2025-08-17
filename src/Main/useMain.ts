import React, { useRef, useState } from 'react'
import type { Todo } from './types'

const useMain = () => {

  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddTodo = () => {
    const text = inputRef.current?.value || ''
    if (text.trim() === '') return
    const newItem: Todo = { completed: false, text }
    setTodos([...todos, newItem])
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleDeleteItem = (index: number) => {
    const newItemsTodo = [...todos]
    newItemsTodo.splice(index, 1)
    setTodos(newItemsTodo)
  }

  const handleDone = (index: number) => {
    const newItemsTodo = [...todos]
    newItemsTodo[index].completed = !newItemsTodo[index].completed
    setTodos(newItemsTodo)
  }

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  React.useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])
  return {darkMode,setDarkMode,todos,handleDone,inputRef,handleAddTodo,handleDeleteItem}
}

export default useMain