import React from 'react';
import BookCard from "../../BookCard";

const LeftSection = ({children, style}) => {
    const defaultStyles = {
        width: '70%',
        margin: '0 auto',
        display: 'flex',
        marginTop: "10px",
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    };

    return (
        <section style={{...defaultStyles, ...style}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1 style={{paddingLeft: 10, color: "#2980b9"}}>Danh sách truyện </h1>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default function BookSection(props) {
    return (
        <LeftSection>
            <BookCard session={props} />
        </LeftSection>
    );
}
