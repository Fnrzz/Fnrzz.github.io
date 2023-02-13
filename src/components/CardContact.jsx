import { Card } from "react-bootstrap";
import React, { useRef } from "react";

import "../assets/css/CardContact.css";

const CardContact = () => {
  const formRef = useRef(null);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbytqBtvIE5DRGagYLdwvyBa2wwRi4aqW5HqUAjnmVhj7ZengLZP3Zd8vqiXe5CtV1ZU/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    const btnKirim = document.querySelector(".btn-kirim");
    const btnLoading = document.querySelector(".btn-loading");
    const contactAlert = document.querySelector(".card-contact-alert");

    btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        contactAlert.classList.toggle("d-none");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className="card-contact">
      <Card.Body>
        <div className="alert alert-success d-none card-contact-alert">
          <strong>Terima Kasih!</strong>
        </div>
        <form
          method="post"
          onSubmit={handleSubmit}
          ref={formRef}
          name="submit-to-google-sheet"
        >
          <label
            for="nama"
            className="form-label card-contact-label fw-bold c1 f-12"
          >
            Nama :
          </label>
          <input
            type="text"
            className="form-control card-contact-input"
            id="nama"
            name="nama"
            required
          />

          <label
            for="email"
            className="form-label card-contact-label fw-bold c1 f-12"
          >
            Email :
          </label>
          <input
            type="text"
            className="form-control card-contact-input"
            id="email"
            name="email"
            required
          />

          <label
            for="pesan"
            className="form-label card-contact-label fw-bold c1 f-12"
          >
            Pesan :
          </label>
          <textarea
            className="form-control card-contact-input f-12"
            id="pesan"
            rows="3"
            name="pesan"
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-success rounded btn-kirim card-contact-button"
          >
            <i className="bi bi-send-fill me-1"></i> Kirim
          </button>

          <button
            className="btn btn-success btn-loading d-none card-contact-button"
            type="button"
            disabled
          >
            <span
              className="spinner-grow spinner-grow-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default CardContact;
