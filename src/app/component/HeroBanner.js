'use client';
import {Box, Container} from "@mui/material";
import Image from "next/image";
import {createContext, useCallback, useEffect, useState} from "react";
import styled from "@emotion/styled";

export const ScrollPositionContext = createContext({});

const changSize = (currentPositionScroll, scrollSpeed = 0.03, sign = '-') => {
    if (currentPositionScroll) {
        const total = currentPositionScroll * scrollSpeed;
        return `${sign}${total}%`;
    }
    return '0%';
}

const BackgroundSite = styled(props => {
    const {style, changSize, topMD, topXS, topLG, src, alt, width, height, ...other} = props;
    return <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...other}/>
})(({theme, style, topXS, topMD, topLG, changSize}) => {
    return {
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            height: 'auto',
            top: topXS,
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: 'auto',
            top: topMD,
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%',
            height: 'auto',
            top: topLG,
        },
        position: 'absolute',
        left: 0,
        transform: `translate3d(0px, ${changSize}, 0px)`,
        ...style
    }
})


export const HeroBanner = ({children}) => {
    const [positionScroll, setPositionScroll] = useState(null);


    const scroll = useCallback((e) => {
        const { scrollY } = window;
        setPositionScroll(scrollY);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", scroll, {passive: true});
        }
    }, []);


    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#0b1d26',
                boxShadow: '28px 28px 80px 0 rgba(11, 29, 38, 0.4)',
            }}
        >
                <Box
                    width={1920}
                    height={1513}
                    sx={{
                        background: 'linear-gradient(270deg, rgba(253,255,253,0.05) 0%, rgba(79,78,79,0.3) 47%), url(/image/heroBanner/HG.png)',
                        width: '100%',
                        height: {xs: '500px', md: '1000px'},
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 0

                    }}
                />
                 <BackgroundSite
                    src={'/image/heroBanner/MG.png'}
                    alt=''
                    width={1920}
                    height={1423}
                    changSize={changSize(positionScroll, 0.02)}
                    topXS={'400px'}
                    topMD={'300px'}
                    topLG={'300px'}
                    style={{
                        zIndex: 0,
                    }}
                />

                <BackgroundSite
                    src={'/image/heroBanner/VG.png'}
                    alt=''
                    width={1920}
                    height={1804}
                    changSize={changSize(positionScroll, 0.005, '')}
                    topXS={'500px'}
                    topMD={'470px'}
                    topLG={'530px'}
                    style={{

                        position: "absolute",
                        left: 0,
                        display: 'block',
                        zIndex: 4
                    }}
                />

            <Container
                maxWidth={'1800px'}
                sx={{
                    maxWidth: '1800px',
                }}
            >
               <ScrollPositionContext.Provider value={positionScroll}>
                   {children}
               </ScrollPositionContext.Provider>
            </Container>
        </Box>
    )
}
