import React from 'react';
import {initialValuesAddOffer, setDefaultsValues, validationSchemaAddOffer} from "./validation/init-value-add-offer";
import {useHistory, useParams} from "react-router";
import {connect} from "react-redux";
import Grid from "@mui/material/Grid/Grid";
import Container from "@mui/material/Container/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import Typography from "@mui/material/Typography/Typography";
import Paper from "@mui/material/Paper/Paper";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import {TypeOfferEnum} from "../../../shared/enums/type-offer.enum";
import Select from "@mui/material/Select/Select";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import ImageList from "@mui/material/ImageList/ImageList";
import ImageListItem from "@mui/material/ImageListItem/ImageListItem";
import IconButton from "@mui/material/IconButton/IconButton";
import ClearIcon from '@mui/icons-material/Clear';
import Accordion from "@mui/material/Accordion/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import OptionsSellAddOffer from "./ui-segments/OptionsSellAddOffer";
import OptionsRentAddOffer from "./ui-segments/OptionsRentAddOffer";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import OptionsFindAddOffer from "./ui-segments/OptionsFindAddOffer";
import {useFormik} from "formik";
import {
    convertDateTimeToServer,
    dataUrlToFile,
    getBaseImageUrl,
    getImageForOffer
} from "../../../shared/utils/utils-functions";
import {AllAppConfig} from "../../../core/config/all-config";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import Button from "@mui/material/Button/Button";
import Slide from "@mui/material/Slide/Slide";
import {IRootState} from "../../../shared/reducers";
import { reset as resetOffer } from '../../../shared/reducers/offer.reducer';
import { createEntity as createEntitySellerOffer } from '../../../shared/reducers/seller-offer.reducer';
import { updateEntity as updateEntitySell } from '../../../shared/reducers/seller-offer.reducer';
import { reset as resetSellerOffer } from '../../../shared/reducers/seller-offer.reducer';
import { createEntity as createEntityRentOffer } from '../../../shared/reducers/rent-offer.reducer';
import { updateEntity as updateEntityRent } from '../../../shared/reducers/rent-offer.reducer';
import { reset as resetRentOffer } from '../../../shared/reducers/rent-offer.reducer';
import { createEntity as createEntityFindOffer } from '../../../shared/reducers/find-offer.reducer';
import { updateEntity as updateEntityFind } from '../../../shared/reducers/find-offer.reducer';
import { reset as resetFindOffer } from '../../../shared/reducers/find-offer.reducer';
import {uploadFiles, getEntity as getEntityOffer} from "../../../shared/reducers/offer.reducer";
import isEmpty from 'lodash/isEmpty';
import OptionsCommonAddOffer from "./ui-segments/OoptionsCommonAddOffer";
import {IOfferImages} from "../../../shared/model/offer-images.model";
import {TransitionModal} from "../../../shared/pages/transition-modal";
import {getImageUrl} from "../../../shared/utils/image-url";
import {CustomSunEditor} from "../../../shared/components/sun-editor/CustomSunEditor";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Box from "@mui/material/Box/Box";
import {useTranslation} from "react-i18next";

interface initStateFiles {
    selectedFiles: string[];
    progress: number,
    message: string,
    fileInfos: string[],
};

const defaultValueFiles : initStateFiles = {
    selectedFiles: [],
    progress: 0,
    message: '',
    fileInfos: [],
}

const defaultValueOriginalListFiles: File[] = [];

const initialValues = initialValuesAddOffer;

export interface IAddUpdateOfferProps extends StateProps, DispatchProps {}

