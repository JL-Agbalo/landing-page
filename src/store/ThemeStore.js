import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
    persist(
        (set) => ({
            theme: 'light',
            
            toggleTheme: () => 
                set((state) => {
                    const newTheme = state.theme === 'light' ? 'dark' : 'light';
                    
                    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
                        if (newTheme === 'dark') {
                            document.documentElement.classList.add('dark');
                        } else {
                            document.documentElement.classList.remove('dark');
                        }
                    }
                    
                    return { theme: newTheme };
                }),
        }),
        {
            name: 'theme-storage',
            onRehydrateStorage: () => (state) => {
                if (typeof window !== 'undefined' && typeof document !== 'undefined') {
                    if (state?.theme === 'dark') {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                }
            },
        }
    )
);

export default useThemeStore;