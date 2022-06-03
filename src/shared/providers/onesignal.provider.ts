import OneSignal from "react-onesignal";
import {AllAppConfig} from "../../core/config/all-config";
import {ACTION_TYPES} from "../reducers/user-reducer";
import reduxStore from "../../core/config/store";


export async function oneSignalProviders() {
    try {

        // Init OneSignal Platform
        await OneSignal.init({
            appId: AllAppConfig.APP_ID_ONESIGNAL
        }).then((result: any) => {
            console.log('OneSignal init succefully');

            OneSignal.isPushNotificationsEnabled((result: boolean) => {
                if(result){
                    OneSignal.getUserId((userId: string | null | undefined) => {
                        reduxStore.dispatch({
                            type: ACTION_TYPES.ONE_SIGNAL_ID,
                            payload: userId
                        })
                    })
                }
                else{
                    // alert('Please check your setting browser and accept notif');
                }
            })
        });
    }
    catch (e) {

    }
}