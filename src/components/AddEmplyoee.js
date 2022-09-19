
import { useState } from "react";
import {  Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import employeeService from "../services/employee.service";

const AddEmployee = () => {
    const[emp_id, setEmp_id] = useState('');
    const[shop_id, setShop_id] = useState('');
    const[emp_name, setEmp_name] = useState('');
    const[emp_dep, setEmp_dep] = useState('');
    const[emp_salary, setEmp_Salary] = useState('');
    const[emp_city,setEmp_City]=useState('');
    const history = useHistory();
    const {id}=useParams();


    //  save employee data 
    const saveEmployee = (e) => {
        e.preventDefault();
        window.location.reload();
        
        const employee = {emp_id,shop_id,emp_name,emp_dep,emp_salary,emp_city,id};
        if (id) {
            //update 
            employeeService.update(employee)
                .then(response => {
                    console.log('Employee data updated successfully', response.data);
                    history.push('/el');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create 
            employeeService.create(employee)
            .then(response => {
                console.log("employee added successfully", response.data);
                history.push('/el');
            })
            .catch(error => {
                console.log('something went wroing', error);
            });
        }
        window.location.reload();
    }
// useEffect hooks is use to navigate get employees service information
    useEffect(() => {
        if (id) {
            employeeService.get(id)
                .then(employee => {
                    setEmp_id(employee.data.emp_id);
                    setShop_id(employee.data.shop_id);
                    setEmp_name(employee.data.emp_name);
                    setEmp_dep(employee.data.emp_dep);
                    setEmp_Salary(employee.data.emp_salary);
                    setEmp_City(employee.data.emp_city);
                    
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        }
    },[] );
    return(
        
        <div className="container">
            
            {/*  to add new employees data here */}
            <h3>Add Employee</h3>
            <hr/>
            <form>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="emp_id"
                        value={emp_id}
                        onChange={(e) => setEmp_id(e.target.value)}
                        placeholder="Enter Employee Id"
                    />

                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="shop_id"
                        value={shop_id}
                        onChange={(e) => setShop_id(e.target.value)}
                        placeholder="Enter Employee Shop_id"
                    />

                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="emp_name"
                        value={emp_name}
                        onChange={(e) => setEmp_name(e.target.value)}
                        placeholder="Enter Employee Name"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="emp_dep"
                        value={emp_dep}
                        onChange={(e) => setEmp_dep(e.target.value)}
                        placeholder="Enter Employee Department"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="emp_salary"
                        value={emp_salary}
                        onChange={(e) => setEmp_Salary(e.target.value)}
                        placeholder="Enter Employee Salary"
                    />
                </div>
                <div className="form-group mb-2">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="emp_city"
                        value={emp_city}
                        onChange={(e) => setEmp_City(e.target.value)}
                        placeholder="Enter Employee City"
                    />
                </div>
                {/* save employes form data */}
                <div >
                    <button className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save Employee Information</button>
                </div>
                
            </form>
            <hr/>
          {/* to navigate the back to the employees information list page */}
            <Link className=" btn btn-primary mb-2" to="/el" >Back to List  </Link>
          
        </div>
        
    )
    
}

export default AddEmployee;