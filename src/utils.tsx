import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface ActionItem {
  textStyle?: StyleProp<ViewStyle>;

  // Default Action Sheet Provided
  text: string;
  onPress: () => void;
}

export interface ActionSheetProps {
  onShow?: () => void;
  onDismiss?: () => void;
  backdropStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleTextStyle?: StyleProp<ViewStyle>;
  cancelButtonStyle?: StyleProp<ViewStyle>;
  cancelText?: string;
  cancelTextStyle?: StyleProp<ViewStyle>;
  hiddeCancel?: boolean;

  // Default Action Sheet Provided
  visible: boolean;
  onClose: () => void;
  actionItems: Array<ActionItem>;
}
