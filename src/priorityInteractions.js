
const addPriorityColor = (newTodo) => {
  switch (newTodo.priority) {
    case 'Low': return '#729B79';
    case 'Medium': return '#FDE74C';
    case 'High': return '#931621';
    case '': return '#c2e1ff';
  }
}

export {addPriorityColor};