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
        <h2 className="text-center mb-4">Architectural & Building Solutions</h2>
        <ul className="list-group text-center">
          <ListGroup className="list-group text-center">
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-building me-3"></Icon> Facades for Modern Building
            </ListGroupItem>
            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-vector-square me-3"></Icon>
              Decorative Mirrors
            </ListGroupItem>

            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-table me-3"></Icon> Wardrobe Glass & Table Tops
            </ListGroupItem>

            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-briefcase me-3"></Icon> Corporate Office Glass
            </ListGroupItem>

            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-drafting-compass me-3"></Icon> Customized Glass Products
            </ListGroupItem>

            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-border-all me-3"></Icon> Glass Partitions
            </ListGroupItem>

            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-tools me-3"></Icon> Edge Polishing & Beveling
            </ListGroupItem>

            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-cogs me-3"></Icon> Drilling & CNC Glass Processing
            </ListGroupItem>

            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-shield-alt me-3"></Icon> Safety Glass
            </ListGroupItem>

            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-archway me-3"></Icon> Glass Canopies
            </ListGroupItem>

            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-layer-group me-3"></Icon> Glass Shelves
            </ListGroupItem>

            <ListGroupItem className="list-group-item d-flex align-items-center">
              <Icon className="fas fa-th-large me-3"></Icon> Glass Wall Cladding
            </ListGroupItem>
          </ListGroup>
        </ul>
      </div>
    </>
  );
};

export default OurServices2;