export const AddUpdateOffer = (props: IAddUpdateOfferProps) => {

    const [startAnimation, setStartAnimation] = React.useState(false);
    const [fileState, setFileState] = React.useState(defaultValueFiles);
    const [originalListFiles, setOriginalListFiles] = React.useState(defaultValueOriginalListFiles);
    const [openDeleteImageOfferModal, setOpenDeleteImageOfferModal] = React.useState(false);
    const [indexDeleteImageOffer, setIndexDeleteImageOffer] = React.useState(-1);

    const history = useHistory();
    const { t } = useTranslation();

    const {
        loadingEntitySellerOffer,
        loadingEntityRentOffer,
        isAuthenticated,
        currentUser,
        getEntityOffer,
        entitiesAddress,
        entitiesCategory,
        resetSellerOffer,
        resetRentOffer,
        resetFindOffer,
        entityOffer,
    } = props;

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaAddOffer,
        onSubmit: values => {
            if (isAuthenticated) {
                saveEntity(values);
            } else {
                history.push(ALL_APP_ROUTES.LOGIN);
            }
        },
    });

    const {id} = useParams<{ id: string }>();

    React.useEffect(() => {
        if(id){ // For update
            getEntityOffer(Number(id) || -1);
        }
        else{ // For new offer
            formik.resetForm();
            setFileState(defaultValueFiles);
        }
    }, [id])

    React.useEffect(() => {
        setTimeout(() => {
            setStartAnimation(true);
        }, 300);
    }, []);


    React.useEffect(() => {
        if (!isEmpty(entityOffer) && id) { // For update

            // Defult values
            setDefaultsValues(formik, entityOffer);

            setFileState({
                ...fileState,
                selectedFiles: entityOffer?.offerImages && entityOffer?.offerImages.length > 0
                        ? entityOffer?.offerImages.map((imgOffer: IOfferImages) => {
                            return (imgOffer.path = getImageForOffer(entityOffer?.id, imgOffer?.path));
                        })
                        : [], // event.target.files
            });
        }
    }, [entityOffer]);

    React.useEffect(() => {
        if (props.addSuccessSellerOffer || props.updateSuccessSellerOffer) {
            const offerId: number = props.entitySellerOffer?.id || -1;
            upladAllFiles(offerId);
            resetSellerOffer();
            history.push(ALL_APP_ROUTES.OFFER.MY_OFFERS);
        }
        else if (props.addSuccessRentOffer || props.updateSuccessRentOffer) {
            const offerId: number = props.entityRentOffer?.id || -1;
            upladAllFiles(offerId);
            resetRentOffer();
            history.push(ALL_APP_ROUTES.OFFER.MY_OFFERS);
        }
        else if ( props.addSuccessFindOffer || props.updateSuccessFindOffer) {
            const offerId: number = props.entityFindOffer?.id || -1;
            upladAllFiles(offerId);
            resetFindOffer();
            history.push(ALL_APP_ROUTES.OFFER.MY_OFFERS);
        }
    }, [props.addSuccessSellerOffer, props.updateSuccessSellerOffer,
        props.addSuccessRentOffer, props.updateSuccessRentOffer ,
        props.addSuccessFindOffer, props.updateSuccessFindOffer
    ]);

    const saveEntity = (values: any) => {
        const tempOfferImages: any[] = [];
        originalListFiles.map((item: any) => {
            tempOfferImages.push({
                path: item?.name,
                dateCreated: convertDateTimeToServer(new Date()),
            });
        });

        const entity = {
            ...entityOffer,
            dateCreated: convertDateTimeToServer(new Date()),
            ...values,
            user: {
                id: currentUser.id,
                email: currentUser.email,
            },
            offerImages: tempOfferImages.slice()
        };

        // Set address if defined
        if(values?.address){
            entity.address = {
                id: values?.address?.id,
                city: values?.address?.city
            }
        }

        // Set category if defined
        if(values?.category){
            entity.category = {
                id: values?.category?.id,
            }
        }

        // For Rent
        if (entity.startDate && entity.endDate) {
            entity.startDate = convertDateTimeToServer(entity.startDate);
            entity.endDate = convertDateTimeToServer(entity.endDate);
        }

        if (!id) {
          if (formik.values.typeOffer === TypeOfferEnum.Sell) {
            props.createEntitySellerOffer(entity);
          } else if (formik.values.typeOffer === TypeOfferEnum.Rent) {
            props.createEntityRentOffer(entity);
          } else if (formik.values.typeOffer === TypeOfferEnum.Find) {
            props.createEntityFindOffer(entity);
          }
        }
        else {
            if (formik.values.typeOffer === TypeOfferEnum.Sell) {
                props.updateEntitySell(entity);
            } else if (formik.values.typeOffer === TypeOfferEnum.Rent) {
                props.updateEntityRent(entity);
            } else if (formik.values.typeOffer === TypeOfferEnum.Find) {
                props.updateEntityFind(entity);
            }
        }
    };

    const selectFile = (event: any) => {
        if (event.target.files && event.target.files.length <= AllAppConfig.MaxNbeImagePerOffer) {

            const newSelectedFiles: string[] = [];
            const newOrigSelectedFiles: File[] = [];

            Array.from(event.target.files).forEach((file: any) => {
                console.log('file ', file);
                getImageUrl(file, 500)
                    .then((resultBase64: any) => {
                        dataUrlToFile(resultBase64, file.name)
                            .then((valueFile: any) => {
                                newOrigSelectedFiles.push(valueFile);
                            });
                        newSelectedFiles.push(resultBase64);

                        setFileState({
                            ...fileState,
                            selectedFiles: newSelectedFiles.slice(), // event.target.files
                        });

                        // Set all files
                        setOriginalListFiles(newOrigSelectedFiles);
                    });

            });
        } else {
            alert('Ouups, max number is 5');
        }
    };

    const upladAllFiles = (offerId: number) => {
        console.log('upladAllFiles');
        if(originalListFiles.length){
            const formData = new FormData();
            for (const file of originalListFiles) {
                formData.append('files', file, file.name);
                formData.append('offerId', offerId.toString());
            }
            props.uploadFiles(formData);
        }
    };

    const handleClickDeleteImageOffer = () => {
        setOpenDeleteImageOfferModal(false);
        fileState.selectedFiles.splice(indexDeleteImageOffer, 1);
    };

    const handleClickCancelDeleteImageOfferModal = () => {
        setOpenDeleteImageOfferModal(false);
    };

    const handleClickOpenDeleteOffertModal = (index: number) => {
        setIndexDeleteImageOffer(index);
        setOpenDeleteImageOfferModal(true);
    };

    const renderDialogDeleteImageOffer = () => {
        return (
            <Dialog
                open={openDeleteImageOfferModal}
                TransitionComponent={TransitionModal}
                keepMounted
                onClose={handleClickCancelDeleteImageOfferModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    Confirm delete operation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete this CommentOffer?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickCancelDeleteImageOfferModal}>
                        Cancel
                    </Button>
                    <Button onClick={handleClickDeleteImageOffer} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    const onChangeValue = (newValue: any) => {
        console.log('onChangeValue ', newValue);
        formik.setFieldValue('description', newValue ? newValue : '');
    }

    return (
        <Slide direction="up" in={startAnimation} mountOnEnter unmountOnExit>
            <Container maxWidth="xl" className="page-add-offer">
                <Grid
                    container
                    style={{
                        paddingTop: 10,
                    }}
                >
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                                SRF
                            </Link>
                            <Typography color="text.primary">
                                {t('add_offer.title_page')}
                            </Typography>
                        </Breadcrumbs>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{p: 2, mt: 6}}>

                            {
                                props.loadingEntity ? <Box sx={{ pt: 10, pb: 10, textAlign: 'center' }}>
                                    <CircularProgress color="inherit"  />
                                </Box> :

                                <Box>
                                    <h3 className="mb-3">{t('add_offer.label_publish_new_offer')}</h3>
                                    <form onSubmit={formik.handleSubmit}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} md={6}>
                                                <FormControl
                                                    fullWidth
                                                    size="small"
                                                    error={formik.touched.typeOffer && Boolean(formik.errors.typeOffer)}
                                                    className="form-control-type-offer"
                                                >
                                                    <InputLabel id="label-component-helper-typeOffer" className="type-offer-select">
                                                        {t('add_offer.label_type_offer')}
                                                    </InputLabel>
                                                    <Select
                                                        id="typeOffer"
                                                        name="typeOffer"
                                                        label="Type"
                                                        labelId="demo-simple-select-label"
                                                        value={formik.values.typeOffer}
                                                        onChange={formik.handleChange}>
                                                        <MenuItem value={TypeOfferEnum.Sell}>
                                                            {t('common.for_sell')}
                                                        </MenuItem>
                                                        <MenuItem value={TypeOfferEnum.Rent}>
                                                            {t('common.for_rent')}
                                                        </MenuItem>
                                                        <MenuItem value={TypeOfferEnum.Find}>
                                                            {t('common.for_find')}
                                                        </MenuItem>
                                                    </Select>
                                                    <FormHelperText
                                                        id="component-helper-text-typeOffer">{formik.touched.typeOffer && formik.errors.typeOffer}</FormHelperText>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={12} md={6}>
                                                <FormControl fullWidth size="small"
                                                             error={formik.touched.title && Boolean(formik.errors.title)}>
                                                    <InputLabel htmlFor="outlined-adornment-title">{t('add_offer.label_title_offer')} *</InputLabel>
                                                    <OutlinedInput
                                                        id="title"
                                                        name="title"
                                                        label="Title"
                                                        value={formik.values.title}
                                                        onChange={formik.handleChange}
                                                    />
                                                    <FormHelperText
                                                        id="component-helper-text">{formik.touched.title && formik.errors.title}</FormHelperText>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={12} md={12}>
                                                <FormControl fullWidth sx={{mt: 3}}
                                                             error={formik.touched.description && Boolean(formik.errors.description)}>
                                                    {
                                                        id && entityOffer?.description ? <CustomSunEditor defaultValue={entityOffer?.description} callbcakHandleChange={onChangeValue}/> :
                                                            <CustomSunEditor defaultValue='' callbcakHandleChange={onChangeValue}/>
                                                    }

                                                    <FormHelperText
                                                        id="component-helper-text">{formik.touched.description && formik.errors.description}</FormHelperText>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={12} md={12} sx={{mb: 3}}>
                                                <ImageList sx={{width: '100%', height: 'auto', mt: 3, mb: 0}} cols={5}>
                                                    {fileState && fileState.selectedFiles && fileState.selectedFiles.length > 0
                                                        ? fileState.selectedFiles.map((file, index) => (
                                                            <ImageListItem
                                                                key={index}
                                                                style={{
                                                                    marginRight: 4,
                                                                    borderRadius: 4,
                                                                }}
                                                            >
                                                                <img
                                                                    src={file}
                                                                    srcSet={file}
                                                                    alt={'desc_' + index}
                                                                    loading="lazy"
                                                                    style={{borderRadius: 4, border: '1px solid #b7b1b1'}}
                                                                />
                                                                <IconButton
                                                                    size="small"
                                                                    aria-label="delete"
                                                                    color="error"
                                                                    sx={{
                                                                        position: 'absolute',
                                                                        top: 0,
                                                                        right: 0,
                                                                        backgroundColor: '#fff'
                                                                    }}
                                                                    onClick={() => handleClickOpenDeleteOffertModal(index)}
                                                                >
                                                                    <ClearIcon/>
                                                                </IconButton>
                                                            </ImageListItem>
                                                        ))
                                                        : null}

                                                    <ImageListItem>
                                                        <img
                                                            src={`${getBaseImageUrl('/assets/images/offer/add-offer/img_add_offer.png')}`}
                                                            srcSet={`${getBaseImageUrl('/assets/images/offer/add-offer/img_add_offer.png')}`}
                                                            alt={'img_add_offer'}
                                                            loading="lazy"
                                                            style={{borderRadius: 4, border: '1px solid #b7b1b1'}}
                                                        />
                                                        <input
                                                            id="offer-addFiles"
                                                            data-cy="files"
                                                            type="file"
                                                            name="files"
                                                            style={{
                                                                position: 'absolute',
                                                                maxWidth: '100%',
                                                                top: 0,
                                                                bottom: 0,
                                                                opacity: 0,
                                                            }}
                                                            multiple
                                                            accept="image/png, image/gif, image/jpeg, image/jpg"
                                                            onChange={selectFile}
                                                        />
                                                    </ImageListItem>
                                                </ImageList>
                                            </Grid>

                                            <Grid item xs={12} md={12}>
                                                <Accordion sx={{width: '100%'}}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon sx={{backgroundColor: 'yellow', borderRadius: '50%'}}/>}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        className="bg-brown"
                                                    >
                                                        <Typography sx={{textDecoration: 'underline'}}>
                                                            {t('add_offer.label_more_options')}
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails sx={{pt: 4}}>
                                                        {formik.values.typeOffer ? (
                                                            <OptionsCommonAddOffer formik={formik} cities={entitiesAddress} listCategories={entitiesCategory} />
                                                        ) : null}

                                                        {formik.values.typeOffer === TypeOfferEnum.Sell ? (
                                                            <OptionsSellAddOffer formik={formik}/>
                                                        ) : formik.values.typeOffer === TypeOfferEnum.Rent ? (
                                                            <OptionsRentAddOffer formik={formik}/>
                                                        ) : formik.values.typeOffer === TypeOfferEnum.Find ? (
                                                            <OptionsFindAddOffer formik={formik}/>
                                                        ) : (
                                                            <Typography variant="subtitle2" color="text.secondary">
                                                                {t('add_offer.label_select_offer_plz')}
                                                            </Typography>
                                                        )}
                                                    </AccordionDetails>
                                                </Accordion>
                                            </Grid>

                                            <Grid item xs={12} md={12}>
                                                <LoadingButton
                                                    loading={loadingEntitySellerOffer === true || loadingEntityRentOffer === true}
                                                    fullWidth
                                                    variant="contained"
                                                    color="neutral"
                                                    type="submit"
                                                    sx={{mt: 3, mb: 2}}
                                                >
                                                    {
                                                        id ? t('add_offer.label_update_offer') : t('add_offer.label_add_offer')
                                                    }

                                                </LoadingButton>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Box>
                            }



                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{p: 2, mt: 6}}>
                        {/*{loadingDescriptionAddOfferEntity ? (*/}
                        {/*<Box>*/}
                        {/*<CircularProgress />*/}
                        {/*</Box>*/}
                        {/*) : descriptionAddOfferEntity?.descriptionEn ? (*/}
                        {/*parse(descriptionAddOfferEntity?.descriptionEn)*/}
                        {/*) : null}*/}
                    </Grid>
                </Grid>

                <div>{renderDialogDeleteImageOffer()}</div>
            </Container>
        </Slide>
    );
}

