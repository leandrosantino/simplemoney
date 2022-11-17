import { UseRoutesProps } from "../modules/useRoutes";
import { MainRoutes, RenderRoutes } from "../../@types/Routes";
import { authProvider } from "../modules/oauth2";
import { api } from "../services/api";

import { store } from "../services/store";

export function authRoutes({ipcMain, window}: UseRoutesProps){

    ipcMain.on('isAuthenticate' as MainRoutes, async (event, args)=>{
        try {
            const userInfoResponse = await api.get('/user/me');
            event.returnValue = userInfoResponse.data.user
        } catch (error) {
            console.log(String(error) + 'Api Error')
            event.returnValue  = false
        }
    })

    ipcMain.on('signOut' as MainRoutes, async (event, args)=>{
        try {
            store.set('apiToken', null)
            event.returnValue = true
        } catch (error) {
            console.log(String(error) + 'Api Error')
            event.returnValue  = false
        }
    })

    ipcMain.on('getUserData' as MainRoutes, async (event, args)=>{
        try {
            const userInfoResonse = await api.get('/user/me')
            event.returnValue = userInfoResonse.data.user
        } catch (error) {
            console.log(String(error) + 'Api Error')
            event.returnValue = false
        }
    })

    ipcMain.on('auth' as MainRoutes, async (event, args)=>{
        try {
            const {access_token} = await authProvider(window)
            const tokenResponse = await api.post('/user/auth/google', { access_token });

            const apiToken = tokenResponse.data.token
            api.defaults.headers.common['Authorization'] = `Bearer ${apiToken}`;
            store.set('apiToken', apiToken)

            const userInfoResponse = await api.get('/user/me');

            event.returnValue = userInfoResponse.data.user

        } catch (error) {

            console.log(String(error)+'auth error')
            event.returnValue = false

        }
    })

}