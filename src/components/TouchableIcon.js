import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const TouchableIcon = ({iconChecked, iconUnchecked}) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity onPress={handleChecked}>
      {checked ? iconChecked : iconUnchecked}
    </TouchableOpacity>
  );
};

export default TouchableIcon;
