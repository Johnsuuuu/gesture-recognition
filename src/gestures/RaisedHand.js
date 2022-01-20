import * as fp from "fingerpose";

const RaisedHandGesture = new fp.GestureDescription('raised_hand');

for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    RaisedHandGesture.addCurl(finger, fp.FingerCurl.NoCurl);
    RaisedHandGesture.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
    RaisedHandGesture.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1.0);
    RaisedHandGesture.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 1.0);

}

export default RaisedHandGesture;
