import { create } from "zustand";
import axios from "axios";

// Tipos
export interface Project {
  id: number;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status?: string;
  priority?: string;
  tags?: string;
  startDate?: string;
  dueDate?: string;
  points?: number;
  projectId: number;
  authorUserId?: number;
  assignedUserId?: number;

  author?: User;
  assignee?: User;
  comments?: Comment[];
  attachments?: Attachment[];
}

export interface User {
  userId?: number;
  username: string;
  email: string;
  profilePictureUrl?: string;
  teamId?: number;
}

export interface Team {
  teamId: number;
  teamName: string;
}

// Estado inicial e métodos da store
interface ApiStore {
  projects: Project[];
  tasks: Task[];
  users: User[];
  teams: Team[];
  isLoading: boolean;
  error: string | null;

  fetchProjects: () => Promise<void>;
  createProject: (project: Partial<Project>) => Promise<void>;
  fetchTasks: (projectId: number) => Promise<void>;
  createTask: (task: Partial<Task>) => Promise<void>;
  fetchUsers: () => Promise<void>;
  fetchTeams: () => Promise<void>;

  // Método para atualizar o status da tarefa
  updateTaskStatus: (taskId: number, status: string) => Promise<void>;
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export const useApiStore = create<ApiStore>((set) => ({
  projects: [],
  tasks: [],
  users: [],
  teams: [],
  isLoading: false,
  error: null,

  // Fetch all projects
  fetchProjects: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${baseURL}/projects`);
      set({ projects: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Create a new project
  createProject: async (project) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${baseURL}/projects`, project);
      set((state) => ({ projects: [...state.projects, response.data], isLoading: false }));
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Fetch tasks by project ID
  fetchTasks: async (projectId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${baseURL}/tasks?projectId=${projectId}`);
      set({ tasks: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Create a new task
  createTask: async (task) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${baseURL}/tasks`, task);
      set((state) => ({ tasks: [...state.tasks, response.data], isLoading: false }));
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Fetch all users
  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${baseURL}/users`);
      set({ users: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Fetch all teams
  fetchTeams: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${baseURL}/teams`);
      set({ teams: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Atualizar o status de uma tarefa
  updateTaskStatus: async (taskId, status) => {
    set({ isLoading: true, error: null });
    try {
      // Enviar a requisição PATCH para o backend
      await axios.patch(`${baseURL}/tasks/${taskId}/status`, { status });

      // Atualizar a tarefa no estado local
      set((state) => {
        const updatedTasks = state.tasks.map((task) =>
          task.id === taskId ? { ...task, status } : task
        );
        return { tasks: updatedTasks, isLoading: false };
      });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useApiStore;
