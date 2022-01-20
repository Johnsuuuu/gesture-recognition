import * as fp from "fingerpose";

const ThumbsDownGesture = new fp.GestureDescription('thumbs_down');

ThumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
ThumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
ThumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0);
ThumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 1.0);

for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    ThumbsDownGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    ThumbsDownGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  }


export default ThumbsDownGesture;