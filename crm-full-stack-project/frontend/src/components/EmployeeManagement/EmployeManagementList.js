import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listAdmins } from '../../redux/actions/adminAction';
import { useNavigate } from 'react-router-dom';

const EmployeManagementList = () => {
    const dispatch = useDispatch();
    const admins = useSelector((state) => state.admin.admins);
  const navigate=useNavigate()
    useEffect(() => {
      dispatch(listAdmins());
    }, [dispatch]);
  
    return (
      <div className='p-5'>
        <div className="d-flex justify-content-between">
        <h2>Employee Profiles</h2>
        <button
          className="btn btn-danger"
          onClick={() => navigate("/create-employee")}
        >
          Add
        </button>
      </div>
      <hr />
        <div className='tableDesign'>
        <table class="table">
          <thead>
            <tr>
              <th className='tableHeaderDesign'>ID</th>
              <th className='tableHeaderDesign'>Company ID</th>
              <th className='tableHeaderDesign'>Name</th>
              <th className='tableHeaderDesign'>Email</th>
              <th className='tableHeaderDesign'>Phone</th>
            </tr>
          </thead>
          <tbody>
            {admins?.map((admin) => (
              <tr key={admin.id}>
                <td className='tableHeaderDesign'>{admin.id}</td>
                <td>{admin.company_id}</td>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  };
  

export default EmployeManagementList
