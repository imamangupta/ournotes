import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ViewData() {
  let { noteid } = useParams();


  const [noteData, setNoteData] = useState([]);

  const host = "http://localhost:5000";
  const fetchData = async () => {

    const uresponse = await fetch(`${host}/data/viewone`, {
      method: 'GET',
      headers: {
        'dataid': noteid
      }
    });

    const userdata = await uresponse.json();
    console.log(userdata);
    setNoteData(userdata)
  }


  useEffect(() => {
    fetchData();

  }, [])


  const copyData = () => {
    navigator.clipboard.writeText(noteData[0]?.contant);
    alert('Copied');
  }


  return (
    <>
      <button class="btn btn-primary m-2" onClick={copyData}>copy code</button>
      {/* <div>{noteData? noteData[0]?.contant :'no data'}</div> */}
      <div>
        <div style={{width:"1000px"}}>

          <textarea id="contant" value={noteData[0]?.contant} type='text' name="contant" class="form-control"  rows="20"></textarea>
        </div>
      </div>
    </>
  )
}
