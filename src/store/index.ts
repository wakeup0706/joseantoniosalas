import { authStore } from "./auth.store"; // Ensure you have the correct import for authStore
export * from "./types"; // Exporting types from your types file

export const useAppStore = {
  authStore,
};
