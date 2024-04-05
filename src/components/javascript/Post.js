import Card from 'react-bootstrap/Card';
import Form from './Form';
function Post() {
    return (
      <div className="Post">
        <div className='row'>
          <div className='column'>
            <Card className="text-center" style={{ width: '40rem' }} bg="light" text='dark' border="primary">
                <Card.Header>Create a New Post!</Card.Header>
                <Card.Body>
                    <Form />
                </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
  
  export default Post;