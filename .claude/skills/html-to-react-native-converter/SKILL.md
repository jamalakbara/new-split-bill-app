---
name: HTML-to-RN-Converter
description: Converts HTML/CSS source code into modular, pixel-perfect React Native components using Flexbox and native primitives. Strictly enforces 1:1 design fidelity.
version: 1.0.0
---

# 🎯 HTML-to-RN Conversion Workflow

**Goal:** Convert web design (HTML/CSS) to a React Native file, ensuring no features or pages are added, and the result is pixel-perfect (1:1).

## Methodology

1.  **Analyze Source:** Read the provided HTML and CSS files. Identify all structural blocks, semantic elements, and fixed unit values (`px`).
2.  **Structural Decomposition:** Break the design into a minimum hierarchy of pure, functional React Native components (Container, Header, Card, Button).
3.  **Mapping Primitives (Reference `resources/rn_component_map.md`):** Convert HTML elements to RN primitives:
    * `<div>` -> `<View>` (use for all containers and layout)
    * `<h1>`, `<p>`, `<span>` -> `<Text>` (Text content ONLY)
    * `<img>` -> `<Image>`
    * `<input>`, `<textarea>` -> `<TextInput>`
4.  **Layout Translation (Crucial for Pixel-Perfect):**
    * **NEVER** use `px` directly. Convert fixed `px` values from CSS (e.g., `width: 300px; padding: 20px;`) into proportional or platform-specific dimensions in React Native.
    * Translate all layout to **Flexbox**. Use `flexDirection: 'row'` or `'column'` explicitly. Avoid absolute positioning unless strictly necessary for a specific overlay effect.
5.  **Strict Styling Isolation:** All styling MUST be placed in a separate `StyleSheet.create` block within the component file.
6.  **Final Validation:** Compare the resulting code structure and layout properties against the source code to confirm the 1:1 fidelity and adherence to the single-page constraint.