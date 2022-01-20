import * as fp from "fingerpose";

const CallMeGesture = new fp.GestureDescription('call_me');

CallMeGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
CallMeGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
CallMeGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
CallMeGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

CallMeGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
CallMeGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownRight, 1.0);
CallMeGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownLeft, 1.0);
CallMeGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 1.0);
CallMeGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 1.0);

for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
    CallMeGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export default CallMeGesture;