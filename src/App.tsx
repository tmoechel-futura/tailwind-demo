import { useState } from "react";

interface BookProps {
  id: string;
  title: string;
}

function App() {
  const [books, setBooksState] = useState<BookProps[]>([])
  
  return (
    // mx is x marging
    <main>

    </main>
  )
}

export default App
