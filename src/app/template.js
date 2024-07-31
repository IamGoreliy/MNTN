'use client';
import {Box} from "@mui/material";
import {Header} from "@/app/component/header/Header";
import {HeroBanner} from "@/app/component/HeroBanner";
import {Footer} from "@/app/component/Footer/Footer";
import {createContext} from "react";

export const BodyWidthSizeContext = createContext(null);

const Template = ({children}) => {
    const bodyWidthSize = window.document.body.offsetWidth;
    return (
        <Box>
                <HeroBanner>
                    <Header/>
                    <BodyWidthSizeContext.Provider value={bodyWidthSize}>
                        {children}
                    </BodyWidthSizeContext.Provider>
                    <Footer/>
                </HeroBanner>
        </Box>
    )
}

export default Template;