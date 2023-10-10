// Contacttsx

import React from "react";
import { Formik, Form, Field } from "formik";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from "react";
interface ContactFormProps {
  onSubmit?: (values: { name: string; email: string; message: string }) => void;
}
const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation("contact");
  const [feedback, setFeedback] = useState<string | null>(null);

  return (
    <Formik
    initialValues={{ name: "", email: "", message: "" }}
    onSubmit={(values, actions) => {
      console.log("Form onSubmit triggered!", values);

      axios
        .post("/api/send-email", values) // Call the serverless function
        .then((response) => {
          console.log(response.data);
          actions.setSubmitting(false);
          
          setFeedback("Your message was successfully sent!"); // Success feedback
        })
        .catch((error) => {
          actions.setSubmitting(false);
          
          setFeedback("There was an error sending your message. Please try again later."); // Error feedback
        });
    }}
  >
      {({ isSubmitting }) => (
        <Form>
          <label className="block mb-6 ">
            <span className="text-gray-600 lg:text-xl font-bold">
              {" "}
              {t("nameLabel")}
            </span>
            <Field
              className="mt-2 p-4 w-full lg:text-lg rounded border font-semibold bg-gray-100"
              type="text"
              name="name"
              placeholder={t("namePlaceholder")}
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-600 lg:text-xl font-bold">
              {t("emailLabel")}
            </span>
            <Field
              className="mt-2 p-4 w-full lg:text-lg rounded border font-semibold bg-gray-100"
              type="email"
              name="email"
              placeholder={t("emailPlaceholder")}
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-600 lg:text-xl font-bold">
              {" "}
              {t("messageLabel")}
            </span>
            <Field
              className="mt-2 p-4 w-full lg:text-lg font-semibold rounded border bg-gray-100 h-40"
              as="textarea"
              name="message"
              placeholder={t("messagePlaceholder")}
            />
          </label>
          {feedback && (
            <div className="mt-4 text-center text-red-600"> {/* adjust styles as needed */}
              {feedback}
            </div>
          )}

          <button
            type="submit"
            className="bg-deepBlue hover:bg-lessDeepBlue text-white py-2 px-6 lg:py-3 font-bold lg:px-8 rounded "
            disabled={isSubmitting}
          >
            {t("submitButton")}
          </button>
          
        </Form>
        
      )}
    </Formik>
  );
};

export default ContactForm;
