'use client';
import {Box, Button} from "@mui/material";
import {navBtn} from "@/app/component/header/dataHeader";
import {HeaderNavBtn, Logo} from "@/createCustomElement";
import {AccountLogo, LogoIcon} from "@/svgCreator";

export const Header = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: {xs: '20px', md: '40px'}

            }}
        >
            <Logo
                href={''}
            >
                <LogoIcon
                    sx={{
                        width: '100px',
                        height: '50px',
                        fill: 'white',
                    }}
                />
            </Logo>
            <Box
                component={'ul'}
                sx={{
                    display: {xs: 'none', md:'flex'},
                    listStyle: 'none',
                    padding: 0,
                    columnGap: '30px'
                }}
            >
                {navBtn.map((nameBtn, index) => {
                    return (
                        <Box
                            key={index}
                            component={'li'}
                        >
                            <HeaderNavBtn
                                href={''}
                            >
                                {nameBtn}
                            </HeaderNavBtn>
                        </Box>
                    )
                })}
            </Box>
            <Box>
                <Button
                    sx={{
                        // fontFamily: 'Sans Serif, Arial, sans-serif',
                        color: 'white',
                        fontSize: '17px',
                        lineHeight: '32px',
                        letterSpacing: '1px',
                        fontWeight: 500,
                        textTransform: 'none',
                        '&:hover, &:hover > svg': {
                            color: '#fbd784',
                            fill: '#fbd784',
                        },
                    }}
                >
                    <AccountLogo
                        sx={{
                            fill: 'white',
                            marginRight: '5px',
                        }}
                    />
                    Account
                </Button>
            </Box>
        </Box>
    )
}