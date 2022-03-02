import * as Yup from 'yup';

export const initialValuesAddCommentOffer = {
    content: '',
};

export const validationSchemaAddCommentOffer = Yup.object({
    content: Yup.string().required('Type Offer is required'),
});