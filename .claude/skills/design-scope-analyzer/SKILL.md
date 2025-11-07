---
name: DesignScope-Analyzer
description: Systematically analyzes HTML/CSS codebase to identify distinct pages, UI components, and features. Generates a structured inventory for project scope and PRD planning.
version: 1.0.0
---

# 🔎 Design Scope and Feature Inventory Workflow

**Goal:** Provide a comprehensive, structured list of all features implemented in the provided HTML source code.

## Phase 1: Page/View Identification

1.  **Read Files:** Analyze all provided HTML files (e.g., `index.html`, `about.html`, `profile.html`).
2.  **Define Pages:** Each unique HTML file in the root directory is considered a separate Page/View. If only one file is provided, analyze the primary content sections (e.g., `<main>`, `<section>`, `<div id="home">`) to define "Views" within that single page.
3.  **Title Extraction:** Use the `<title>` tag content for the Page Name, or the highest level `<h1>` or semantic element name for the View Name.

## Phase 2: Feature Extraction (Component Analysis)

For each Page/View identified in Phase 1, you must systematically inspect the HTML for interactive, unique, or complex structural elements. These are defined as "Features."

**Feature Detection Criteria (Prioritized):**

* **Interactive Elements:** Look for `<form>`, `<input>`, `<button>`, `<select>`, `<a role="button">`, or elements with JavaScript event listeners (e.g., `onclick`, or `data-js` attributes if present).
* **Unique Components:** Look for distinctive semantic containers or heavily styled structures: `<nav>`, `<header>`, `<footer>`, modal dialogs (`<div class="modal">`), or containers with unique IDs (e.g., `#user-profile-card`).
* **Data Display:** Look for lists (`<ul>`, `<ol>`), tables (`<table>`), or elements that would typically bind to application data (e.g., a chart placeholder, a user name display).

## Phase 3: Documentation Generation

1.  **Format:** Use the structure provided in `resources/inventory_template.md`.
2.  **Detail:** For each feature, provide a brief description and the key HTML/CSS selectors (class or ID) used for styling. This links the feature directly back to the code for development teams.
3.  **Completeness:** Ensure that 100% of the visible UI in the provided HTML is accounted for either as a Page/View or as an extracted Feature.