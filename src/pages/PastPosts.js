import BlogNavbar from '../components/javascript/BlogNavbar';

function PastPosts() {
    var postData = JSON.parse(window.localStorage.getItem('postData'));

    return (
      <div className="PastPosts">
        <BlogNavbar/>
        <ul>
          {postData?.map((data, index) => (
            <li key={index}> 
            {data.title} 
            <p>{data.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PastPosts;