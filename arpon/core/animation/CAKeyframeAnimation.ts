/*
  You create a CAKeyframeAnimation object using the inherited init(keyPath:) method, specifying the key path of the property that you want to animate on the layer. You can then specify the keyframe values to use to control the timing and animation behavior.

  For most types of animations, you specify the keyframe values using the values and keyTimes properties. During the animation, Core Animation generates intermediate values by interpolating between the values you provide. When animating a value that is a coordinate point, such as the layer’s position, you can specify a path for that point to follow instead of individual values. The pacing of the animation is controlled by the timing information you provide.

  Listing 1 shows how to create a keyframe animation that animates a layer's background color from red to green to blue over a two second duration.

  Listing 1 Animating a layer's background color with a keyframe animation
  let colorKeyframeAnimation = CAKeyframeAnimation(keyPath: "backgroundColor")

  colorKeyframeAnimation.values = [UIColor.red.cgColor,
                                  UIColor.green.cgColor,
                                  UIColor.blue.cgColor]
  colorKeyframeAnimation.keyTimes = [0, 0.5, 1]
  colorKeyframeAnimation.duration = 2

*/

/*
  private let progressAnimation: CAKeyframeAnimation = {
      let animation = CAKeyframeAnimation(keyPath: "locations")
      animation.isRemovedOnCompletion = false
      animation.repeatCount = Float.infinity
      animation.fillMode = .forwards

      return animation
  }()
*/

enum fillMode {
  'forwards',
}

export default class CAKeyframeAnimation {
  fillMode: fillMode;
}
