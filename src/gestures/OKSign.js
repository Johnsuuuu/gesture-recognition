import * as fp from "fingerpose";

const OKSignGesture = new fp.GestureDescription('ok_sign');

OKSignGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);

OKSignGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
OKSignGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.9);


for (let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    OKSignGesture.addCurl(finger, fp.FingerCurl.NoCurl);
    OKSignGesture.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
    OKSignGesture.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1.0);
    OKSignGesture.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 1.0);
}

export default OKSignGesture;