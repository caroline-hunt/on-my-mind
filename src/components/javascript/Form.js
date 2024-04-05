import React, { useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Form() {
    const initialValues  = {
        title: '',
        body: ''
    };
    const [data,setData] = useState(initialValues)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

    const handleSubmit = e => {
        e.preventDefault()
        if (data.title && data.body){
            var postData = JSON.parse(window.localStorage.getItem('postData')) || []
            postData.push(data)
            window.localStorage.setItem('postData', JSON.stringify(postData))
            setData('','')

        }
        else{
            alert('Post is missing a title and/or body. Add both to post!');
        }
    }
    return (
      <div className="Form">
        <form method="post" onSubmit={handleSubmit}>
            <Card.Title><input name="title"  type="text" placeholder='Enter title here...' value={data.title || ''}  onChange={handleChange} style={{ width: "400px" }} /></Card.Title>
            <Card.Text><textarea name="body" type="text" placeholder="What is on your mind?" value={data.body || ''} onChange={handleChange} rows={4} cols={40} style={{ width: "500px", padding:"10px" }}/></Card.Text>
            <Button type="submit" variant="primary" size="sm">Post</Button>
        </form>
      </div>
    );
  }
  
  export default Form;