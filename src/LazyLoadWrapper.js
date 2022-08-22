import CircularProgress from '@mui/material/CircularProgress';

import React, { useState } from 'react'


const LazyLodingStyle = styles('div')({
    position: "relative",
    display: "flex",
    borderRadius: "4px",
    boxShadow: "0 0 2px lightgrey",
    ...dimension
});


const ImgLoadingStyle = styled('div')({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...dimension,
    position: "absolute",
    top: "0",
    left: "0"
});

export const dimension = { height: "100%", width: "100%" }

export const LazyLoadWrapper = ({
    children }) => {
    const [imgLoading, setImgLoading] = useState(true)
    return (
        <LazyLodingStyle >
            {imgLoading && (
                <ImgLoadingStyle>
                    <CircularProgress />
                </ImgLoadingStyle>
            )}
            {children({ onLoad: () => setImgLoading(false) })}
        </LazyLodingStyle>
    )
};