import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.component";
import tickets from "../../assets/data/dummy-tickets.json";
import { PageBreadcrub } from "../../components/breadcrumb/Breadcrub.component";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrub page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add new ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">Recently Added Tickets</Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
