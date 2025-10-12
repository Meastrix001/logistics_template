"use client"

import { useGoogleMap } from "@/components/layout/container/googleLocation/locationMarker";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { AspectRatio, Box } from "@radix-ui/themes";

export const ContactMap = () => {

    const { isLoaded, GoogleMapComponent } = useGoogleMap({
        center: { lat: 59.43598921661589, lng: 24.751280785087467 }, // Tallinn
        zoom: 11,
    });

    return <InViewWrapper direction="bottom" delay={0.15}>
        <Box className="shadow-top-left">
            <AspectRatio ratio={16 / 6}>
                {isLoaded && GoogleMapComponent}
            </AspectRatio>
        </Box>
    </InViewWrapper>
}