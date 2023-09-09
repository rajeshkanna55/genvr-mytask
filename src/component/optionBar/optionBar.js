import { ModelOption } from "../modelOptions/modelOptions";


const OptionBar=({pattern})=>{
    let styleComponent;
    switch(pattern){
        case 1:
            styleComponent=(<><ModelOption/></>)
        default:
            styleComponent=(<><ModelOption/></>)
    }
    return(
        <>
        {styleComponent}
        </>
    );
}

export default OptionBar;