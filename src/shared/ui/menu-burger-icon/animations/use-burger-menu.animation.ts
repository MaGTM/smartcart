import {useRef} from 'react';
import {Animated} from 'react-native';
import CompositeAnimation = Animated.CompositeAnimation;
import AnimatedInterpolation = Animated.AnimatedInterpolation;

interface IBurgerMenuAnimation{
  animations: {
    openAnim: CompositeAnimation,
    closeAnim: CompositeAnimation
  },
  values: {
    negativeRotateValue: AnimatedInterpolation<string | number>,
    negativeTransformValue: AnimatedInterpolation<string | number>,
    positiveRotateValue: AnimatedInterpolation<string | number>,
    positiveTransformValue: AnimatedInterpolation<string | number>,
    opacity: AnimatedInterpolation<string | number>
  }
}

export const useBurgerMenuAnimation = (): IBurgerMenuAnimation => {
  const transformValue = useRef(new Animated.Value(0)).current
  const rotateValue = useRef(new Animated.Value(0)).current
  const negativeTransformValue = transformValue.interpolate({
    inputRange: [0, 7],
    outputRange: [-7, 0]
  })
  const opacity = useRef(new Animated.Value(1)).current
  const positiveTransformValue = transformValue.interpolate({
    inputRange: [0, 7],
    outputRange: [7, 0]
  })
  const negativeRotateValue = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-45deg']
  })
  const positiveRotateValue = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg']
  })

  const openAnim = Animated.sequence([
    Animated.timing(transformValue, {
      toValue: 7,
      duration: 150,
      useNativeDriver: true
    }),
    Animated.timing(opacity, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true
    }),
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true
    })
  ])

  const closeAnim = Animated.sequence([
    Animated.timing(rotateValue, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true
    }),
    Animated.timing(transformValue, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true
    })
  ])

  return {
    animations: {openAnim, closeAnim},
    values: {negativeRotateValue, negativeTransformValue, positiveRotateValue, positiveTransformValue, opacity}
  }
}
