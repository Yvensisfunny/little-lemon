import React from 'react';

const booking = (props) => {
    return(
        <bookingform availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    );
};

export default booking;