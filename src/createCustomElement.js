import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

export const CustomLink = styled(props => {
    const {href, sx = {}, ...other} = props;
    return <Link href={href} {...other}/>
})(({sx}) => {
    return {
        display: 'flex',
        alignItems: 'center',
        width: '120px',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '32px',
        textDecoration: 'none',
        marginLeft: '0px',
        transition: '200ms margin-left linear',
        marginTop: '40px',
        '&:hover': {
            marginLeft: '10px',
        },
        ...sx,
    }
});

export const Logo = styled(props => {
    const {sx = {}, href, ...other} = props;
    return <Link href={href} {...other}/>
})(({sx}) => {
    return {
        display: 'block',
        height: '50px',

        ...sx
    }
});

export const HeaderNavBtn = styled(props => {
    const {sx = {}, href, ...other} = props;
    return <Link href={href} {...other}/>
})(({sx}) => {
    return {
        fontSize: '16px',
        lineHeight: '32px',
        fontWeight: 600,
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            color: '#fbd784',
        },
        ...sx,
    }
});

export const FooterBtnNav = styled(props => {
    const {sx = {}, href, ...other} = props;
    return <Link href={href} {...other}/>
})(({sx}) => {
    return {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Sans Serif, Arial, sans-serif',
        fontSize: '16px',
        lineHeight: '32px',
        fontWeight: 500,
        ...sx,
    }
});

export const CustomImage = styled(props => {
    const {sx = {}, src, alt, width, height, ...other} = props;
    return <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                {...other}
            />
})(({theme, sx = {}}) => {
    return {
        width: '100%',
        height: 'auto',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '480px',
        },
        ...sx,
    }
})