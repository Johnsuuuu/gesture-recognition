import * as fp from "fingerpose";

const PointDownGesture = new fp.GestureDescription('point_down');

PointDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
PointDownGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0);
PointDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
PointDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 1.0);
PointDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0);

for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    PointDownGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export default PointDownGesture;