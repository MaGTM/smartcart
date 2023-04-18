import {View, StyleSheet, Animated, Pressable, GestureResponderEvent} from 'react-native';
import {useBurgerMenuAnimation} from '@/shared/ui/menu-burger-icon/animations';
import {COLORS} from '@/shared/lib/constants/constants';
import {useEffect} from 'react';

interface IMenuBurgerProps {
  isOpen: boolean
  toggleHandler: (e: GestureResponderEvent) => void
}

export function MenuBurgerIconComponent(props: IMenuBurgerProps) {
  const {toggleHandler, isOpen} = props
  const {animations, values} = useBurgerMenuAnimation()

  useEffect(() => {
    if(isOpen) {
      animations.openAnim.start()
      return
    }
    animations.closeAnim.start()
  }, [isOpen])

  return (
    <Pressable onPress={toggleHandler}>
      <View style={styles.menu}>
        <Animated.View
          style={[styles.menuItem, {transform: [{translateY: values.negativeTransformValue}, {rotate: values.negativeRotateValue}]}]}
        />
        <Animated.View style={[styles.menuItem, {top: 0, opacity: values.opacity}]}/>
        <Animated.View style={[styles.menuItem, {transform: [{translateY: values.positiveTransformValue}, {rotate: values.positiveRotateValue}]}]}/>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    gap: 4,
    position: "relative",
    width: 25,
    height: 3
  },
  menuItem: {
    width: 25,
    height: 3,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    position: "absolute",
  }
});
