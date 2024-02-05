import React from 'react'
import { Col, Row } from 'react-bootstrap'


export interface HeadingProps {
  heading: string;
}

export function Heading(props:HeadingProps) {
  return (
    <Row>
      <Col>
        <h3>
          {props.heading}
        </h3>
      </Col>
    </Row>
  )
}