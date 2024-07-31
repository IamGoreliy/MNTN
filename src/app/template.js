import {Box} from "@mui/material";
import {Header} from "@/app/component/header/Header";

const Template = ({children}) => {
    return (
        <Box>
            <Header/>
            {children}
        </Box>
    )
}

export default Template