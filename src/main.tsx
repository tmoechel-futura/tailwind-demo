import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'
import BooksProvider from './context/BooksProvider.tsx'

// Concepts of this branch
// - Understand the useCallback hook
// - Understant that useEffect should contain the fetchBooks function 
//   as a dependency
// - Understand the Cleanup function that gets returned from useEffect 
// - not in this branch, was explained in video
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BooksProvider>
      {/* App is children of BooksProvider */}
      <App />
    </BooksProvider>
  </StrictMode>,
)
