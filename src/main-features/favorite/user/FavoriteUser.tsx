import React from 'react';
import {IRootState} from "../../../shared/reducers";
import {getEntitiesByUser} from "../../../shared/reducers/favorite-user.reducer";
import {connect} from "react-redux";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import Typography from "@mui/material/Typography/Typography";
import {IFavoriteUser} from "../../../shared/model/favorite.model";
import ListFavoriteUsers from "./ui-segments/ListFavoriteUsers";
import Box from "@mui/material/Box/Box";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";


export interface IFavoriteUserProps extends StateProps, DispatchProps {}

export const FavoriteUser = (props: IFavoriteUserProps) => {

    const {loadingEntitiesFavoriteUsers, listFavoriteUsers, getEntitiesByUser} = props;

    React.useEffect(() => {
        getEntitiesByUser(1, 20, '');
    }, [])

    const deleteFavoriteUsers = () => {

    }

    return(
        <Container>
            <Grid
                container
                style={{
                    paddingTop: 10,
                }}
            >
                <Grid item xs={12} sm={6}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                            SRF
                        </Link>
                        <Typography color="text.primary">
                            Favorites users
                        </Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ mt: 3 }}>
                {
                    loadingEntitiesFavoriteUsers ? <Grid item xs={12}>
                        <Box sx={{ paddingTop: 10, textAlign: 'center' }}>
                            <CircularProgress color="inherit"  />
                        </Box>
                    </Grid> : null
                }

                {listFavoriteUsers && listFavoriteUsers.length > 0
                    ? listFavoriteUsers.map((favorite: IFavoriteUser, index: number) => (
                        <ListFavoriteUsers key={favorite.id} favorite={favorite} parentCallback={deleteFavoriteUsers} />
                    ))
                    : !loadingEntitiesFavoriteUsers && (
                    <Grid item xs={12}>
                        <div className="alert alert-warning w-100">
                            No Favorites found
                        </div>
                    </Grid>
                )}

            </Grid>
        </Container>
    );
}


const mapStateToProps = ({ favoriteUser }: IRootState) => ({
    loadingEntitiesFavoriteUsers: favoriteUser.loadingEntities,
    listFavoriteUsers: favoriteUser.entities
});

const mapDispatchToProps = {
    getEntitiesByUser,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteUser);