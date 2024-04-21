import React, { useEffect, useState, useRef } from 'react';
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Conversion() {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [lastTranscriptLength, setLastTranscriptLength] = useState(0);
    const [videoIndex, setVideoIndex] = useState(1);
    const videoEl = useRef(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const timeoutRef = useRef(null);

    const attemptPlay = () => {
        if (videoEl.current) {
            videoEl.current.load();
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
        }
    };

    useEffect(() => {
        attemptPlay();
    }, [videoIndex]);

    const startTimeout = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        
        const newTimeoutId = setTimeout(() => {
            if (transcript.length === lastTranscriptLength) {
                console.log('No speech detected for 100 seconds');
                setVideoIndex(prevIndex => (prevIndex < 5 ? prevIndex + 1 : 1));
            }
        }, 10000); // 100 seconds
        
        setTimeoutId(newTimeoutId);
    };

    useEffect(() => {
        startTimeout();
        return () => clearTimeout(timeoutId);
    }, [transcript]);

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true });
        startTimeout();
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        downloadTranscript();
    };

    const downloadTranscript = () => {
        const csvContent = "data:text/csv;charset=utf-8," + transcript.replace(/\n/g, "\r\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "transcript.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div style={{ textAlign: "center", }} className='bg-gray-100 w-full h-screen'>
            <div style={{ marginBottom: "20px"}}>
                <video
                    style={{ maxWidth: "90%", width: "500px", margin: "auto" }}
                    playsInline
                    autoPlay
                    alt="All the devices"
                    src={`server/clips/${videoIndex}.mp4`}
                    ref={videoEl}
                />
            </div>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>Microphone: {listening ? 'on' : 'off'}</p>
            <button style={{ margin: "5px", padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }} onClick={startListening}>Start</button>
            <button style={{ margin: "5px", padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px" }} onClick={stopListening}>Stop</button>
            <p style={{ fontSize: "16px", marginTop: "20px" }}>{transcript}</p>
        </div>  
    );  
}
