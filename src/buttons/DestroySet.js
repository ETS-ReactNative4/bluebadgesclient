import React from 'react';
import { Table, Button } from 'reactstrap';
import '../cssStuff/delete.css'

const DestroySet = (props) => {
    return (
        <div>
            <h3>Situations</h3>
            <hr />
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Situations</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        props.settingsData.map((setting, id) => {
                            // console.log(setting.id)
                            return (
                                <tr key={id}>
                                    <th scope='row'>{setting.id}</th>
                                    <td>{setting.objectSetting}</td>
                                    <td>            
                                        <Button className="delete" id={setting.id} onClick={props.delete} >Delete</Button>|
                                        <Button className="update" id={setting.id} onClick={event => props.update(event, setting)} >Update</Button>
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

export default DestroySet;