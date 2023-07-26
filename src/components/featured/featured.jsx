import { InfoOutlined, PlayArrow } from "@mui/icons-material";
// import Feauredvid from "../../assets/featuredvid.mp4"
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import ReactPlayer from 'react-player';
import Matrix from "../../assets/matrix_featured.mp4"
import "./featured.scss";
import Vid1 from "../../assets/vid1.mp4"
import Vid2 from "../../assets/vid2.mp4"
import Vid3 from "../../assets/vid3.mp4"


export default function Featured() {

  const [pipMode, setPipMode] = useState(false);

  const enablePip = () => {
    setPipMode(true);
  };
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: "https://www.youtube.com/watch?v=lRer6SbMCHw",
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://www.youtube.com/watch?v=UGxxp5PAmT0",
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 3,
      title: "Video 3",
      src: "https://www.youtube.com/watch?v=T1wbLNvQImk",
      credit: "Video by cottonbro from Pexels",
    },
  ];


  return (
    <div className="featured">
      {/* <video id="background-video" autoPlay loop muted> */}
      {/* <source src={Matrix} type="video/mp4" /> */}
      {/* Your browser does not support the video tag. */}
      {/* </video> */}
      <Carousel id="background-video" style={{ width: '100%' }}>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer muted autoplay loop
                style={{
                  position: "relative",
                  paddingBottom: "0",
                  paddingTop: "0",
                  height: "0",
                  width: "100px",
                }}
                url={videoObj.src}
                pip={true}
                // pip={pipMode}
                controls={false}
                playing={true}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
