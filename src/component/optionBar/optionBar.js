import { Aesthetic } from "../aestheticEmbedding/aestheticEmbedding";
import { ArtistStyle } from "../artistStyles/artistStyles";
import { Lora } from "../lora/lora";
import { Styles } from "../styles/styles";
import { TextInverse } from "../textInverse/textInverse";

const OptionBar=({pattern})=>{
    let styleComponent;
    switch(pattern){
        case 0:
            styleComponent=(<><Styles/></>);
            break;
        case 1:
            styleComponent=(<><ArtistStyle/></>);
            break; 
        case 2:
            styleComponent=(<><Aesthetic/></>);
            break; 
        case 3:
            styleComponent=(<><TextInverse/></>);
            break; 
        case 4:
            styleComponent=(<><Lora/></>);
            break; 
        case 5:
            styleComponent=(<></>);
            break; 
        case 6:
            styleComponent=(<></>);
            break; 
        default:
            styleComponent=(<><Styles/></>)
    }
    return(
        <>
        {styleComponent}
        </>
    );
}

export default OptionBar;