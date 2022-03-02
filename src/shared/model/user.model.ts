import {IAddress} from "./address.model";

export interface IUser {
  id?: any;
  login?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  activated?: boolean;
  imageUrl?: string;
  langKey?: string;
  authorities?: any[];
  createdBy?: string;
  createdDate?: Date | null;
  lastModifiedBy?: string;
  lastModifiedDate?: Date | null;
  password?: string;
  sourceProvider?: string;
  address?: IAddress;
}

export const defaultValue: Readonly<IUser> = {
  id: '',
  login: '',
  firstName: '',
  lastName: '',
  email: '',
  activated: true,
  langKey: '',
  authorities: [],
  createdBy: '',
  createdDate: null,
  lastModifiedBy: '',
  lastModifiedDate: null,
  password: '',
};

export interface IGooglePlus {
  Ba: string;
  accessToken: string;
  googleId: string;
  profileObj: any;
  tokenId: string;
  sourceProvider: string;
}

export interface IFacebook {
  accessToken: string;
  data_access_expiration_time: string;
  email: string;
  expiresIn: string;
  graphDomain: string;
  id: string;
  name: string;
  picture: any;
  signedRequest: string;
  userID: string;
  sourceProvider: string;
}
