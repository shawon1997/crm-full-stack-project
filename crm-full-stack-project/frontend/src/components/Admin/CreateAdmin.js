import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAdmin } from "../../redux/actions/adminAction";

const CreateAdmin = () => {
  const [company_id, setCompanyId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company_id || !name || !email || !phone) {
      setError("All fields are required");
      return;
    }

    dispatch(createAdmin({ company_id, name, email, phone }));
    setCompanyId("");
    setName("");
    setEmail("");
    setPhone("");
    setError("");
  };

  return (
    <div className="p-5">
      <h2>Create Admin Profile</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="col-md-3 mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Company ID"
            value={company_id}
            onChange={(e) => setCompanyId(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-3">
          {" "}
          <button className="form-control btn btn-danger" type="submit">
            Create Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAdmin;
