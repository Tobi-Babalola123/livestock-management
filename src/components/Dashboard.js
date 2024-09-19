import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="container mt-5">
      <section className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="hero-heading">
              Welcome to Our Livestock Management System
            </h1>
            <p>Manage your livestock with ease and efficiency.</p>
            <button className="hero-button">Get Started</button>
          </div>
          <div className="image-content">
            <img
              src="https://plus.unsplash.com/premium_photo-1722054522045-debe05e966e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Livestock Management"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <h1 className="text-center mb-5">Livestock Management Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Animal Management</h5>
              <p className="card-text">
                Manage animal details, track their health, productivity, and
                more.
              </p>
              <a href="/animals" className="btn btn-primary">
                Go to Animal Management
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Health Management</h5>
              <p className="card-text">
                Record vaccinations, medical treatments, and disease history.
              </p>
              <a href="/health" className="btn btn-primary">
                Go to Health Management
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Breeding Management</h5>
              <p className="card-text">
                Track breeding cycles, offspring details, and genetic lineage.
              </p>
              <a href="/breeding" className="btn btn-primary">
                Go to Breeding Management
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
