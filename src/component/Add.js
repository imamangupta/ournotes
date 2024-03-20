import React, { useState } from 'react'


export default function Add() {

  // const host = "http://localhost:5000";
  const host = "https://ournotes-back.vercel.app";
  const [credential, setCredential] = useState({ title: '', password: '', contant:'',author:'' });


  const addData = async (e) => {
    e.preventDefault();
 
    const response = await fetch(`${host}/data/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ head: credential.title, contant: credential.contant, password: credential.password, author:credential.author })
    });
    const json = await response.json();
 
    if (json) {
      console.log(json);
      setCredential({title:'',contant:'',password:'',author:''})
      document.getElementById('closeaddd').click()

    }
  }


  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }





  return (
    <>


      <div className='addData_sty' >

        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Data
        </button>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Notes</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Topic Name</label>
                <input id="title" value={credential.title} type='text' onChange={onChange} name="title" className='input_field' class="form-control" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Author</label>
                <input id="author" value={credential.author} type='text' onChange={onChange} name="author" className='input_field' class="form-control" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input id="password" value={credential.password} type='text' onChange={onChange} name="password" className='input_field' class="form-control" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Enter Data</label>
                <textarea  id="contant" value={credential.contant} type='text' onChange={onChange} name="contant" class="form-control"  rows="3"></textarea>
              </div>
              <p>All input are compulsory.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id='closeaddd' data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={addData}  class="btn btn-primary" disabled={credential.password.length < 1 || credential.title.length < 1 || credential.contant.length < 1 || credential.author.length < 1 }>Add Data</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
