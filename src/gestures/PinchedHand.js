import * as fp from "fingerpose";

const PinchedHandGesture = new fp.GestureDescription('pinched_hand');
PinchedHandGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
PinchedHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight , 1.0);
PinchedHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft , 1.0);


for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    PinchedHandGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

export default PinchedHandGesture;
