/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import PhoneCode from "react-phone-code";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.scss";

const ContactUs = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const submitFormHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_q64rvxs",
        "template_1qcpa58",
        form.current,
        "1y6TK9Q-ZV8ofdz9G"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(`Received`, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setData({});
        },
        (error) => {
          toast.error(error.text, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact__us__page">
      <div className="container">
        <div className="contact__us__content">
          <h2 className="section__title">{t("Contact_Us")}</h2>
          <p className="contact__us__text main__text">
            {t("contact__desc__1")}
          </p>
          <div className="contact__form">
            <form onSubmit={submitFormHandler} ref={form}>
              <div>
                <input
                  type="text"
                  placeholder={t("Your_Name")}
                  required
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data?.name || ""}
                  name="name"
                />
                <AiOutlineUser className="icon" />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("Your_Email")}
                  required
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data?.email || ""}
                  name="email"
                />
                <AiOutlineMail className="icon" />
              </div>
              <div>
                <PhoneCode
                  onSelect={(e) => setData({ ...data, countryCode: e })}
                  showFirst={["EG", "Kuwait"]}
                  defaultValue="select county"
                  id="some-id"
                  name="countryCode"
                  className="countries__code"
                  optionClassName="some_option_class_name"
                />
                <input
                  type="number"
                  placeholder={t("Your_Number")}
                  required
                  onChange={(e) => setData({ ...data, number: e.target.value })}
                  value={data?.number || ""}
                  name="number"
                />
                <AiOutlinePhone className="icon" />
              </div>
              <textarea
                placeholder={t("Your_Message")}
                required
                onChange={(e) => setData({ ...data, message: e.target.value })}
                value={data?.message || ""}
                name="message"
              />
              <button
                type="submit"
                className={`sec__button ${Loading ? "loading" : ""}`}
              >
                {Loading ? <span className="spinner"></span> : `${t("Send")}`}
              </button>
            </form>
          </div>
          <div>
            <h2 className="section__title">{t("whats__title")}</h2>
            <p className="contact__us__text main__text">
              {t("contact__desc__2")}
            </p>
            <a href="#" target="_blank" className="whatsapp">
              {t("Whatsapp_Us")}
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
