import React, {
    useState,
    useEffect,
} from 'react'

function App() {
    const [location, setLocation] = useState({})

    useEffect(()=>{
        navigator.geolocation.watchPosition(handlePosition)
    }, [])
    const handlePosition = ({coords}) => {
        const {latitude, longitude} = coords;
        setLocation({latitude, longitude});
    }
    return ( 
      <div className = "App" >
        <>
            Latitude: {location.latitude} <br />
            Longitude: {location.longitude}
        </>
       </div>
    );
}

export default App;