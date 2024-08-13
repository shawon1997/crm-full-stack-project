import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CreateAdmin from "../components/Admin/CreateAdmin";
import UpdateAdmin from "../components/Admin/UpdateAmin";
import AdminList from "../components/Admin/AdminList";
import CreateCompany from "../components/Company/CreateCompany";
import CompanyList from "../components/Company/CompanyList";
import UpdateCompany from "../components/Company/UpdateCompany";
import CreateEmployee from "../components/EmployeeManagement/CreateEmployee";
import UpdateEmployee from "../components/EmployeeManagement/UpdateEmployee";
import EmployeManagementList from "../components/EmployeeManagement/EmployeManagementList";
import CreateVisit from "../components/Visit/CreateVisit";
import UpdateVisit from "../components/Visit/UpdateVisit";
import VisitList from "../components/Visit/VisitList";
import Navbar from "../components/Navbar";

const RouteFile = () => {
  return (
    <>
    <Router>
    <Navbar /> 
      <Routes>
        <Route path="/create-company" element={<CreateCompany />} />
        <Route path="/update-company/:id" element={<UpdateCompany/>} />
        <Route path="/" element={<CompanyList />} />
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route path="/update-admin/:id" element={<UpdateAdmin />} />
        <Route path="/list-admins" element={<AdminList />} />
        <Route path="/create-employee" element={<CreateEmployee />} />
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
        <Route path="/list-employes" element={<EmployeManagementList />} />
        <Route path="/create-visit" element={<CreateVisit />} />
        <Route path="/update-visit/:id" element={<UpdateVisit/>} />
        <Route path="/list-visits" element={<VisitList/>} />
      </Routes>
    </Router>
    </>
  );
};

export default RouteFile;
