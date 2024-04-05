import BlogNavbar from '../components/javascript/BlogNavbar';
import Post from '../components/javascript/Post';

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