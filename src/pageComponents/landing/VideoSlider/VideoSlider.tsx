"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box } from "@radix-ui/themes";

interface MediaSource {
    hd: string;
    qhd: string;
    uqhd: string
    videoLength: number;
}

const getResolutionKey = () => {
    const width = window?.innerWidth;
    if (width < 768) return "hd";
    if (width < 1920) return "qhd";
    return "uqhd";
};

const mediaItems: MediaSource[] = [
    {
        hd: "/static/truck_slider/truck_1_bridge_1280x720.mp4",
        qhd: "/static/truck_slider/truck_1_bridge_1920x1080.mp4",
        uqhd: "/static/truck_slider/truck_1_bridge_3840x2160.mp4",
        videoLength: 23.8,
    },
    {
        hd: "/static/truck_slider/truck_1_road_1280x720.mp4",
        qhd: "/static/truck_slider/truck_1_road_1920x1080.mp4",
        uqhd: "/static/truck_slider/truck_1_road_3840x2160.mp4",
        videoLength: 13.8,
    },
];

export const VideoSlider = () => {
    const [current, setCurrent] = useState(0);
    const [resKey, setResKey] = useState<"hd" | "qhd" | "uqhd">(getResolutionKey());
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // update resolution dynamically
    useEffect(() => {
        if (window) {
            const updateRes = () => {
                const newKey = getResolutionKey();
                setResKey((prev) => (prev !== newKey ? newKey : prev));
            };
            updateRes();
            window.addEventListener("resize", updateRes);
            return () => window.removeEventListener("resize", updateRes);
        }
    }, []);

    // function to play a specific video
    const handlePlayVideo = useCallback((index: number) => {
        const vid = videoRefs.current[index];
        if (!vid) return;
        vid.currentTime = 0;
        vid.play().catch((err) => console.warn("Autoplay failed:", err));
    }, []);

    // handle video switching
    useEffect(() => {
        const currentVideo = videoRefs.current[current];
        if (!currentVideo) return;

        // pause all others
        videoRefs.current.forEach((vid, i) => {
            if (vid && i !== current) vid.pause();
        });

        // only play when ready
        if (currentVideo.readyState >= 2) {
            handlePlayVideo(current);
        } else {
            const onLoad = () => handlePlayVideo(current);
            currentVideo.addEventListener("loadeddata", onLoad, { once: true });
        }

        // schedule next
        const length = mediaItems[current]?.videoLength ?? 10;
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % mediaItems.length);
        }, length * 1000);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [current, handlePlayVideo]);

    // 👇 This runs once: immediately start first video when mounted
    useEffect(() => {
        const vid = videoRefs.current[0];
        if (!vid) return;

        if (vid.readyState >= 2) {
            handlePlayVideo(0);
        } else {
            vid.addEventListener("loadeddata", () => handlePlayVideo(0), {
                once: true,
            });
        }
    }, [handlePlayVideo]);

    return (
        <Box className="video-slider">
            {mediaItems.map((item, i) => (
                <video
                    key={i}
                    // @ts-expect-error expected
                    ref={(el) => (videoRefs.current[i] = el)}
                    className={`slider-video ${i === current ? "active" : ""}`}
                    src={item[resKey]}
                    muted
                    playsInline
                    preload="auto"
                />
            ))}
        </Box>
    );
};