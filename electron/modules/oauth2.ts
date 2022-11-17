import axios from "axios"
import { BrowserWindow } from "electron"
import OAuth2Provider from "electron-oauth-helper/dist/oauth2"

export function authProvider(mainWindow: BrowserWindow){
    return new Promise<{access_token:string}>((resolve, reject) => {
        const window = new BrowserWindow({
            width: 600,
            height: 800,
            modal: true,
            minimizable: false,
            maximizable: false,
            parent: mainWindow,
            titleBarStyle: 'hidden',
            titleBarOverlay: {
                color: 'rgb(211, 211, 211)',
                symbolColor: '#2f3241',
            },
            webPreferences: {
                nodeIntegration: false, 
                contextIsolation: true 
            },
        })

        
        const provider = new OAuth2Provider({
            client_id: "3389404517-dih0mp4fjicnc12m8ldjovhrio7ll10f.apps.googleusercontent.com",
            client_secret: "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",
            authorize_url: "https://accounts.google.com/o/oauth2/auth",
            access_token_url: "https://oauth2.googleapis.com/token",
            redirect_uri: "http://localhost:9999/",
            response_type: "token",
            scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
        })

        window.on('close', ()=>{
            reject(false)
        })
        
        provider.perform(window)
            .then(resp=>{
                const access_token = resp.toString().split('=')[1].split('&')[0]
                resolve({access_token})
                window.close()
            })
            .catch(error=>{
                if(String(error).search('Failed to load URL') == -1){   
                    console.log('error teste electron', String(error))
                    window.close()
                    reject(error)
                }
                reject(false)
            }) 
    })
     
}