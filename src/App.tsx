import { Board, Sidebar } from './components';
import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path=":id" element={<Board />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
