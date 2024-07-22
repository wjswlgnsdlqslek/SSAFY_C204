import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
}));
export default useAuthStore;
