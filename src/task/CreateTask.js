import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/api/'

const CompCreateTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [responsible, setResponsible] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI+'tasks/', {title: title, description: description, responsible: responsible})
        .then(function (res) {
            
            console.dir(res.data); // we are good here, the res has the JSON data
            alert(res.data);
            navigate('/task');
        })
        .catch(function (err) {
            console.error(err);
            alert(err.message);
        })
    }   

    return (
        <div>
           <h3>Crear Tarea</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Tarea</label>
                    <input
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Descripción</label>
                    <textarea
                        value={description}
                        onChange={ (e)=> setDescription(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>    
                 <div className='mb-3'>
                     <label className='form-label'>Responsable</label>
                    <input
                        value={responsible}
                        onChange={ (e)=> setResponsible(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>
                 <Link to={`/`} className='btn btn-info '><i className="fa-solid fa-circle-arrow-left"></i></Link> &nbsp;&nbsp;
                 <button type='submit' className='btn btn-primary'>Crear</button>
           </form>
        </div>
    )
}

export default CompCreateTask