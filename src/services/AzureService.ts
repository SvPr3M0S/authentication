import {Ref, ref} from 'vue'
import IMsalConfig from '@/interfaces/IMsalConfig'


class AzureService {
    private msalConfig:Ref<IMsalConfig>  
    private accessToken:Ref<string> 

    constructor() {
        this.msalConfig = ref({
            auth: {
                clientId: '9d3694a0-cb21-4a37-8049-47cefec9bb8b',
                authority: 'https://login.microsoftonline.com/d80bf1f2-7883-4fa1-83a8-73c0f15809ca'
            },
            cache: {
                cacheLocation: 'localStorage'
            }
        })

        this.accessToken = ref('')
    } 
    
    setAccessToken(token:string):Ref<string> {
        this.accessToken.value = token
        return this.accessToken
    }

    getAccessToken():Ref<string> {
        return this.accessToken
    }

    getMsalConfig():Ref<IMsalConfig> {
        return this.msalConfig
    }
}

export default AzureService