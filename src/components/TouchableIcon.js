import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

const TouchableIcon = ({iconChecked, iconUnchecked, style}) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => setChecked(!checked);

  return (
    <TouchableOpacity onPress={handleChecked}>
      <View {...style}>{checked ? iconChecked : iconUnchecked}</View>
    </TouchableOpacity>
  );
};

export default TouchableIcon;
