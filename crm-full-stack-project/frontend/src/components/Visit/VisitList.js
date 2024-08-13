import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listVisits } from '../../redux/actions/visitActions';
import { useNavigate } from 'react-router-dom';

const VisitList = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const visits =[];
  // const visits = useSelector((state) => state.visit);
  useEffect(() => {
    // dispatch(listVisits());
  }, [dispatch]);

  return (
    <div className="tableDesign p-5">
      <div className="d-flex justify-content-between">
        <h2>Visit List</h2>
        <button
          className="btn btn-danger"
          onClick={() => navigate("/create-visit")}
        >
          Add
        </button>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Admin ID</th>
            <th>Employee ID</th>
            <th>Service User ID</th>
            <th>Assigned Date</th>
            <th>Assigned Start Time</th>
            <th>Assigned End Time</th>
            <th>Status</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {visits?.map((visit) => (
            <tr key={visit.id}>
              <td>{visit.company_id}</td>
              <td>{visit.admin_id}</td>
              <td>{visit.emp_id}</td>
              <td>{visit.service_user_id}</td>
              <td>{visit.assigned_date}</td>
              <td>{visit.assigned_starttime}</td>
              <td>{visit.assigned_endtime}</td>
              <td>{visit.status}</td>
              <td>{visit.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitList;
