```javascript
//Correct
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function MyComponent() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
}

export default MyComponent;
```