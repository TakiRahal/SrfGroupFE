import dayjs from 'dayjs';
import {IUser} from "./user.model";

export interface IFavoriteUser {
  id?: number;
  favoriteDate?: Date | null;
  currentUser?: IUser | null;
  favoriteUser?: IUser | null;
}

export const defaultValue: Readonly<IFavoriteUser> = {};
