import React, { useEffect, useState } from 'react'
import useApiStore from '@/app/state/api';

type BoardProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
};
  
const taskStatus = [
    "To Do", 
    "Work In Progress", 
    "Under Review", 
    "Completed"
];

const BoardView = ({setIsModalNewTaskOpen, id}: BoardProps) => {
    const { tasks, isLoading, error, fetchTasks } = useApiStore((state) => ({
        tasks: state.tasks,
        isLoading: state.isLoading,
        error: state.error,
        fetchTasks: state.fetchTasks,
      }));

    const [updateTaskStatus] = useUpdateTaskStatusMutation
    const moveTask = (taskId: number, toStatus: string) => {
        updateTaskStatus({})
    }

    useEffect(() => {
        if (id) {
            fetchTasks(Number(id)); // Fetch tasks for the project ID
        }
        }, [id, fetchTasks]);

  return (
    <div>index</div>
  )
}

export default BoardView