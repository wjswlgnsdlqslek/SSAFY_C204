import { create } from "zustand";
import { getTodoList, createTodoRequest } from "../api/todoApi";

const useTodoStore = create((set) => ({
  events: [],
  fetchEvents: async () => {
    const events = await getTodoList();
    set({
      events,
    });
  },

  addEvent: async (newTodo) => {
    const event = await createTodoRequest(newTodo);
    set((state) => ({
      events: [...state.events, event],
    }));
    console.log(event);
    return true;
  },
}));
export default useTodoStore;
