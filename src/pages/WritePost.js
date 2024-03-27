import BlogNavbar from '../components/BlogNavbar';
import Post from '../components/Post';

function WritePost() {
    return (
      <div className="WritePost">
        <BlogNavbar/>
        <div className='content'>
            <Post/>
        </div>
      </div>
    );
  }
  
  export default WritePost;