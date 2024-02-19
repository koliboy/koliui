# Tabs 

## Introduction
Tabs are a common UI pattern used to organize and present content in a structured manner. They allow users to switch between different sections of content within the same space, improving navigation and user experience. This documentation provides examples of implementing tabs using HTML, CSS, and JavaScript.

## Examples

### 1. Basic Tabbed Interface
```html
<!-- HTML -->
<div class="flex gap-l-f padding-cnt tabs">
    <button tab-t=".target" tab-d class="button tab">Photos</button>
    <button tab-t=".target2" class="button tab">Music</button>
    <button tab-t=".target3" class="button tab">Videos</button>
</div>

<div class="target gallery h1 gap-l">
    Content-Photos
</div>
<div class="target2 gallery h1 gap-l">
    Content-Music
</div>
<div class="target3 gallery h1 gap-l">
    Content-Videos
</div>
```
```css
/* CSS */
<style>
    .gallery {
        display: none;
        text-align: center;
    }

    .gallery[tab-active] {
        display: block;
    }
</style>
```


## `Tabs Options`

Tabs can be customized and configured using various options to suit different design requirements and functionalities. Here are the available options:

### 1. `tab-t` (Tab Target)
- **Description**: Specifies the target element or content associated with the tab.
- **Usage**: Add `tab-t` attribute to the tab element and specify the CSS selector of the target element as its value.

### 2. `tab-d` (Default Tab)
- **Description**: Indicates the default or initially opened tab.
- **Usage**: Add `tab-d` attribute to the tab element to set it as the default tab.

### 3. `tabs-ui` (Tabs User Interface)
- **Description**: Allows customization of the tabs' appearance and behavior.
- **Values**:
  - `unset`: Removes the default UI styles for tabs, enabling custom styling.
  - `default`: Retains the default UI styles for tabs.
- **Usage**: Add `tabs-ui` attribute to the tabs container and set its value accordingly.

### 4. `tabs-url` (Tabs URL Pattern)
- **Description**: Enables linking tabs to specific URLs using hash fragments.
- **Values**:
  - `hash`: Activates URL pattern matching using hash fragments.
  - `unset`: Disables URL pattern matching.
- **Usage**: Add `tabs-url` attribute to the tabs container and set its value accordingly.

### 5. `tab-f-t` (Tab Focus Target)
- **Description**: Specifies the target element within a scrollable container to focus when the tab is clicked.
- **Usage**: Add `tab-f-t` attribute to the tab element and specify the CSS selector of the focus target element.

### 6. `tab-label` (Tab Label)
- **Description**: Provides a custom label for the tab, useful for identifying tabs programmatically.
- **Usage**: Add `tab-label` attribute to the tab element and specify the desired label as its value.

### 7. `tab-change` (Tab Change Event)
- **Description**: Triggers an event when the tab is changed or clicked.
- **Usage**: Attach an event listener to the tabs container for the `change` event.



### 2. `URL Pattern Example`
```html
<!-- HTML -->
<div class="flex gap-l-f padding-cnt tabs" tabs-url="hash">
    <a href="#home" tab-t=".photos" tab-d class="button tab">Photos</a>
    <a href="#music" tab-t=".music" class="button tab">Music</a>
    <a href="#setting" tab-t=".video" class="button tab">Videos</a>
</div>

<div class="photos gallery h1 gap-l">
    Content-Photos
</div>
<div class="music gallery h1 gap-l">
    Content-Music
</div>
<div class="video gallery h1 gap-l">
    Content-Videos
</div>
```
```css
/* CSS */
<style>
    .gallery {
        display: none;
        text-align: center;
    }

    .gallery[tab-active] {
        display: block;
    }
</style>
```

### 3. `Tab by Scroll to Element Focus`
```html
<!-- HTML -->
<div class="flex gap-l-f padding-cnt tabs">
    <button tab-t=".focus" tab-f-t=".a" tab-d class="button tab">A</button>
    <button tab-t=".focus" tab-f-t=".b" class="button tab">B</button>
    <button tab-t=".focus" tab-f-t=".c" class="button tab">C</button>
</div>

<div class="focus border g g-gap" style="height: 300px; overflow: auto;">
    <div class="a" style="height: 400px">AAAAAA</div>
    <div class="b" style="height: 400px;">BBBBB</div>
    <div class="c" style="height: 400px;">CCCCC</div>
</div>
```

### 4. `Unset UI or Customize`
```html
<!-- HTML -->
<div class="tabs" tabs-ui="unset">
    <div tab-t=".target-el" tab-d class="tab my-tabs">Home</div>
    <div tab-t=".target-el" class="tab my-tabs">About</div>
</div>
```
```css
/* CSS */
<style>
    .my-tabs {
        background: gray;
    }

    .my-tabs[tab-active] {
        background: green;
    }
</style>
```

### 5. `Event Handling`
```html
<!-- HTML -->
<div class="event-test flex gap-l-f padding-cnt tabs">
    <button tab-label="photos" tab-d class="button tab">Photos</button>
    <button tab-label="musics" class="button tab">Music</button>
    <button tab-label="videos" tab-t=".this-target" class="button tab">Videos</button>
</div>
```
```javascript
// JavaScript
<script>
    document.querySelector('.event-test').addEventListener("change", function(event) {
        console.log(event.label);
    });
</script>
```

## Conclusion
Tabs are a versatile UI component that can enhance the usability and organization of your web applications. By following the examples provided in this documentation, you can easily implement tabs in your projects.

---

This version includes CSS styles for the gallery, ensuring consistent presentation across all examples. Let me know if there's anything else you'd like to add or modify!