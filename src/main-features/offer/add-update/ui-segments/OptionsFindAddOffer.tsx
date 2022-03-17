import * as React from 'react';
import {TypeOfferEnum, TypesFindOffer} from "../../../../shared/enums/type-offer.enum";
import Grid from "@mui/material/Grid/Grid";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Select from "@mui/material/Select/Select";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";

export default function OptionsFindAddOffer(props: any) {

    const {formik} = props;

  return (
      <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
              <FormControl
                  fullWidth
                  size="small"
                  error={formik.touched.typeFindOffer && Boolean(formik.errors.typeFindOffer)}
                  className="form-control-type-find-offer"
              >
                  <InputLabel id="form-control-type-find-offer" className="type-find-offer-select">
                      Type Find Offre
                  </InputLabel>
                  <Select
                      id="typeFindOffer"
                      name="typeFindOffer"
                      label="Type Find Offer"
                      labelId="demo-simple-select-label"
                      value={formik.values.typeFindOffer}
                      onChange={formik.handleChange}>
                      <MenuItem value={TypesFindOffer.Carpooling}>
                          CoVoiiturage
                      </MenuItem>
                      <MenuItem value={TypesFindOffer.Travels}>
                          Travels
                      </MenuItem>
                      <MenuItem value={TypesFindOffer.Transporter}>
                          Transporter: from --- to
                      </MenuItem>
                      <MenuItem value={TypesFindOffer.Job}>
                          Travail
                      </MenuItem>
                  </Select>
                  <FormHelperText
                      id="form-control-type-find-offer">{formik.touched.typeFindOffer && formik.errors.typeFindOffer}</FormHelperText>
              </FormControl>
          </Grid>
      </Grid>

  );
}


{/*<div>*/}
    {/*<p>CoVoiiturage</p>*/}
    {/*<p>Travels</p>*/}
    {/*<p>Transporteur: from --- to</p>*/}
{/*</div>*/}