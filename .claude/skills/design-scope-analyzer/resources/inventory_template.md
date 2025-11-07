# 📋 Design Inventory and Feature Breakdown

This document provides a complete scope inventory derived from the HTML source code.

---

## I. Global Scope Summary
* **Total Pages/Views Detected:** [Analyst Fill-in]
* **Primary Layout Used:** [Analyst Fill-in: e.g., Single-page container, multi-page layout]
* **Complexity Level (Est.):** [Analyst Fill-in: Low/Medium/High]

---

## II. Page/View Breakdown

### Page/View: [Page Title or Root Filename]

**Source File:** `[Filename or Primary Selector]`

| ID | Feature / Component Name | Description | Key Code References (CSS/ID) |
| :--- | :--- | :--- | :--- |
| P1.1 | Main Navigation Bar | Contains logo and links to Home, About, Contact. | `.nav-bar`, `#main-nav` |
| P1.2 | Hero Section (with CTA) | Large visual area containing primary call-to-action button. | `.hero-container`, `#main-cta-button` |
| P1.3 | Testimonial Carousel | Rotating list of three customer quotes. | `.testimonial-slider`, `data-js-carousel` |
| P1.4 | Contact Form | 4-field form (Name, Email, Message, Submit). | `form#contact-form`, `.form-group` |

### Page/View: [If multiple files were provided, list the next page here]

**Source File:** `[Filename or Primary Selector]`

| ID | Feature / Component Name | Description | Key Code References (CSS/ID) |
| :--- | :--- | :--- | :--- |
| P2.1 | [Feature Name] | [Brief Description] | [CSS/ID Selectors] |
| P2.2 | [Feature Name] | [Brief Description] | [CSS/ID Selectors] |


### How to Use the Skill

To use this analytical skill, you would simply reference all the HTML files from your ZIP/codebase and ask Claude to analyze them:

> "I have unpacked the design zip file. Please run the **DesignScope-Analyzer** skill on all the HTML files in this folder (`index.html`, `about.html`, etc.) and produce the feature inventory."

This will give you the formal documentation you need before you begin the React Native conversion process with the other skills.