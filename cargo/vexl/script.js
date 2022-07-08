const video = document.getElementById('video');

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('models'),
]).then(startVideo)

function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: {} })
  .then(function(stream){
    video.srcObject = stream;
  }).catch(function(err) {
    console.error(err);
  });
}

video.addEventListener('play', () => {
  const canvas = document.getElementById('canvas');
  const buffer = faceapi.createCanvasFromMedia(video);
  const displaySize = { width: video.width, height: video.height };
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    if (resizedDetections.length > 0) {
      const le = resizedDetections[0].landmarks.getLeftEye();
      const re = resizedDetections[0].landmarks.getRightEye();
      let lx = 0, ly = 0, rx = 0, ry = 0;
      for (let k = 0; k < 6; k++) {
        lx += le[k].x; ly += le[k].y;
        rx += re[k].x; ry += re[k].y;
      }
      lx /= 6; ly /= 6; rx /= 6; ry /= 6;
      const size = Math.sqrt((lx - rx) * (lx - rx) + (ly - ry) * (ly - ry));
      // draw
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000000';
      ctx.translate((lx + rx) / 2.0, (ly + ry) / 2.0);
      ctx.rotate(Math.PI * 0.5 - Math.atan2((lx - rx), (ly - ry)));
      ctx.fillRect(- size, - size * 0.15 / 2, size * 2.0, size * 0.15)
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.beginPath();
        ctx.ellipse(lx, ly, size * 0.45, size * 0.45, 0, Math.PI * 0.25, Math.PI * 1.25);
      ctx.fill();
      ctx.beginPath();
        ctx.ellipse(rx, ry, size * 0.45, size * 0.45, 0, Math.PI * 0.25, Math.PI * 1.25);
      ctx.fill();
      ctx.fillStyle = '#333333';
      ctx.beginPath();
        ctx.ellipse(lx, ly, size * 0.45, size * 0.45, 0, Math.PI * 1.25, Math.PI * 2.25);
      ctx.fill();
      ctx.beginPath();
        ctx.ellipse(rx, ry, size * 0.45, size * 0.45, 0, Math.PI * 1.25, Math.PI * 2.25);
      ctx.fill();
    }
  }, 50)
});
