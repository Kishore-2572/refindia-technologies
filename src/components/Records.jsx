import React from 'react';
import '../css/records.css';
const Records = () => {
  return (
    <div
      className="container"
      data-aos="fade-in"
      data-aos-delay="100"
      data-aos-duration="2000"
    >
      <ul className="timeline">
        <li>
          <div className="timeline-badge primary">
            {/* <i className="fa fa-check"></i> */}
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">Founded</h5>
              <p>
                <small className="text-muted">
                  {/* <i className="fa fa-clock-o"></i> */}
                  2018
                </small>
              </p>
            </div>
            <div className="timeline-body">
              <p>
                RefIndia technologies was founded by Vinay Kumar and his team
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge success">
            {/* <i className="fa fa-check"></i> */}
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">
                TamilNadu's top 10 manufacturer
              </h5>
              <p>
                <small className="text-muted">
                  <i className="fa fa-clock-o"></i>2020
                </small>
              </p>
            </div>
            <div className="timeline-body">
              <p>Organization listed in top 10 dairy product manufacturer</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge danger">
            {/* <i className="fa fa-cog"></i> */}
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">Foreign exports</h5>
              <p>
                <small className="text-muted">
                  <i className="fa fa-clock-o"></i>2021
                </small>
              </p>
            </div>
            <div className="timeline-body">
              <p>Started exporting to foreign countries</p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge warning">
            {/* <i className="fa fa-calendar"></i> */}
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h5 className="timeline-title">1300+ Customers</h5>
              <p>
                <small className="text-muted">
                  <i className="glyphicon glyphicon-time"></i>2022
                </small>
              </p>
            </div>
            <div className="timeline-body">
              <p>Client's growth has been increased in 2022</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Records;
