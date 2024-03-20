import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Table() {
    const [noteData, setNoteData] = useState([]);
    const [deleteDataId, setDeleteDataId] = useState();
    const [notenamedelete, setNotenamedelete] = useState();

    const [credential, setCredential] = useState({ title: '', password: '', contant: '' });



    const host = "http://localhost:5000";
    const fetchData = async () => {

        const uresponse = await fetch(`${host}/data/view`, {
            method: 'GET',
        });
        const userdata = await uresponse.json();
        console.log(userdata);
        setNoteData(userdata)
    }



    const deletadatanow = async () => {
        const uresponse = await fetch(`${host}/data/deletedata`, {
            method: 'GET',
            headers: {
                'dataid': deleteDataId
            }
        });

        document.getElementById('deleteDataclase').click()

    }

    const deletadata = async (id,name) => {

        setDeleteDataId(id);
        setNotenamedelete(name);

    }

    const updateingData = async (id) => {

        const uresponse = await fetch(`${host}/data/viewone`, {
            method: 'GET',
            headers: {
                'dataid': id
            }
        });
        setDeleteDataId(id);
        const userdata = await uresponse.json();
        console.log(userdata);
        setCredential({ title: userdata[0].title, password: '', contant: userdata[0].contant })


    }

    useEffect(() => {
        fetchData();

    }, [])
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }



    
  const addData = async (e) => {
    e.preventDefault();
 
    const response = await fetch(`${host}/data/updatedata`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:deleteDataId, title: credential.title, contant: credential.contant })
    });
    const json = await response.json();
    console.log(deleteDataId);
    console.log(credential.title);
    console.log(credential.contant);
 
    if (json) {
      console.log(json);
      setCredential({title:'',contant:'',password:''})
      document.getElementById('closeaddd1').click()
    

    }
  }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "30px" }}>
                <div style={{ width: '1000px' }}>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sno</th>
                                <th scope="col">Title</th>
                                <th scope="col">Contant</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {noteData.map((element, myid) => {
                                return <tr key={myid}>
                                    <th scope="row">{myid+1}</th>
                                    <td>{element.title}</td>
                                    <td><Link to={`/viewdata/${element._id}`}> View</Link></td>
                                    <td>

                                        <button type="button" class="btn btn-primary m-2" onClick={() => updateingData(element._id)} data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                            <span class="material-symbols-outlined">edit</span>
                                        </button>
                                        <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" onClick={() => deletadata(element._id,element.title)} data-bs-target="#exampleModal1">
                                            <span class="material-symbols-outlined">delete</span>
                                        </button>

                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>




            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel2">update Notes</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Title</label>
                                <input id="title" value={credential.title} type='text' onChange={onChange} name="title" class="form-control" />
                            </div>
                            {/* <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">password</label>
                                <input id="password" value={credential.password} type='text' onChange={onChange} name="password" class="form-control" />
                            </div> */}
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Enter Data</label>
                                <textarea class="form-control" id="contant" value={credential.contant} type='text' onChange={onChange} name="contant" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" id="closeaddd1" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={addData}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel1">Delete Notes:- {notenamedelete}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" id='deleteDataclase' data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={deletadatanow}>Delete Data</button>
                        </div>
                    </div>
                </div>
            </div>









        </>
    )
}