import {Box, Typography} from "@mui/material";
import {ArrowDown} from "@/svgCreator";

const blurringTitle = (value, bodyWidthSize) => {
    if (bodyWidthSize < 900) {
        if (value > 400) {
            return 0;
        }
        return 100 / value;
    }
    if (value > 1000) {
        return 0;
    }
    return 100 / (value / 2);
}

export const Title = ({positionScroll, bodyWidthSize}) => {
    return (
        <Box
            sx={{
                opacity: blurringTitle(positionScroll, bodyWidthSize),
                height: '300px',
                display: 'flex',
                justifyContent: 'center',


            }}
        >
            <Box
                sx={{
                    position: 'fixed',
                    top: {xs: '150px', lg: '200px'},
                    padding: {xs: '0px 30px', md: 'unset'},
                    zIndex: 3,

                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        // justifyContent: 'center',
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
                            fontSize: {md:'14px'},
                            lineHeight: '24px',
                            fontWeight: '800',
                            letterSpacing: '6px',
                        }}
                    >
                        a hiking guide
                    </Typography>
                </Box>
                <Typography
                    variant={'h1'}
                    sx={{
                        fontSize: {xs: '48px', md:'75px'},
                        lineHeight: '120%',
                        fontWeight: 400,
                        textTransform: 'capitalize',
                        color: 'white',
                    }}
                >
                    Be Prepared For The <Box component={'br'} sx={{display: {xs: 'none', md: 'block'}}}/> Mountains And Beyond!
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '30px',
                    }}
                >
                    <Box
                        sx={{
                            marginRight: '10px',
                            fontSize: '18px',
                            lineHeight: '32px',
                            fontWeight: 700,
                            color: 'white'
                        }}
                    >
                        scroll down
                    </Box>
                    <ArrowDown
                        sx={{
                            fill: 'white',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}