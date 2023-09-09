import { Models } from "../models/models";

const StyleOption=({pattern})=>{
    let styleComponent;
    switch(pattern){
        case 1:
            styleComponent=(<><Models/></>)
        default:
            styleComponent=(<><Models/></>)
    }
    return(
        <>
        {styleComponent}
        </>
    );
}

export default StyleOption;