export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const editTodo = (newText) => {
  return {
    type: 'EDIT_TODO',
    text: newText
  }
}