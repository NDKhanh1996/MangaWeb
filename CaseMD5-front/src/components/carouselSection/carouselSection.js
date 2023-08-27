import React from 'react';
import Carousel from "./Carousel";

const TopSection = ({children, style}) => {
    const defaultStyles = {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        marginTop: "10px",
        backgroundColor: '#fff',
        justifyContent: 'center'
    };

    return <section style={{...defaultStyles, ...style}}>{children}</section>;
};

export default function CarouselSection() {
    return (
        <TopSection>
            <Carousel/>
        </TopSection>
    );
}