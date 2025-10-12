"use client";
import { useGoogleMap } from "@/components/layout/container/googleLocation/locationMarker";
import { Spinner } from "@radix-ui/themes";

export const ContactMap = () => {
  const { isLoaded, GoogleMapComponent } = useGoogleMap({
    center: { lat: 59.43598921661589, lng: 24.751280785087467 }, // Tallinn
    zoom: 1,
  });

  if (!isLoaded) return <Spinner size="3" />;

  return <div className="contact__map-inner">{GoogleMapComponent} </div>;
};
