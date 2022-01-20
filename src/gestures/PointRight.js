import * as fp from "fingerpose";

const PointRightGesture = new fp.GestureDescription('point_right');

PointRightGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
PointRightGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);
PointRightGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
PointRightGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);
PointRightGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 1.0);

for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    PointRightGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export default PointRightGesture;