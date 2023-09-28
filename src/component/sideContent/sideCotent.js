import { useMediaQuery } from 'react-responsive';
import style from './sideContent.module.css';

export default function SideContent({content}){
  const media = useMediaQuery({query:'(min-width: 1224px)'});
    return (
      <>
        <div className="container-fluid">
          <div className={media ? style.side_content : null}>
            <div className={media ? style.cont : null}>
              {content()}
            </div>
          </div>
        </div>
      </>
    );
}