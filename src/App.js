import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PastPosts from './pages/PastPosts';
import WritePost from './pages/WritePost';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<WritePost />} />
            <Route path="/writepost" element={<WritePost />} />
            <Route path="/pastposts" element={<PastPosts />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
 // have to create a seperate home component; only component 2 pages share is the navbar 