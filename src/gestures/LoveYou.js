import * as fp from "fingerpose";

const LoveYouGesture = new fp.GestureDescription('love_you');

LoveYouGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
LoveYouGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
LoveYouGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

LoveYouGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
LoveYouGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
LoveYouGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
LoveYouGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);

LoveYouGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
LoveYouGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
LoveYouGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);
LoveYouGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [fp.Finger.Middle, fp.Finger.Ring]) {
    LoveYouGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
}

export default LoveYouGesture;