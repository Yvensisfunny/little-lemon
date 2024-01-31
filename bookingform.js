import React from 'react';

const bookingform =(props) =>{
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
      props.Submit(e);
    }

    const handleChange = (e) => {
     setDate(e);
     Props.dispatch(e);
    }
    return(
        <Header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlfor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>
                         {/* for time slection */}
                         <div>
                         <label htmlfor='book-time'>Choose Time:</label>
                         <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                           <option value="">select a Time</option>
                           {
                            props.availableTimes.availableTimes.map(availableTimes=>{return <option key={availableTimes}>{availableTimes}</option>})
                           }
                         </select>
                         </div>

                         {/* for Number of guest */}
                         <div>
                            <label htmlfor='book-guests'>Number of guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuest(e.target.value)}/>
                         </div>

                         {/* Ocation field */}
                         <div>
                         <label htmlfor='book-occasion'>occasion</label>
                         <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion (e.target.value)}>
                          <option>Birthday</option>
                          <option>Anniversary</option>
                         </select>
                         </div>
                         {/* submit button */}
                         <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
                         </div>
                    </fieldset>

                </form>
            </section>
        </Header>
    );
};

export default bookingform;