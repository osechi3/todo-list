
const addPriorityColor = (newTodo) => {
  switch (newTodo.priority) {
    case 'Low': return '#729B79';
    case 'Medium': return '#FDE74C';
    case 'High': return '#931621';
  }
}

export {addPriorityColor};