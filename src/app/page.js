'use client';
import {useContext} from "react";
import {ScrollPositionContext} from "@/app/component/HeroBanner";
import {Title} from "@/app/component/homePageComponent/Title";
import {GetStartedSection} from "@/app/component/homePageComponent/GetStartedSection";
import {Box, Container} from "@mui/material";
import {PickingTheRight} from "@/app/component/homePageComponent/PickingTheRight";
import {UnderstandYourMap} from "@/app/component/homePageComponent/UnderstandYourMap";
import {BodyWidthSizeContext} from "@/app/template";


export default function Page() {
      const positionScroll = useContext(ScrollPositionContext);
      const bodyWidthSize = useContext(BodyWidthSizeContext);
      return (
          <>
            <Title positionScroll={positionScroll} bodyWidthSize={bodyWidthSize}/>
            <Box
                sx={{
                    marginTop: {xs: '450px', md: '750px'},
                    position: 'relative',
                    zIndex: 4
                }}
            >
                <Container
                    maxWidth={'1440px'}
                    sx={{
                        maxWidth: '1440px',
                    }}
                >
                    <GetStartedSection/>
                    <PickingTheRight/>
                    <UnderstandYourMap/>
                </Container>
            </Box>

          </>
      );
    }
