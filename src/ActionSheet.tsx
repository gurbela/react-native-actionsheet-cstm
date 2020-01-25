import React, {useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Modal,
  View,
  Text,
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';

import st from './style';

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

export const ActionSheet: React.FC<ActionSheetProps> = props => {
  const top = new Animated.Value(100);
  const hiddeCancel: boolean = props.hiddeCancel || false;

  useEffect(() => {
    Animated.timing(top, {
      toValue: props.visible ? -1 : 100,
      duration: 100,
      delay: 5,
    }).start();
  }, [props.visible]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}
      onShow={props.onShow}
      onDismiss={props.onDismiss}>
      <View style={[st.backdrop, props.backdropStyle]} />

      <SafeAreaView style={st.safeArea}>
        <TouchableOpacity onPress={props.onClose} style={st.backdropBtn} />

        <Animated.View style={{top}}>
          <View style={[st.container, st.shadow, props.containerStyle]}>
            <View style={[st.titleContainer, props.titleContainerStyle]}>
              <Text style={[st.title, props.titleTextStyle]}>
                {props.title || 'Action Sheet Title'}
              </Text>
            </View>

            {props.actionItems.map((actionItem, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  activeOpacity={0.9}
                  style={[
                    st.btnContainer,
                    i === props.actionItems.length - 1
                      ? st.lastBtnContainer
                      : st.btnContainerBorder,
                  ]}
                  onPress={actionItem.onPress}>
                  <Text style={[st.btnText, actionItem.textStyle]}>
                    {actionItem.text}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {!hiddeCancel && (
            <TouchableOpacity
              activeOpacity={0.9}
              style={[st.shadow, st.cancelContainer, props.cancelButtonStyle]}
              onPress={() => {
                props.onClose();
              }}>
              <Text style={[st.cancelText, props.cancelTextStyle]}>
                {props.cancelText ? props.cancelText : 'Cancel'}
              </Text>
            </TouchableOpacity>
          )}
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
};
