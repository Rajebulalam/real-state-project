// import { GoogleApiWrapper, Map } from 'google-maps-react';
import React from 'react';

const GoogleLocation = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-6 pb-12'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-4xl pb-10 text-center font-bold text-primary'>Our Office <span className='text-secondary'>Location</span> </h2>

            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=wemart,%20abu%20dhabi&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                </div>
            </div>


            {/* <Map
                google={this?.props?.google}
                style={{ width: "100%", height: "100px" }}
                zoom={10}
                initialCenter={
                    {
                        lat: 14.606972,
                        lng: -61.066905
                    }
                }
            /> */}
        </div>
    );
};

export default GoogleLocation;

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyDCFfJCTCgpz6mJdctDVyh6gnBPYDdOudc"
// })(GoogleLocation)

// AIzaSyDCFfJCTCgpz6mJdctDVyh6gnBPYDdOudc