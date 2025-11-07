# React Native Primitive Mapping Guide

This map ensures correct component usage in React Native.

| HTML/CSS Element | React Native Component | RN Style Property Notes |
| :--- | :--- | :--- |
| `<div>` (General Container) | `<View>` | Uses `flex` and `StyleSheet` for layout and sizing. |
| `<h1>`, `p`, `span` | `<Text>` | Only accepts `Text`-specific styles (`fontSize`, `color`, `fontFamily`). |
| `<img>` | `<Image>` | Requires explicit `width` and `height` properties in style. |
| `<button>`, `<a>` (Interactive) | `<TouchableOpacity>` / `<Pressable>` | Use these components to wrap `<Text>` and create interactive zones. |
| CSS `margin-top` | `marginTop` | Use camelCase for all RN styles. |
| CSS `width: 100%` | `width: '100%'` | Units are often inferred or unitless (e.g., for `fontSize`). |


### 2. **ReactNative-Stylist** Skill

This skill is designed for troubleshooting and cleaning up the resulting styles, which is essential for maintaining the "pixel-perfect" goal across different devices.