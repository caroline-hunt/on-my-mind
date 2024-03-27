import BlogNavbar from './BlogNavbar';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <BlogNavbar/>
      <div className='content'>
        <Post/>
      </div>
    </div>
  );
}

export default App;
