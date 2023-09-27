// ContactForm.tsx

import React from "react";
import { Formik, Form, Field } from "formik";

interface ContactFormProps {
  onSubmit: (values: { name: string; email: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label className="block mb-6 ">
            <span className="text-gray-600 lg:text-xl font-bold">Name</span>
            <Field
              className="mt-2 p-4 w-full lg:text-lg rounded border font-semibold bg-gray-100"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-600 lg:text-xl font-bold">Email</span>
            <Field
              className="mt-2 p-4 w-full lg:text-lg rounded border font-semibold bg-gray-100"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-600 lg:text-xl font-bold">Message</span>
            <Field
              className="mt-2 p-4 w-full lg:text-lg font-semibold rounded border bg-gray-100 h-40"
              as="textarea"
              name="message"
              placeholder="Enter your message"
            />
          </label>
          <button
            type="submit"
            className="bg-deepBlue hover:bg-lessDeepBlue text-white py-2 px-6 lg:py-3 font-bold lg:px-8 rounded "
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
