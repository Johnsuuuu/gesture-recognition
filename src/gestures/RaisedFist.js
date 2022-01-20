import * as fp from "fingerpose";

const RaisedFistGesture = new fp.GestureDescription('raised_fist');

for (let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    RaisedFistGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    RaisedFistGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
}

export default RaisedFistGesture;