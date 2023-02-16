import { createContext } from 'react';
import * as React from 'react';
import { theme } from './theme';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};
const ThemeContexr = createContext(theme);

// export const ThemeContextProvider=({children})
