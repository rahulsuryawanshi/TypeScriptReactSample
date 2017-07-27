import { ISPList } from "./ISPList";
import * as pnp from 'sp-pnp-js';

export class SPService {

    public GetWebList():Promise<ISPList[]>{
        return pnp.sp.web.lists.select("Id,Title,Hidden,ItemCount").get().then(listResponse =>{
            if(listResponse){
                return listResponse.map((list:any) =>{
                    return {
                       Id: list.Id,
                       Title:list.Title,
                       Hidden:list.Hidden,
                       ItemCount:list.ItemCount    
                    };
                });
            }
        });
    }
}