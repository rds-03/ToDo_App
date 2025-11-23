export interface TodoType {
  id: string;
  task: string;
  isDone: boolean;
}

const todo: TodoType[] = [{
  id: '1',
  task: "Buy Apples",
  isDone: false
}];

export default todo;
