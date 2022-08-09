import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/api/'

const CompEditTask = () => {
    const [title, setTitle] = useState('')    
    const [description, setDescription] = useState('')   
    const [responsible, setResponsible] = useState('')   
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+'tasks/'+id, {
            title: title,
            description: description,
            responsible: responsible
        }).then(function (res) {
            
            console.dir(res.data); // we are good here, the res has the JSON data
            alert(res.data);
            navigate('/task');
        })
        .catch(function (err) {
            console.error(err);
            alert(err.message);
        })
    }

    useEffect( ()=>{
        getTaskById()
    },[])

    const getTaskById = async () => {
        await axios.get(URI+'tasks/'+id)
        .then(function (res) {
            setTitle(res.data.title)
            setDescription(res.data.description)
            setResponsible(res.data.responsible)
        })
        .catch(function (err) {
            console.error(err);
            alert(err.message);
        })
       
    }

    return (
        <div>
        <h3>Editar Tarea</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Tarea</label>
                <input
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Descripción</label>
                <textarea
                    value={description}
                    onChange={ (e)=> setDescription(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>     
            <div className="mb-3">
                <label className="form-label">Responsable</label>
                <input
                    value={responsible}
                    onChange={ (e)=> setResponsible(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>     
            <Link to={`/`} className='btn btn-info '><i className="fa-solid fa-circle-arrow-left"></i></Link> &nbsp;&nbsp;
            <button type="submit" className="btn btn-primary">Actualizar</button>
        </form>
    </div>
    )

}

export default CompEditTask