import dayjs from 'dayjs';
import {IOffer} from "./offer.model";

export interface IRentOffer extends IOffer {
  id?: number;
  amount?: number | null;
  startDate?: string | null;
  endDate?: string | null;
}

export const defaultValue: Readonly<IRentOffer> = {};
