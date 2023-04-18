import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {COLORS} from '@/shared/lib/constants/constants';
import HeaderComponent from '@/widgets/header/ui/header.component';
import MainPage from '@/pages/main-page/ui/main.page';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
      <MainPage />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    height: 1000,
    paddingTop: 50,
  },
});
