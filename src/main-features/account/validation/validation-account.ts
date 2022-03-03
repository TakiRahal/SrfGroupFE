import * as Yup from 'yup';

export const initialValuesAccount = {
  login: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: null,
};

export const validationSchemaAccount = Yup.object({
  login: Yup.string().required('login is required'),
  firstName: Yup.string().required('firstName is required'),
  lastName: Yup.string().required('lastName is required'),
  email: Yup.string().required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  address: Yup.object().nullable().notRequired(),
});
