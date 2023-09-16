import { Backdrop } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

export default function Loader({loading}){
    return (
      <>
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <InfinitySpin width="200" color="rgb(45,193,186)" />
        </Backdrop>
      </>
    );
}