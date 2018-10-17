import React from 'react';
import {Table} from 'reactstrap'
import '../cssStuff/delete.css'


const DisplaySettings = (props) => {
    
        return(
            <div>
                <h3>Situations</h3>
                <hr />
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Situations</th>
                        </tr>
                    </thead>
                    <tbody>
            { 
                props.property.map((properties, id) => {
                    // console.log(properties.id)
                    return (
                            <tr key={id}>   
                             <th scope='row'>{properties.id}</th>
                             <td>{properties.objectSetting}</td> 
                           </tr>   
                    )
                })
            }
                </tbody>
                </Table>
            </div> 
        )    
       
} 

export default DisplaySettings;