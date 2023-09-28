import { Aesthetic } from "../aestheticEmbedding/aestheticEmbedding";
import { ArtistStyle } from "../artistStyles/artistStyles";
import { BaseModel } from "../baseModel/baseModel";
import { Lora } from "../lora/lora";
import SelectedItems from "../selectedItems/selectedItems";
import { Styles } from "../styles/styles";
import { TextInverse } from "../textInverse/textInverse";

const OptionBar=({pattern})=>{
      const key = parseInt(pattern);
    let styleComponent;
    switch(key){
        case 0:
            styleComponent=(<><SelectedItems/></>);
            break;
        case 1:
            styleComponent=(<><BaseModel/></>);
            break; 
        case 2:
            styleComponent=(<><Lora/></>);
            break; 
        case 3:
            styleComponent=(<> <Styles/></>);
            break; 
        case 4:
            styleComponent=(<><ArtistStyle/></>);
            break; 
        case 5:
            styleComponent=(<><TextInverse/></>);
            break; 
        case 6:
            styleComponent=(<><Aesthetic/></>);
            break; 
        default:
            styleComponent=(<><Lora/></>)
    }
    return(
        <>
        {styleComponent}
        </>
    );
}

export default OptionBar;