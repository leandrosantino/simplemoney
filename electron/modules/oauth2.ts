import axios from "axios"
import { BrowserWindow } from "electron"
import OAuth2Provider from "electron-oauth-helper/dist/oauth2"
import * as config from '../authConfig.json'

export async function authProvider(){
    const window = new BrowserWindow({
        width: 600,
        height: 800,
        webPreferences: {
            nodeIntegration: false, // We recommend disabling nodeIntegration for security.
            contextIsolation: true // We recommend enabling contextIsolation for security.
            // see https://github.com/electron/electron/blob/master/docs/tutorial/security.md
        },
    })
    try {
        
        const provider = new OAuth2Provider({
            client_id: "3389404517-dih0mp4fjicnc12m8ldjovhrio7ll10f.apps.googleusercontent.com",
            client_secret: "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",
            authorize_url: "https://accounts.google.com/o/oauth2/auth",
            access_token_url: "https://oauth2.googleapis.com/token",
            redirect_uri: "http://localhost:9999/",
            response_type: "token",
            scope: "https://www.googleapis.com/auth/userinfo.profile"
        })
        // Your can use custom parameter.
        provider.on("before-authorize-request", parameter => {
            parameter["XXXX-Hoge"] = "hogehoge" 
        })
        
        provider.on("before-access-token-request", (parameter, headers) => {
            parameter["XXXX-Hoge"] = "hogehoge"
            headers["Huga"] = "hugahgua"
        })
    
        const resp = await provider.perform(window)
        const token = resp.toString().split('=')[1].split('&')[0]
        console.log(token)

        const userResponse = {data: 'tetse'}//await axios.get('http://localhost:9999/?')

        console.log('axios respo', userResponse.data)

        window.close()

        return {token, data: userResponse.data}
    
    } catch (error) {

        if(String(error).search('Failed to load URL') == -1){   
            console.log('error teste electron', String(error))
            window.close()
            return error
        }
        return 'erro'
    }  
}