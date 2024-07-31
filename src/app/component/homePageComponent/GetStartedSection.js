import {Box, Typography} from "@mui/material";
import {CustomImage, CustomLink} from "@/createCustomElement";
import {ArrowDown} from "@/svgCreator";

export const GetStartedSection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: {xs: 'unset', md: '100px'},
                rowGap: {xs: '150px', md: 'unset'},
                position: 'relative',
                justifyContent: 'space-between',
                flexDirection: {xs: 'column-reverse', lg: 'row'}
            }}
        >
            <Typography
                sx={{
                    position: 'absolute',
                    top: {xs: '550px', md:'20px'},
                    left: {xs: '-30px', md:'-100px'},
                    opacity: '0.1',
                    fontSize: '200px',
                    lineHeight: '100%',
                    fontWeight: 700,
                    color: 'white',
                }}
            >
                01
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
                        get started
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
                    What level of  hiker are you?
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
                    Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
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
                    src={'/image/sectionGetStarted/01.png'}
                    alt={''}
                    width={480}
                    height={700}
                    style={{
                        display: "block",
                        marginLeft: 'auto',
                    }}
                />
            </Box>
        </Box>
    )
}