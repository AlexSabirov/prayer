import BouncyCheckbox from 'react-native-bouncy-checkbox';

export function CheckBox(): JSX.Element {
  return <BouncyCheckbox onPress={(isChecked) => !isChecked} />;
}
