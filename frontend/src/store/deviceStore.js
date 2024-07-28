// store.js
import { create } from "zustand";

const useDeviceStore = create((set) => ({
  isMobile: window.innerWidth <= 768,
  setIsMobile: (isMobile) => set({ isMobile }),
}));

window.addEventListener("resize", () => {
  const isMobile = window.innerWidth <= 768;
  useDeviceStore.getState().setIsMobile(isMobile);
});

export default useDeviceStore;
