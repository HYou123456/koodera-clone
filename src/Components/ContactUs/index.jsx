import React from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <section className="section__space section__padding contact__section">
      <div className="container">
        {/* <h2 className="section__title">Contact Us</h2> */}
        <div className="contact__content">
          <div className="left">
            <h2 className="section__title">
              Whatsapp <BsWhatsapp />
            </h2>
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/01/63/90/90/240_F_163909099_yWrKeZtloyzdQTg2y8XEy5XFj4dKSLvG.jpg"
                alt=""
              />
              <button>
                Chat Whatsapp With Us <BsWhatsapp className="icon" />
              </button>
            </div>
          </div>
          <div className="rigth">
            <h2 className="section__title">
              Email <HiOutlineMail />
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Your Name" required />
                <AiOutlineUser className="icon" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" required />
                <AiOutlineMail className="icon" />
              </div>
              <div>
                <input type="number" placeholder="Your Number" required />
                <AiOutlinePhone className="icon" />
              </div>
              <textarea placeholder="Your Message" required />
              <button type="submit" className="main__button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
