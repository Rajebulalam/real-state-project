import { GoogleApiWrapper, Map } from 'google-maps-react';
import React from 'react';

const GoogleLocation = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-4xl text-center font-bold text-primary'>Our Office <span className='text-secondary'>Location</span> </h2>
            <Map
                google={this?.props?.google}
                style={{ width: "100%", height: "100px" }}
                zoom={10}
                initialCenter={
                    {
                        lat: 14.606972,
                        lng: -61.066905
                    }
                }
            />
        </div>
    );
};

// export default GoogleLocation;
export default GoogleApiWrapper({
    apiKey: "AIzaSyDCFfJCTCgpz6mJdctDVyh6gnBPYDdOudc"
})(GoogleLocation)



// AIzaSyDCFfJCTCgpz6mJdctDVyh6gnBPYDdOudc