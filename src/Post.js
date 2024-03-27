import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Post.css";

function Post() {

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Saving input to local storage - future update will change send input to database
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        // reset form 
        e.target.reset();
    }
    return (
      <div className="Post">
        < div class = "row">
            <Card className="text-center" style={{ width: '40rem' }} bg="light" text='dark' border="primary">
                <Card.Header>Create a New Post!</Card.Header>
                <Card.Body>
                    <form method="post" onSubmit={handleSubmit}>
                        <Card.Title><input name="postTitle"  type="text" placeholder='Enter title here...'style={{ width: "400px" }} /></Card.Title>
                        <Card.Text><textarea name="postBody" type="text" placeholder="What is on your mind?"rows={4} cols={40} style={{ width: "500px", padding:"10px" }}/></Card.Text>
                        <Button type="submit" variant="primary" size="sm">Post</Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
      </div>
    );
  }
  
  export default Post;