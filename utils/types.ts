
// 前后端交互的 Task 格式，相比后端存储少了 rejecter_list
export type Task = {
  name: string,
  id: number,
  // PENDING = 1, RECRUITING = 2, IN PROGRESS = 3, COMPLETED = 4
  status: number,
  created_time: string,
  // total time limit to worker
  duration: number,
  // limit per annotation
  time_limit: number,
  category: number,
  dataset_size: number,
  assign_num: number,
  reward: number,
  assigner: number,
  thread_list: {
    id: number,
    accept_time: string,
    completed_num: string,
    review_status: number,
  }[],
  provide_test: boolean,
}

export const defaultTask: Task = {
  name: '',
  id: 0,
  status: 1,
  created_time: '',
  duration: 0,
  time_limit: 0,
  category: 0,
  dataset_size: 0,
  assign_num: 0,
  reward: 0,
  assigner: 0,
  thread_list: [],
  provide_test: false,
}
