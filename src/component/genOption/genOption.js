import { Advanced } from "../advanced/advanced";
import { Basic } from "../basic/basic";
import { Control } from "../control/control";

 const GenOption=({option,handlePattern})=>{
    let showComponent;
    switch (option) {
      case 0:
        showComponent = (<><Basic handlePattern={handlePattern}/></>);
        break;
      case 1:
        showComponent = (<><Advanced/></>);
        break;
      case 2:
        showComponent = (<><Control/></>);
        break;
      case 3:
        showComponent = (<></>);
        break;
      default:
        showComponent = (<><Basic/></>);
    }
    return (
    <>{showComponent}</>
    );
}

export default GenOption;