import React from 'react';
import '../cssStuff/delete.css'
import { Table, Button, } from 'reactstrap';

const DeleteObj = (props) => {
    return (
        <div>
            <h3>Items</h3>
            <hr />
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Items</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody> 
                    { 
                        props.objectsData.map((object, id) => {
                            // console.log(object.id)
                            return (
                                <tr key={id}>
                                    <th scope='row'>{object.id}</th>
                                    <td>{object.randomObject}</td>
                                    <td>            
                                        <Button className="delete" id={object.id} onClick={props.delete} >Delete</Button>|
                                        <Button className="update" id={object.id} onClick={event => props.updates(event, object)}>Update</Button>
                                    </td>
                                </tr> 
                            )
                        })
                    }
                </tbody> 
            </Table> 
        </div>
    )
} 

export default DeleteObj;