import authentication, {
    ACTION_TYPES,
    getSession,
    login,
    clearAuthentication,
    logout,
    clearAuthToken,
} from '../user-reducer';
import {IUser} from "../../model/user.model";
import {REQUEST} from "../action-type.util";

describe('User reducer tests', () => {

    function isAccountEmpty(state: any): boolean {
        return Object.keys(state.account).length === 0;
    }

    describe('Common tests', () => {
        it('should return the initial state', () => {
            const toTest = authentication(undefined, {});
            expect(toTest).toMatchObject({
                isAuthenticated: false,
                currentUser: {},
                nbeNotificationsNotRead: 0,
                nbeMessagesNotRead: 0,
                oneSignalId: '',

                registrationLoading: false,
                registrationSuccess: false,
                registrationErrorMessage: null,

                loginLoading: false,
                loginSuccess: false,
                loginErrorMessage: null,

                sessionLoading: false,
                sessionSuccess: false,
                sessionErrorMessage: null,

                profileLoading: false,
                profileEntity: {} as IUser,
                profileErrorMessage: null,

                activationAccountSuccess: false,

                account: {} as any,
                loadingAccount: false,

                accountUploadAvatar: null,
                loadingUploadAvatar: false,
                uploadAvatarSuccess: false,

                entityUpdateInfosAccount: {} as any,
                loadingUpdateInfosAccount: false,
                updateSuccessInfosAccount: false,

                loadingPasswordAccount: false,
                updateSuccessPasswordAccount: false,

                loadingForgotPassword: false,
                resetPasswordSuccess: false,
                resetPasswordFailure: false,

                loadingForgotPasswordFinish: false,
                resetPasswordSuccessFinish: false,
                resetPasswordFailureFinish: false,
            });
            expect(isAccountEmpty(toTest));
        });
    });

    describe('Requests', () => {
        it('should detect a request', () => {
            expect(authentication(undefined, {type: REQUEST(ACTION_TYPES.CREATE_ACCOUNT)})).toMatchObject({
                registrationLoading: true,
                registrationSuccess: false
            });

            expect(authentication(undefined, {type: REQUEST(ACTION_TYPES.UPDATE_INFOS_USER)})).toMatchObject({
                entityUpdateInfosAccount: {},
                loadingUpdateInfosAccount: true,
                updateSuccessInfosAccount: false
            });

            expect(authentication(undefined, {type: REQUEST(ACTION_TYPES.UPDATE_PASSWORD_USER)})).toMatchObject({
                loadingPasswordAccount: true,
                updateSuccessPasswordAccount: false
            });

            expect(authentication(undefined, {type: REQUEST(ACTION_TYPES.LOGIN)})).toMatchObject({
                loginLoading: true,
            });

            expect(authentication(undefined, {type: REQUEST(ACTION_TYPES.GET_SESSION)})).toMatchObject({
                sessionLoading: true,
            });

            expect(authentication(undefined, {type: REQUEST(ACTION_TYPES.GET_PROFILE)})).toMatchObject({
                profileLoading: true,
            });

            expect(authentication(undefined, {type: REQUEST(ACTION_TYPES.GET_CURRENT_USER)})).toMatchObject({
                loadingAccount: true,
            });
        });
    });
});