import{useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import employeeService from "../services/employee.service";

import{Link} from "react-router-dom";
const EmployeesList =() =>{
  const[employees,setEmployee]=useState([]);

useEffect(()=>
{
init();
  
},[])

const init=() =>{
  employeeService.getAll()
.then(response =>{
  console.log('Print Data',response.data);
  setEmployee(response.data);
})
.catch(error =>{
    console.log('something went wrong',error);
});

}

const handleDelete=id=>{
  employeeService.remove(id)
  .then(response =>{
    console.log('Employee delete succefully', response.data);
    init();
  })
  .catch(error =>{
    console.log('something went wrong',error);
  })
}

return(
  <div className="container">
    <h3>Employees Information</h3>
    <div>
      {/* <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link> */}
      <a className=" btn btn-primary mb-2" href="/add">Add Employee  </a>
       <hr/>
      
      <table border="1" cellpadding="10" className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
        <th>Employee Id</th>
        <th>Employee Name</th>
        <th>Employee Department</th>
        <th>Employee Salary</th>
        <th>Employee City</th>
        <th>Employee Shop-Id</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {
        employees.map(employee =>(
          <tr key={employee.id}>
         <td> {employee.emp_id}</td>
         <td> {employee.emp_name}</td>
         <td> {employee.emp_dep}</td>
         <td> {employee.emp_salary}</td>
         <td> {employee.emp_city}</td>
         <td> {employee.shop_id}</td>
         <td>
          <Link className="btn btn-info" to={'/employees/edit/${employee.id}'}> Update </Link>
          
          
          <button className="btn btn-danger ml-2" onClick={(e)=>{handleDelete(employee.emp_id)
            }}> Delete </button>
          
         </td>
         </tr>
        )) 
      }
      </tbody>
      </table>
    </div>
  </div>
 

);
}
export default EmployeesList;