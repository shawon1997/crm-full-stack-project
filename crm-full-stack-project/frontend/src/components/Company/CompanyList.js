import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies } from "../../redux/actions/companyActions";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CompanyList = () => {
  const dispatch = useDispatch();
  const { companies, loading, error } = useSelector((state) => state.company);
  console.log("mfmmf", companies);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <div className="p-5">
      <div className="d-flex justify-content-between">
        <h2>Company Profiles</h2>
        <button
          className="btn btn-danger"
          onClick={() => navigate("/create-company")}
        >
          Add Company
        </button>
      </div>
      <hr />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {companies?.length > 0 ? (
        <ul>
          {companies?.map((company) => {
            return (
              <div key={company?.id} className="d-flex">
                <li>
                  {company.name} - {company.website}
                </li>
                  <button className="btn" onClick={()=>navigate(`/update-company/${company?.id}`)}>
                    <i className="fas fa-edit"></i>
                  </button>
              </div>
            );
          })}
        </ul>
      ) : (
        <div className="p-5">No Data Found</div>
      )}
    </div>
  );
};

export default CompanyList;
