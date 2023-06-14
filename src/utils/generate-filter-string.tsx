import { Filter } from "@/@types/filter";

//generate filtersString 
export const  filtersString = (filters:Filter[]|undefined):string|undefined=> {
  if(filters !== undefined){
      return filters
       .map((filter) => {
        if(filter.value!=="")
       return (`filters=${filter.key}<>${encodeURIComponent(filter.value)}`)
      })
       .join("&");
    }
    
  else 
    return;
  }