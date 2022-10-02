import { Spinner as BsSpinner, Row, Col } from 'react-bootstrap';

export function Spinner() {
  return (
    <Row style={{ alignSelf: 'center', marginBlock: '1rem' }} >
      <Col>
        <BsSpinner animation="border" />
      </Col>
    </Row>
  )
} 