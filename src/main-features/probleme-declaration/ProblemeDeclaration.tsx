import Box from "@mui/material/Box/Box";
import {IRootState} from "../../shared/reducers";
import {connect} from "react-redux";
import TextField from "@mui/material/TextField/TextField";
import MessageIcon from '@mui/icons-material/MessageOutlined';
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Button from "@mui/material/Button/Button";

export interface IProblemeDeclarationProps extends StateProps, DispatchProps{}

export const ProblemeDeclaration = (props: IProblemeDeclarationProps) => {
    return(
        <Box>
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
                                   rows={4}/>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                        <Button variant="outlined" size="small" fullWidth sx={{mt: 2}}
                                color="neutral"
                                type="submit">
                            Declarer
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
const mapStateToProps = ({user, offer, conversation}: IRootState) => ({

})
const mapDispatchToProps = {

}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProblemeDeclaration);