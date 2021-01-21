import React from 'react';
import Table from 'react-bootstrap/Table';
import  '../App.css';

function UserList(props) {
   
  const navigateProfile=(val)=>{
    props.navigateToprofile();
  }
    return (
      <div className="userlistsection">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list && props.list.data && props.list.data.map((item,key) => 
                    <tr key={item.id} onClick={()=>{props.navigateToprofile([item.first_name,item.last_name,item.email,item.avatar])}}>
                        <td >{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                    </tr>)}
                </tbody>
            </Table>
         
      </div>
    );
 
}

export default UserList;
