import React from 'react';
import {Table} from 'reactstrap'
import '../cssStuff/delete.css'


const DisplayItems = (props) => {
    
        return(
            <div>
                <h3>Items</h3>
                <hr />
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
            { 
                props.property.map((properties, id) => {
                    // console.log(properties.id)
                    return (
                        <tr key={id}>
                            <th scope='row'>{properties.id}</th>
                            <td>{properties.randomObject}</td>
                        </tr>
                    )
                })
            }
                </tbody> 
            </Table>
            </div>
        )   
       
} 

export default DisplayItems; 