const mapStateToProps = ({user, offer, sellOffer, rentOffer, findOffer, address, category}: IRootState) => ({
    isAuthenticated: user.isAuthenticated,
    currentUser: user.currentUser,

    loadingEntitySellerOffer: sellOffer.loadingEntity,
    entitySellerOffer: sellOffer.entity,
    updateSuccessSellerOffer: sellOffer.updateSuccess,
    addSuccessSellerOffer: sellOffer.addSuccess,

    loadingEntityRentOffer: rentOffer.loadingEntity,
    entityRentOffer: rentOffer.entity,
    updateSuccessRentOffer: rentOffer.updateSuccess,
    addSuccessRentOffer: rentOffer.addSuccess,

    loadingEntityFindOffer: findOffer.loadingEntity,
    entityFindOffer: findOffer.entity,
    updateSuccessFindOffer: findOffer.updateSuccess,
    addSuccessFindOffer: findOffer.addSuccess,

    entityOfferWithFavoriteUser: offer.entityWithFavoriteUser,
    entityOffer: offer.entity,
    loadingEntity: offer.loadingEntity,

    loadingEntitiesAddress: address.loadingEntities,
    entitiesAddress: address.entities,
    updateSuccessAddress: address.updateSuccess,

    loadingEntitiesCategory: category.loadingEntities,
    entitiesCategory: category.entities,
});

const mapDispatchToProps = {
    createEntitySellerOffer,
    resetSellerOffer,
    uploadFiles,
    createEntityRentOffer,
    resetRentOffer,
    createEntityFindOffer,
    resetFindOffer,
    getEntityOffer,
    resetOffer,
    updateEntitySell,
    updateEntityRent,
    updateEntityFind
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AddUpdateOffer);