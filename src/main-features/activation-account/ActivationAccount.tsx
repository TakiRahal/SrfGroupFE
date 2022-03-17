import React from 'react';
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {useQuery} from "../../shared/utils/utils-functions";
import Container from "@mui/material/Container/Container";
import {activateAction} from "../../shared/reducers/user-reducer";
import {IRootState} from "../../shared/reducers";


export interface IActivateAccountProps extends StateProps, DispatchProps {}

export const ActivationAccount = (props: IActivateAccountProps) => {
    const query = useQuery();
    // const history = useHistory();

    const {activationAccountSuccess} = props;

    React.useEffect(() => {
        const key = query.get("key");
        console.log('key ', key);
        if( key ){
            props.activateAction(key);
        }
    }, [query])

    React.useEffect(() => {
        if( activationAccountSuccess ){

        }
    }, [activationAccountSuccess])

    return (
        <Container maxWidth="sm">
            <div>Activation</div>
        </Container>
    );
}

const mapStateToProps = ({ user }: IRootState) => ({
    activationAccountSuccess: user.activationAccountSuccess
});

const mapDispatchToProps = {
    activateAction
};


type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ActivationAccount);
