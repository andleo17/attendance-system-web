import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';


export default function ContentAttendance(props) {
    const { a } = props;
    return (
        <tr key={a.id}>
            <td>{a.date}</td>
            <td>{a.id}</td>
            <td>{a.employeeCardId}</td>
            <td>{a.employee.name}</td>
            <td>{a.employee.lastname}</td>
            <td>{a.inHour}</td>
            <td>{a.outHour}</td> 
        </tr>    
    );
}
