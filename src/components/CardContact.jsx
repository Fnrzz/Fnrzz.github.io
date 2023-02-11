import { Card, Form, Button } from "react-bootstrap";

import "../assets/css/CardContact.css";

const CardContact = () => {
  return (
    <Card className="card-contact">
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="card-contact-label ">
              Alamat Email :
            </Form.Label>
            <Form.Control type="email" className="card-contact-input" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="card-contact-label ">Pesan :</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              className="card-contact-input"
            />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            className="card-contact-button"
          >
            Kirim
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CardContact;
