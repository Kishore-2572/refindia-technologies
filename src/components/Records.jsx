import React from 'react'
import '../css/records.css'
const Records = () => {
  return (
    <div className="container" data-aos="fade-in" data-aos-delay="100" data-aos-duration="2000">

  <ul className="timeline">
    <li>
      <div className="timeline-badge primary">
        {/* <i className="fa fa-check"></i> */}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h5 className="timeline-title">Title</h5>
          <p>
            <small className="text-muted">
              {/* <i className="fa fa-clock-o"></i> */}
              timeline
              </small>
          </p>
        </div>
        <div className="timeline-body">
          <p>Permissions to perform work for the Fort Smith (FOR) office were added by Ric Flair.</p>
          <a href="http:ubh.com"></a>
        </div>
      </div>
    </li>
    <li className="timeline-inverted">
      <div className="timeline-badge success">
        {/* <i className="fa fa-check"></i> */}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
        <h5 className="timeline-title">Title</h5>
          <p>
            <small className="text-muted">
              <i className="fa fa-clock-o"></i>
              timeline</small>
          </p>
        </div>
        <div className="timeline-body">
          <p>A new version of the W-9 document was approved.</p>
        </div>
      </div>
    </li>
    <li>
      <div className="timeline-badge danger">
        {/* <i className="fa fa-cog"></i> */}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
        <h5 className="timeline-title">Title</h5>
          <p>
            <small className="text-muted">
              <i className="fa fa-clock-o"></i>
               timeline</small>
          </p>
        </div>
        <div className="timeline-body">
          <p>The address data change was rejected.</p>
        </div>
      </div>
    </li>
    <li className="timeline-inverted">
      <div className="timeline-badge warning">
        {/* <i className="fa fa-calendar"></i> */}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
        <h5 className="timeline-title">Title</h5>
          <p>
            <small className="text-muted">
              <i className="glyphicon glyphicon-time"></i>
              timeline</small>
          </p>
        </div>
        <div className="timeline-body">
          <p>A change to the vendor TIN was requested.</p>
        </div>
      </div>
    </li>
    <li>
      <div className="timeline-badge info">
        <i className="fa fa-file-pdf-o"></i></div>
      <div className="timeline-panel">
        <div className="timeline-heading">
        <h5 className="timeline-title">Title</h5>
          <p>
            <small className="text-muted">
              <i className="glyphicon glyphicon-time"></i>timeline</small>
          </p>
        </div>
        <div className="timeline-body">
          <p>Bob uploaded a new version of the W-9 document. A vendor workflow for approval was initiated.</p>
        </div>
      </div>
    </li>
    <li className="timeline-inverted">
      <div className="timeline-badge success">
        <i className="fa fa-thumbs-o-up"></i></div>
      <div className="timeline-panel">
        <div className="timeline-heading">
        <h5 className="timeline-title">Title</h5>
          <p>
            <small className="text-muted">
              <i className="glyphicon glyphicon-time"></i> timeline</small>
          </p>
        </div>
        <div className="timeline-body">
          <p>The vendor was approved and added to the system.</p>
        </div>
      </div>
    </li>
  </ul>
</div>
  )
}

export default Records