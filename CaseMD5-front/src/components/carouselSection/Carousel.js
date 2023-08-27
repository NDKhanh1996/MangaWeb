import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath:
            process.env.PUBLIC_URL + '/carousel/pxfuel.jpg',
    },
    {
        imgPath:
            process.env.PUBLIC_URL + '/carousel/pxfuel (1).jpg',
    },
    {
        imgPath:
            process.env.PUBLIC_URL + '/carousel/pxfuel (2).jpg',
    },
    {
        imgPath:
            process.env.PUBLIC_URL + '/carousel/pxfuel (3).jpg',
    },
    {
        imgPath:
            process.env.PUBLIC_URL + '/carousel/pxfuel (4).jpg',
    }
];

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{flexGrow: 1}}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={index}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        display: 'block',
                                        overflow: 'hidden',
                                        width: '100%',
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
            </Box>
        </div>
    );
}

export default Carousel;
