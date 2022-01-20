import * as fp from "fingerpose";

const PointLeftGesture = new fp.GestureDescription('point_left');

PointLeftGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
PointLeftGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
PointLeftGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
PointLeftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0);
PointLeftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    PointLeftGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export default PointLeftGesture;