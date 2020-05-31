import React, { Component } from 'react';
import './footer.css';
import { Button } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small mdb-color pt-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Connect With Leads
              </h6>
              <p>
                <a href="#">Find New Prospects</a>
              </p>
              <p>
                <a href="#">Email Tracking</a>
              </p>
              <p>
                <a href="#!">Sales Email Templates</a>
              </p>
              <p>
                <a href="#!">Click to Call Your Leads Angular</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Connect With Leads
              </h6>
              <p>
                <a href="#!">Find New Prospects</a>
              </p>
              <p>
                <a href="#!">Email Tracking</a>
              </p>
              <p>
                <a href="#!">Sales Email Templates</a>
              </p>
              <p>
                <a href="#!">Click to Call Your Leads Angular</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Close and Manage Leads
              </h6>
              <p>
                <a href="#!">Document Tracking Tool</a>
              </p>
              <p>
                <a href="#!">Meeting Schedule Tool</a>
              </p>
              <p>
                <a href="#!">Sales Automation Tool</a>
              </p>
              <p>
                <a href="#!">Lead Management Tool</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Support and Tools
              </h6>
              <p>
                <a href="#!">HubSpot Partners</a>
              </p>
              <p>
                <a href="#!">Join a Local User Group</a>
              </p>
              <p>
                <a href="#!">PieSync Integrations</a>
              </p>
              <p>
                <a href="#!">HubSpot Templates</a>
              </p>
            </div>
          </div>
          <hr />
          <Button variant="light" size="lg" block>
            Contact Hub Support
          </Button>
          <hr />
          <div className="row d-flex align-items-center">
            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
