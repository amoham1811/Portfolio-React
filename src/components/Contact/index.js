import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss';
import 'leaflet/dist/leaflet.css';
import Map from '../Contact/map';

export const Contact = () => {
  const form = useRef();
  // const position =[52.46536, -1.89233];
  //const position =[51.505, -0.09];
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_56u0d49', 'template_f9p576c', form.current, 'L-nO9vg9Lgc7_mvYK')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message successfully sent!')
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <div className='container-fluid'>
      <div className="contact-page">
        <div className="text-zone">
          <h1>
            Contact me!
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using the form below form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className='ul'>
                <div className="li half">
                  {/* <label>Name</label> */}
                  <input placeholder="Name" type="text" name="name" required />
                </div>
                <div className="li half">
                  {/* <label>Email</label> */}
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className='li'>
                  {/* <label>Subject</label> */}
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className='li'>
                  {/* <label>Message</label> */}
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className='li'>
                  <input type="submit" className="flat-button" value="Send" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="info-map">
          Arshad Mohammed,
          <br />
          United Kingdom,
          <br />
          17-21 Vaughton St South <br />
          Birmingham <br />
          <br />
          <span>mohammed.wok@gmail.com</span>
        </div>
          <Map />
           {/* <div className="map-wrap">
           <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>Arshad works here, come over for a cup of coffee </Popup>
            </Marker>
          </MapContainer> */}
           {/* </div> */}
      </div>
    </div>
  )
}

export default Contact