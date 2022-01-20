import * as fp from "fingerpose";

const PinchedFingerGesture = new fp.GestureDescription('pinched_finger');

PinchedFingerGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
PinchedFingerGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
PinchedFingerGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
PinchedFingerGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    PinchedFingerGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

export default PinchedFingerGesture;