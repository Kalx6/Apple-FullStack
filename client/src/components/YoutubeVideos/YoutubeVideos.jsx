import React from "react";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import "./YoutubeVideos.css";
import { Link } from "react-router-dom";

const apiurl = import.meta.env.VITE_VIDEO_API_KEY;

// console.log(apiurl);

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    try {
      const fetchVideo = async () => {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&type=video&key=${apiurl}`,
        );
        const data = await res.json();
        setVideos(data.items);
      };
      fetchVideo();
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }, []);

  console.log(videos);

  return (
    <>
      <section className="videos-section">
        <h1 className="header">Latest Videos</h1>
        <div className="container-fluid">
          <div className="row">
            {videos.map((video) => {
              console.log(video);
              return (
                <Card className="videoCard">
                  <Link to={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                    <div>
                      <Card.Img
                        variant="top"
                        src={video.snippet.thumbnails.medium.url}
                        style={{ height: "180px", objectFit: "cover" }}
                      />
                    </div>
                  </Link>

                  <Card.Body>
                    <Card.Title>{video.snippet.title}</Card.Title>
                    <Card.Text>
                      {video.snippet.description.length > 100
                        ? video.snippet.description.substring(0, 100) + "..."
                        : video.snippet.description}
                    </Card.Text>
                    <Card.Text className="text-muted small">
                      {video.snippet.publishTime.substring(0, 10)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default YoutubeVideos;
