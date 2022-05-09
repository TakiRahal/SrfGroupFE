import React from 'react';
import Box from "@mui/material/Box/Box";
import {IRootState} from "../../shared/reducers";
import {connect} from "react-redux";
import TextField from "@mui/material/TextField/TextField";
import MessageIcon from '@mui/icons-material/MessageOutlined';
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Button from "@mui/material/Button/Button";
import {createEntity} from "../../shared/reducers/report-probleme.reducer";
import {useFormik} from "formik";
import * as Yup from 'yup';
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";

const initialValuesAddMessage = {
    content: '',
};

const validationSchemaAddMessage = Yup.object({
    content: Yup.string().required('Message is required').min(5, 'Min 5 digits').max(2000, 'Max 2000 digits'),
});

const initialValues = initialValuesAddMessage;

export interface IProblemeDeclarationProps extends StateProps, DispatchProps{}

export const ProblemeDeclaration = (props: IProblemeDeclarationProps) => {

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaAddMessage,
        onSubmit: values => {
            if (props.isAuthenticated) {
                console.log('values ', values);
                props.createEntity(values);
            }
        },
    });

    React.useEffect(() => {
        if(props.addSuccess){
            formik.resetForm();
        }
    }, [props.addSuccess])

    return(
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Card>
                    <CardContent>
                        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                            <MessageIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                            <TextField id="content"
                                       name="content"
                                       label="Declarer votre probleme"
                                       variant="standard"
                                       fullWidth
                                       multiline
                                       value={formik.values.content}
                                       onChange={formik.handleChange}
                                       error={formik.touched.content && Boolean(formik.errors.content)}
                                       rows={4}/>
                        </Box>
                        {
                            formik.touched.content && Boolean(formik.errors.content) ? <Box className="red-color">{formik.errors.content}</Box> : null
                        }
                        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                            <Button variant="outlined" size="small" fullWidth sx={{mt: 2}}
                                    color="neutral"
                                    type="submit">
                                Declarer
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </form>
        </Box>
    );
}
const mapStateToProps = ({reportProbleme, user}: IRootState) => ({
    loading: reportProbleme.loadingEntity,
    entity: reportProbleme.entity,
    addSuccess: reportProbleme.addSuccess,

    isAuthenticated: user.isAuthenticated,
    currentUser: user.currentUser,
})
const mapDispatchToProps = {
    createEntity
}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProblemeDeclaration);