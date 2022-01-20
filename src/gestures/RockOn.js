import * as fp from "fingerpose";

const RockOnGesture = new fp.GestureDescription('rock_on');

RockOnGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
RockOnGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
RockOnGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
RockOnGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);

RockOnGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
RockOnGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
RockOnGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);
RockOnGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [fp.Finger.Thumb, fp.Finger.Middle, fp.Finger.Ring]) {
    RockOnGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export default RockOnGesture;