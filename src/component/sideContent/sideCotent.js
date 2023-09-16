import style from './sideContent.module.css';

export default function SideContent({content}){
   
    return (
      <>
        <div className="container-fluid">
          <div className={style.side_content}>
            <div className={style.cont}>
              {content()}
            </div>
          </div>
        </div>
      </>
    );
}