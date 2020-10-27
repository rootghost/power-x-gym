import React from 'react';
import { useState } from 'react';

const Fileupload = () => {
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null)

    const handleBlur = (e) =>{
        const data = {...info};
        data[e.target.name] = e.target.value;
        setInfo(data)
    }
    const handleChange = (e) =>{
        const data = e.target.files[0];
        setFile(data)
    }
    const handleSubmit = (e) =>{
        const formData = new FormData();
        formData.append("title",info.title);
        formData.append("file",file);

        console.log(formData.values())

        fetch("http://localhost:5000/service",{
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert("file sent")
            }
            else{
                alert("file not sent")
            }
        })
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input onBlur={handleBlur} className="form-control" name="title" type="text"/>
                </div>
                <div className='form-group'>
                    <input onChange={handleChange} className="form-control" type="file"/>
                </div>
                <button className="btn btn-primary">Submit file</button>
            </form>
        </div>
    );
};

export default Fileupload;