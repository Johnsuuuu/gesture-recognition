import * as fp from "fingerpose";

const PointUpGesture = new fp.GestureDescription('point_up');

PointUpGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
PointUpGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
PointUpGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
PointUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);
PointUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    PointUpGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export default PointUpGesture;