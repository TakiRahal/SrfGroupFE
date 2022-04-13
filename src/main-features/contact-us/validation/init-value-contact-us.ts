import * as Yup from 'yup';

export const initialValuesContactUs = {
  name: '',
  email: '',
  subject: '',
  message: '',
  captchaResponse: ''
};

export const validationSchemaContactUs = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
  captchaResponse: Yup.string().required('captchaResponse is required'),
});
