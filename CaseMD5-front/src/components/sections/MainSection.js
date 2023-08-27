import React from 'react';
import BookSection from "./normalBookSection/bookSection";
import RightSideSection from "./rightSideSection/rightSideSection";

const CenteredSection = ({children, style}) => {
    const defaultStyles = {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        marginTop: "10px",
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    };

    return <section style={{...defaultStyles, ...style}}>{children}</section>;
};

export default function MainSection(props) {
    return (
        <CenteredSection>
            <BookSection session={props.session}/>
            <RightSideSection session={props.session} />
        </CenteredSection>
    );
}
