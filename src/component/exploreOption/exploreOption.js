

const exploreOption=({option})=>{
    const key = parseInt(option);
      let showComponent;
      switch (key) {
        case 0:
          showComponent = (<></>);
          break;
        case 1:
          showComponent = (<></>);
          break;
        case 2:
          showComponent = (<></>);
          break;
        case 3:
          showComponent = (<></>);
          break;
        default:
          showComponent = (<></>);
      }
      return (
      <>{showComponent}</>
      );
  }
  
  export default exploreOption;