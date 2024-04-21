import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterviewComponent = () => {
  const [meetingUrl, setMeetingUrl] = useState('');

  useEffect(() => {
    const fetchMeetingUrl = async () => {
      try {
        const response = await axios.get('/get-meeting-url');
        setMeetingUrl(response.data.meetingUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeetingUrl();
  }, []);

  return (
    <div>
      {meetingUrl && (
        <button onClick={() => window.location.href = meetingUrl}>
          Start Interview
        </button>
      )}
    </div>
  );
};

export default InterviewComponent;
