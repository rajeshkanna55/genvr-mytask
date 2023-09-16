import Tooltip, { tooltipClasses }  from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} placement='left'/>
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 150,
    },
  });