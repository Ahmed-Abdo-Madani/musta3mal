import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default () => {
  try {
    const [location, setLocation] = useState();
    const getLocation = async () => {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    };
    useEffect(() => {
      getLocation();
    }, []);
    return location;
  } catch (error) {
    console.log(error);
  }
};
