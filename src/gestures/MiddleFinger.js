import * as fp from "fingerpose";

const MiddleFingerGesture = new fp.GestureDescription('middle_finger');

MiddleFingerGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl);
MiddleFingerGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
MiddleFingerGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);
MiddleFingerGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [fp.Finger.Index, fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
    MiddleFingerGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    MiddleFingerGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  }


  export default MiddleFingerGesture;