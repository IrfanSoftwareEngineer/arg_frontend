import React from "react";
import styled from "styled-components";


const OurServices2 = () => {


    const ListGroupItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    font-size: 1.2rem;
  `;

  const Icon = styled.i`
    margin-right: 10px;
  `;

  const ListGroup = styled.ul`
    margin-top: 20px;
    padding-left: 0;
    list-style: none;
  `;


  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Our Services</h2>
        <ul className="list-group text-center">
          <ListGroup className="list-group text-center">
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-globe me-3"></Icon> Website Building
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-mobile-alt me-3"></Icon> App Building
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-file-alt me-3"></Icon> Resume Builder
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-paint-brush me-3"></Icon> Logo Designer
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-shopping-cart me-3"></Icon> E-commerce
              Solutions
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-search me-3"></Icon> SEO Services
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-ad me-3"></Icon> Digital Marketing
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-cogs me-3"></Icon> Custom Software
              Development
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-database me-3"></Icon> Database Management
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-cloud me-3"></Icon> Cloud Services
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-bullhorn me-3"></Icon> Social Media
              Management
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-chart-line me-3"></Icon> Business
              Analytics
            </ListGroupItem>
          </ListGroup>
        </ul>
      </div>
    </>
  );
};

export default OurServices2;
