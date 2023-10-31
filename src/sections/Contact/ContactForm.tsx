import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Modal from './Modal';

interface ContactFormProps {
  onSubmit?: (values: { name: string; email: string; message: string }) => void;
}

const errorStyle: React.CSSProperties = {
  color: 'red',
  fontSize: '0.75rem',
  marginTop: '0.25rem',
  // other styles you need
};

const StyledErrorMessage: React.FC<{ name: string }> = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg: string) => <div style={errorStyle}>{msg}</div>}
  </ErrorMessage>
);


const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation('contact');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error'>('success');

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, t('validationErrors.nameTooShort'))
      .required(t('validationErrors.nameRequired')),
    email: Yup.string()
      .email(t('validationErrors.invalidEmail'))
      .required(t('validationErrors.emailRequired')),
    message: Yup.string()
      .min(25, t('validationErrors.messageTooShort'))
      .required(t('validationErrors.messageRequired')),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log('Form onSubmit triggered!', values);

        axios.post('/api/send-email', values)
          .then((response) => {
            console.log(response.data);
            actions.setSubmitting(false);
            setFeedback(t('successFeedback'));
            setModalType('success');
            setIsModalVisible(true);
          })
          .catch((error) => {
            console.error(error);
            actions.setSubmitting(false);
            setFeedback(t('errorFeedback'));
            setModalType('error');
            setIsModalVisible(true);
          });

        if (onSubmit) {
          onSubmit(values);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="text-gray-600">
          <label className="block mb-6">
            <span className="lg:text-xl font-bold">{t('nameLabel')}</span>
            <Field
              className="mt-2 p-4 w-full lg:text-lg rounded border font-semibold bg-gray-100"
              type="text"
              name="name"
              placeholder={t('namePlaceholder')}
            />
            <StyledErrorMessage name="name" />
          </label>
          <label className="block mb-6">
            <span className="lg:text-xl font-bold">{t('emailLabel')}</span>
            <Field
              className="mt-2 p-4 w-full lg:text-lg rounded border font-semibold bg-gray-100"
              type="email"
              name="email"
              placeholder={t('emailPlaceholder')}
            />
            <StyledErrorMessage name="email" />
          </label>
          <label className="block mb-6">
            <span className="lg:text-xl font-bold">{t('messageLabel')}</span>
            <Field
              className="mt-2 p-4 w-full lg:text-lg font-semibold rounded border bg-gray-100 h-40"
              as="textarea"
              name="message"
              placeholder={t('messagePlaceholder')}
            />
            <StyledErrorMessage name="message" />
          </label>

          <button
            type="submit"
            className="bg-buttonBgCustomColor hover:bg-hoverCustomColor text-white py-2 px-6 lg:py-3 font-bold lg:px-8 rounded"
            disabled={isSubmitting}
          >
            {t('submitButton')}
          </button>

          <Modal
            isVisible={isModalVisible}
            title={feedback || t('status')}
            onClose={() => setIsModalVisible(false)}
            type={modalType}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
