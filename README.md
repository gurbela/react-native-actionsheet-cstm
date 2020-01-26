# react-native-actionsheet-cstm

[![npm version](https://badge.fury.io/js/react-native-actionsheet-cstm.svg)](https://badge.fury.io/js/react-native-actionsheet-cstm)

## Getting started

`$ npm install react-native-actionsheet-cstm --save`

## Demo

<p align="center">
  <img src="https://raw.githubusercontent.com/gurbela/react-native-actionsheet-cstm/master/image/Simulator%20Screen%20Shot%20-%20iPhone1.png" 
    height="380" width="200"
  />
  <img src="https://raw.githubusercontent.com/gurbela/react-native-actionsheet-cstm/master/image/Screenshot_1.png" 
    height="380"  width="200"
  />
  <img src="https://raw.githubusercontent.com/gurbela/react-native-actionsheet-cstm/master/image/Simulator%20Screen%20Shot%20-%20iPhone2.png" 
    height="380"  width="200"
  />
   <img src="https://raw.githubusercontent.com/gurbela/react-native-actionsheet-cstm/master/image/Screenshot_2.png" 
    height="380"  width="200"
  />
</p>

## A basic Setup

```typescript
import React, {useState} from 'react';
import {SafeAreaView, Text, ScrollView, TouchableOpacity} from 'react-native';

import {ActionSheet} from 'react-native-actionsheet-cstm';

const App = () => {
  const [showActionSheed, setShowActionSheet] = useState<boolean>(false);

  const onShowActionSheet = () => {
    setShowActionSheet(true);
  };
  const onCloseActionSheet = () => {
    setShowActionSheet(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{textAlign: 'center'}}>Components</Text>
      <ScrollView style={{flex: 1, marginTop: 50}}>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#3880ff',
          }}
          onPress={onShowActionSheet}>
          <Text style={{color: '#fff'}}>Show Action Sheet</Text>
        </TouchableOpacity>

        <ActionSheet
          visible={showActionSheed}
          onClose={onCloseActionSheet}
          actionItems={[
            {
              text: 'Save',
              onPress: () => {
                console.log('Save');
              },
            },
            {
              text: 'Update',
              onPress: () => {
                console.log('Update');
              },
            },
            {
              text: 'Delete',
              textStyle: [{color: 'red'}],
              onPress: () => {
                console.log('Delete');
              },
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
```

## Options

## ActionSheetProps

| Name                 | Type                 | Default              | Description                                                                                                |
| -------------------- | -------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------- |
| visible              | boolean              | false                | Show the Action sheet                                                                                      |
| onClose              | function             | null                 | Trigger a function asking to close the Action sheet.                                                       |
| actionItems          | Array<ActionItem>    | null                 | (array of ActionItem) - a list of button                                                                   |
| onShow?              | function             | null                 | The onShow prop allows passing a function that will be called once the Action sheet has been shown.        |
| onDismiss?           | function             | null                 | The onDismiss prop allows passing a function that will be called once the Action sheet has been dismissed. |
| backdropStyle?       | StyleProp<ViewStyle> | null                 | Back drop style                                                                                            |
| containerStyle?      | StyleProp<ViewStyle> | null                 | Container style                                                                                            |
| titleContainerStyle? | StyleProp<ViewStyle> | null                 | Container title style                                                                                      |
| title?               | string               | 'Action Sheet Title' | Action sheet title                                                                                         |
| titleTextStyle?      | StyleProp<ViewStyle> | null                 | Action sheet title style                                                                                   |
| cancelButtonStyle?   | StyleProp<ViewStyle> | null                 | Action sheet cancel button style                                                                           |
| cancelText?          | string               | 'Cancel'             | Action sheet cancel button title                                                                           |
| cancelTextStyle?     | StyleProp<ViewStyle> | null                 | Action sheet cancel button text style                                                                      |
| hiddeCancel          | boolean              | false                | Hidde the Action sheet Cancel button                                                                       |

## ActionItem

| Name       | Type                 | Default | Description   |
| ---------- | -------------------- | ------- | ------------- |
| text       | string               | null    | button title  |
| onPress    | function             | null    | button action |
| textStyle? | StyleProp<ViewStyle> | null    | button style  |
