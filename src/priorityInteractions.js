
const addPriorityColor = (newTodo) => {
  switch (newTodo.priority) {
    case 'Low': return '#729B79';
    case 'Medium': return '#FDE74C';
    case 'High': return '#931621';

    // Making the priority icon invisible when the default priority is chosen
    case '': return 'transparent';
  }
}

export {addPriorityColor};