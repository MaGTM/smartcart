import {View, StyleSheet, } from 'react-native';
import {COLORS} from '@/shared/lib/constants/constants';
import {MenuBurgerIconComponent} from '@/shared/ui/menu-burger-icon';
import {useOpen} from '@/shared/lib/hooks/use-open';

export default function HeaderComponent() {

  const {isOpen, toggleHandler} = useOpen()

  return (
    <View style={styles.container}>
      <View style={styles.avatar}/>
      <MenuBurgerIconComponent isOpen={isOpen} toggleHandler={toggleHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: COLORS.grayOne,
    borderBottomColor: COLORS.grayTwo,
    borderBottomWidth: 1,
    position: 'absolute',
    top: 0,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 1000,
    backgroundColor: "#fff"
  },
});
