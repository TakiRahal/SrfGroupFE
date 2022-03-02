import React, {useEffect} from 'react';
import {IRootState} from "../reducers";
import {connect, useDispatch, useSelector} from "react-redux";
import Backdrop from "@mui/material/Backdrop/Backdrop";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import {BackDropService} from "../services/backdrop.service";

export const LoadingBackdrop = () => {
    const [openLoading, setOpenLoading ] = React.useState(false);

    const dispatch = useDispatch();

    const handleClose = () => {
    };

    useEffect(() => {
        BackDropService.getToggleLoading().subscribe((result: any) => {
            setOpenLoading(result);
        });
    }, [])

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openLoading}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {

};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LoadingBackdrop);