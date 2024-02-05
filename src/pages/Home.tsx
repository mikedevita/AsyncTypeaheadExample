import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Heading, AddRequestForm } from "../components";
import { NewRequest, Request } from "../types";
import { FormikHelpers } from "formik";
import requestService from "../services/RequestService";

function HomeComponent() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmitRequestForm = (values:NewRequest, actions:FormikHelpers<NewRequest>) => {
    
    console.log(values);

    requestService
    .createRequest(values)
    .then((request:Request) => {
      console.log(request);

      setRequests([...requests, request]);
      setLoading(false);
      actions.setSubmitting(false);
    })
    .catch((error) => {
      console.log(error);
      actions.setSubmitting(false);
    });
    
  };


  useEffect(() => {
    console.log("Home component mounted");
  });

  return (
    <div id="Home">
      <Container>
        <Heading heading="Home" />
        <AddRequestForm
          onSubmit={handleSubmitRequestForm}
        />
        <Row>
          <Col>
            <h4>Current Requests</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <pre>{JSON.stringify(requests, null, 2)}</pre>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeComponent;
