// @ts-nocheck

import { ReviewBox } from '../Styles'
import { Rating, Stack, Typography } from '@mui/material'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

export const Review = () => {
    return (
        <>
            <ReviewBox p={2}>
                <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Stack direction='column' gap={'10px'}>
                            <Stack direction={'row'} justifyContent={''}>
                                <Rating
                                    name="simple-controlled"
                                    value={5}
                                    readOnly
                                    color='#1d3525'
                                    sx={{ "color": "#1d3525", fontSize: "15px", gap: "5px" }}
                                />
                                <Typography fontSize={"13px"} fontFamily={'sans-serif'}>
                                    5 star rating - Excellent
                                </Typography>
                            </Stack>
                            <Typography variant='h5'>
                                საუკეთესო თავის სფეროში,ვუწევ რეკომენდაციას,
                                და კიდევ რაღაც
                            </Typography>
                            <Stack direction={'row'}>
                                <Typography fontSize={"13px"}>
                                    ნიკოლო მაკიაველი
                                </Typography>
                            </Stack>
                        </Stack>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Stack direction='column' gap={'10px'}>
                            <Stack direction={'row'} justifyContent={''}>
                                <Rating
                                    name="simple-controlled"
                                    value={5}
                                    readOnly
                                    color='#1d3525'
                                    sx={{ "color": "#1d3525", fontSize: "15px", gap: "5px" }}
                                />
                                <Typography fontSize={"13px"} fontFamily={'sans-serif'}>
                                    5 star rating - Excellent
                                </Typography>
                            </Stack>
                            <Typography variant='h5'>
                                საუკეთესო თავის სფეროში,ვუწევ რეკომენდაციას,
                                და კიდევ რაღაც
                            </Typography>
                            <Stack direction={'row'}>
                                <Typography fontSize={"13px"}>
                                    ნიკოლო მაკიაველი
                                </Typography>
                            </Stack>
                        </Stack>
                    </SwiperSlide>
                </Swiper>
            </ReviewBox>

        </>
    )
}