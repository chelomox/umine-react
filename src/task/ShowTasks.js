import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const URI = "http://localhost:8000/api/"

const CompShowTasks = () =>  {
    const [tasks, setTask] = useState ([])
    useEffect(() => {
        getTasks();
    }, [])

    //procedimiento para mostrar todas las tareas
    const getTasks = async () => {
        const resp = await axios.get(URI)
        setTask(resp.data);
    }

    //procedimiento para eliminar una tarea
    const deleteTask = async (id) => {
        await axios.delete(URI+'tasks/'+id)
        .then(function (res) {
            
            console.dir(res.data); // we are good here, the res has the JSON data
            alert(res.data);
            getTasks();
        })
        .catch(function (err) {
            console.error(err);
            alert(err.message);
        })

    }
    return (
        <div className='container'>
            <div className='row'>
                <div className = 'col'>
                    <p className="h1 fw-bold">CRUD de Tareas - Umine</p>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <div className="table-responsive" >
                        <table className='table table-bordered table-striped table-hover'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Id</th>
                                    <th>Tarea</th>
                                    <th>Descripci&oacute;n</th>
                                    <th>Responsable</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map (  (task) => (
                                        <tr key={task.id} >
                                            <td>{ task.id }</td>
                                            <td>{ task.title }</td>
                                            <td>{ task.description }</td>
                                            <td>{ task.responsible }</td>
                                            <td>
                                                <Link to={`/edit/${task.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                                <button onClick={ ()=>deleteTask(task.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>)
}

export default CompShowTasks