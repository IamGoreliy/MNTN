'use client';
import {Box, Container, Typography} from "@mui/material";
import {FooterBtnNav, Logo} from "@/createCustomElement";
import {LogoIcon} from "@/svgCreator";
import {listLinkMoreBlog, listLinkMoreMNTN} from "@/app/component/Footer/dataFooter";

export const Footer = () => {
    return (
        <Box
            sx={{
                padding: {xs: '100px 0px', md: '300px 0px 200px'},
            }}
        >
            <Container
                maxWidth={'1440px'}
                sx={{
                    maxWidth: '1440px',
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: 'space-between',
                    rowGap: {xs: '50px', md: 'unset'},
                }}
            >
            <Box>
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
                <Typography
                    sx={{
                        marginTop: '20px',
                        width: '280px',
                        color: 'white',
                    }}
                >
                    Get out there & discover your next slope, mountain & destination!
                </Typography>
                <Typography
                    paragraph={true}
                    sx={{
                        marginTop: '70px',
                        width: '320px',
                        color: 'white',
                        opacity: 0.5,
                    }}
                >
                    Copyright 2020 MNTN, Inc. Terms & Privacy
                    A concept by Sergey Goreliy
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    columnGap: '140px',
                }}
            >
                <Box>
                    <Typography
                        variant={'h4'}
                        sx={{
                            color: '#fbd784',
                            fontSize: '24px',
                            lineHeight: '32px',
                            fontWeight: 400,
                        }}
                    >
                        More on The Blog
                    </Typography>
                    <Box
                        component={'ul'}
                        sx={{
                            padding: 0,
                            listStyle: 'none',
                        }}
                    >
                        {listLinkMoreBlog.map(ele => {
                            const {id, nameLink, hrefLink} = ele;
                            return (
                                <Box
                                    key={id}
                                    component={'li'}
                                    sx={{
                                        '& + &': {
                                            marginTop: '8px',
                                        },
                                    }}
                                >
                                    <FooterBtnNav
                                        href={hrefLink}
                                    >
                                        {nameLink}
                                    </FooterBtnNav>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: {xs: 'none', lg: 'block'},
                    }}
                >
                    <Typography
                        variant={'h4'}
                        sx={{
                            color: '#fbd784',
                            fontSize: '24px',
                            lineHeight: '32px',
                            fontWeight: 400,
                        }}
                    >
                        More on MNTN
                    </Typography>
                    <Box
                        component={'ul'}
                        sx={{
                            padding: 0,
                            listStyle: 'none',
                        }}
                    >
                        {listLinkMoreMNTN.map(ele => {
                            const {id, nameLink, hrefLink} = ele;
                            return (
                                <Box
                                    key={id}
                                    component={'li'}
                                    sx={{
                                        '& + &': {
                                            marginTop: '8px',
                                        },
                                    }}
                                >
                                    <FooterBtnNav
                                        href={hrefLink}
                                    >
                                        {nameLink}
                                    </FooterBtnNav>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
            </Container>
        </Box>
    )
}