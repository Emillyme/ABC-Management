import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      isSidebarCollapsed: false,  // Estado inicial para sidebar
      isDarkMode: false,         // Estado inicial para dark mode

      toggleSidebar: () =>
        set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),

      toggleDarkMode: () =>
        set((state) => {
          const newDarkMode = !state.isDarkMode;
          // Atualiza a classe no documento para refletir o modo escuro
          if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', newDarkMode);
          }
          return { isDarkMode: newDarkMode };
        }),
    }),
    {
      name: 'ui-preferences-storage', // Nome da chave para o localStorage
    }
  )
);

export default useStore;
