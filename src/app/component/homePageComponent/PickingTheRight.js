import {Box, Typography} from "@mui/material";
import {CustomImage, CustomLink} from "@/createCustomElement";
import {ArrowDown} from "@/svgCreator";
import Image from "next/image";

export const PickingTheRight = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: {xs: 'unset', md: '100px'},
                rowGap: {xs: '150px', md: 'unset'},
                position: 'relative',
                justifyContent: 'space-between',
                flexDirection: {xs: 'column-reverse', lg:'row-reverse'},
                marginTop: {xs: '100px', md: '300px'},

            }}
        >
            <Typography
                sx={{
                    position: 'absolute',
                    top: {xs: '550px', md: '30px'},
                    right: {xs: 'unset', md: '450px'},
                    left: {xs: '-30px', md: 'unset'},
                    opacity: '0.1',
                    fontSize: '200px',
                    lineHeight: '100%',
                    fontWeight: 700,
                    color: 'white',
                }}
            >
                02
            </Typography>
            <Box
                sx={{
                    color: 'white',
                    flexBasis: 'calc(100% / 2)',
                    maxWidth: '550px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '80px',
                            height: '2px',
                            backgroundColor: '#fbd784',
                            //
                        }}
                    />
                    <Typography
                        variant={'subtitle2'}
                        sx={{
                            textTransform: 'uppercase',
                            marginLeft: '10px',
                            color: '#fbd784',
                            fontSize: '14px',
                            lineHeight: '24px',
                            fontWeight: '800',
                            letterSpacing: '6px',
                        }}
                    >
                        Hiking Essentials
                    </Typography>
                </Box>
                <Typography
                    variant={'h2'}
                    sx={{
                        display: 'block',
                        marginTop: '30px',
                        fontSize: '56px',
                        lineHeight: '110%',
                        fontWeight: 400,
                        letterSpacing: '4px'
                    }}
                >
                    Picking the right Hiking Gear!
                </Typography>
                <Typography
                    variant={'p'}
                    sx={{
                        fontFamily: 'Sans Serif, Arial, sans-serif',
                        fontSize: '16px',
                        lineHeight: '32px',
                        fontWeight: 500,
                        display: 'block',
                        marginTop: '30px',
                    }}
                >
                    The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                    Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.
                </Typography>
                <CustomLink
                    href={''}
                    sx={{
                        color: '#fbd784',
                        fill: '#fbd784',
                    }}
                >
                    read more
                    <ArrowDown
                        sx={{
                            marginLeft: '10px',
                            rotate: '270deg',
                        }}
                    />
                </CustomLink>
            </Box>
            <Box
                sx={{
                    flexBasis: 'calc(100% / 2)',
                    width: {xs: '100%', md: '480px'},
                }}
            >
                <CustomImage
                    src={'/image/sectionGetStarted/02.png'}
                    alt={''}
                    width={480}
                    height={700}
                    style={{
                        display: "block",
                        marginRight: 'auto',
                    }}
                />
            </Box>
        </Box>
    )
}