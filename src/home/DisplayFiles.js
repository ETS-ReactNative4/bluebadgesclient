import React from 'react';
import {Table} from 'reactstrap'
import '../cssStuff/displayFiles.css'

const DisplayFiles = (props) => {
    return(
        <div className='filing'>
            <h3>Stories</h3>
            <Table>
                {/* <thead>
                    <tr>
                        <th>Stories</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        props.property.map((properties, id) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{properties.userStory}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default DisplayFiles; 