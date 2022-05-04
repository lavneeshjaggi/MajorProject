const labelMap = {
  1: { name: "Hello", color: "red" },
  2: { name: "Thank You", color: "yellow" },
  3: { name: "I Love You", color: "lime" },
  4: { name: "Yes", color: "blue" },
  5: { name: "No", color: "purple" },
};

export var ans = "Phrase";

export const drawRect = (
  boxes,
  classes,
  scores,
  threshold,
  imgWidth,
  imgHeight,
  ctx
) => {
  // for (let i = 0; i <= boxes.length; i++) {
  if (boxes[0] && classes[0] && scores[0] > threshold) {
    const [y, x, height, width] = boxes[0];
    const text = classes[0];

    ans = labelMap[text]["name"];

    ctx.strokeStyle = labelMap[text]["color"];
    ctx.lineWidth = 10;
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";

    ctx.beginPath();
    ctx.fillText(
      labelMap[text]["name"] + " - " + Math.round(scores[0] * 100) / 100,
      x * imgWidth,
      y * imgHeight - 10
    );
    ctx.rect(
      x * imgWidth,
      y * imgHeight,
      (width * imgWidth) / 2,
      (height * imgHeight) / 1.5
    );
    ctx.stroke();
    // }
  }
};
