import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";

import { drawRect, ans } from "./utilities-nitish";

import "./sign-language.styles.css";

const SignLanguageNitish = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [answer, setAnswer] = useState(ans);

  const runCoco = async () => {
    const net = await tf.loadGraphModel(
      "https://majorprojecttfmodel.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
    );

    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [640, 480]);
      const casted = resized.cast("int32");
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);

      setAnswer(ans);

      const boxes = await obj[7].array();
      const classes = await obj[0].array();
      const scores = await obj[3].array();

      const ctx = canvasRef.current.getContext("2d");

      requestAnimationFrame(() => {
        drawRect(
          boxes[0],
          classes[0],
          scores[0],
          0.7,
          videoWidth,
          videoHeight,
          ctx
        );
      });

      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div className="sign-language">
      <h1>Sign Language Detection and Translation</h1>
      <Webcam
        ref={webcamRef}
        muted={true}
        className="webcam-1"
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />

      <canvas
        className="webcam-1"
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 8,
          width: 640,
          height: 480,
        }}
      />
      <h1 className="sign-language-text">{answer}</h1>
      <Link className="sections selectSections" to="/signlanguage2">
        <h1 className="link">Sign Language Translation</h1>
      </Link>
    </div>
  );
};

export default SignLanguageNitish;
