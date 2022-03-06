import * as Yup from 'yup';
import {TypeOfferEnum} from "../../../../shared/enums/type-offer.enum";

export const initialValuesAddOffer = {
  typeOffer: '',
  title: '',
  description: '',
  amount: '',
  startDate: '',
  endDate: '',
  periodRent: '',
  address: null,
  category: null,
};

export const validationSchemaAddOffer = Yup.object({
  typeOffer: Yup.string().required('Type Offer is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  amount: Yup.number().nullable().notRequired(),
  startDate: Yup.date().nullable().notRequired(),
  endDate: Yup.date().nullable().notRequired(),
  periodRent: Yup.string().nullable().notRequired(),
  address: Yup.object().nullable().notRequired(),
  category: Yup.object().nullable().notRequired(),
});

export const setDefaultsValues = (formik: any, offerEntity: any) => {
  formik.setFieldValue('typeOffer', offerEntity.typeOffer ? offerEntity.typeOffer : '');
  formik.setFieldValue('title', offerEntity.title ? offerEntity.title : '');
  formik.setFieldValue('description', offerEntity.description ? offerEntity.description : '');
  //
  // if (offerEntity.typeOffer === TypeOfferEnum.Sell) {
  //   formik.setFieldValue('amount', offerEntity.title ? offerEntity.amount : null);
  // } else if (offerEntity.typeOffer === TypeOfferEnum.Rent) {
  //   formik.setFieldValue('amount', offerEntity.title ? offerEntity.amount : null);
  //   formik.setFieldValue('startDate', offerEntity.title ? offerEntity.startDate : null);
  //   formik.setFieldValue('endDate', offerEntity.title ? offerEntity.endDate : null);
  // } else if (offerEntity.typeOffer === TypeOfferEnum.Find) {
  //   formik.setFieldValue('amount', offerEntity.title ? offerEntity.amount : null);
  // }

  return formik;
};
