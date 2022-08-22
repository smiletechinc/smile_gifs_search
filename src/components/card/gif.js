import React from 'react';
import { LazyLoaderWrapper } from "../../LazyLoadWrapper"



const GifCardStyle = styled('div')({
    position: "relative",
    display: "flex",
    borderRadius: "4px",
    boxShadow: "0 0 2px lightgrey",
    ...GifCardDimension
})


export const GifCardDimension = { height: "320px", width: "280px" };


export const gif = ({ item }) => {
    return (
        <GifCardStyle>
            <LazyLoaderWrapper>
                {({ onLoad }) => <img onLoad={onLoad} height="100%" width="100%" src={item?.images?.fixed_height_small?.webp} alt="loading..." />}
            </LazyLoaderWrapper>
        </GifCardStyle>
    )
}


