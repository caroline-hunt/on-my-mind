import React, { useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Form() {
    const[title,setTitle] = useState(() => {
        console.log('run function')
        return ''
    })
    const[body,setBody] = useState(() => {
        console.log('run function')
        return ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        window.sessionStorage.setItem('title',JSON.stringify(title))
        window.sessionStorage.setItem('body',JSON.stringify(body))
        setTitle('')
        setBody('')
    }
    return (
      <div className="Form">
        <form method="post" onSubmit={handleSubmit}>
            <Card.Title><input name="postTitle"  type="text" placeholder='Enter title here...' value={title || ''} onChange={e => setTitle(e.target.value)} style={{ width: "400px" }} /></Card.Title>
            <Card.Text><textarea name="postBody" type="text" placeholder="What is on your mind?" value={body || ''} onChange={e => setBody(e.target.value)} rows={4} cols={40} style={{ width: "500px", padding:"10px" }}/></Card.Text>
            <Button type="submit" variant="primary" size="sm">Post</Button>
        </form>
      </div>
    );
  }
  
  export default Form;