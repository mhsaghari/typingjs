# Typing Animation Module ⌨️

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Size](https://img.shields.io/badge/Size-1.2_KB-brightgreen.svg)](https://bundlephobia.com/)

A lightweight, customizable typing animation module for creating realistic text typing effects.

## ✨ Features

- **Realistic typing simulation** with adjustable speed
- **Random speed variation** for natural typing feel
- **Text deletion** with backspace effect
- **Infinite looping** capability
- **Blinking cursor** (pointer) indicator
- **Multiple text sequences** support
- **Zero dependencies** - Pure Vanilla JavaScript
- **Customizable delays** between operations

## 📖 Complete Documentation

### Function Signature

```typescript
typing(
    selector: string,      // CSS selector for target element
    contents: string[],    // Array of texts to type
    options?: {            // Configuration object
        speed?: number | number[],    // Typing speed in ms
        delay?: number,               // Pause after typing
        break?: number,               // Pause between texts
        random?: boolean,             // Random speed variation
        loop?: boolean,               // Infinite loop
        delete?: boolean,             // Delete text after typing
        pointer?: boolean             // Show blinking cursor
    }
): Promise<void>
```

### Options Explained

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| **`speed`** | `number` \| `number[]` | `100` | Typing speed in milliseconds. Use array `[min, max]` for random range |
| **`delay`** | `number` | `3000` | Time to pause on each completed text (ms) |
| **`break`** | `number` | `0` | Time between finishing one text and starting another (ms) |
| **`random`** | `boolean` | `false` | Enable random speed variation within range |
| **`loop`** | `boolean` | `false` | Loop through texts indefinitely |
| **`delete`** | `boolean` | `false` | Delete text after typing (backspace effect) |
| **`pointer`** | `boolean` | `false` | Show blinking cursor after text |

## 🎯 Usage Examples

### Example 1: Simple Typing Effect
```javascript
typing('#welcome', [
    'Welcome to our platform!',
    'We build amazing things.'
], {
    speed: 50,
    delay: 2000
});
```

### Example 2: Typewriter with Random Speed
```javascript
typing('#typewriter', [
    'Design!',
    'Create!',
    'Develop!',
    'Innovate!'
], {
    speed: [100, 500],  // Random speed between 100-500ms
    random: true,       // Enable random speed
    delay: 1500,
    delete: true,
    loop: true,
    pointer: true
});
```

## 🎨 Styling the Pointer

The pointer (blinking cursor) is implemented using CSS animations. You can customize it:

```css
/* Override default pointer style */
#your-element::after {
    content: '|';
    padding-left: 2px;
    padding-right: 2px;
    animation: custom-pulse 0.8s ease-in-out infinite;
    color: #00ff00; /* Matrix-style green */
}

@keyframes custom-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}
```

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

## 📚 Related Projects

- [Typewriter.js](https://github.com/tameemsafi/typewriterjs) - Another typing animation library
- [Typed.js](https://github.com/mattboldt/typed.js) - Popular typing animation
- [Simple Typewriter](https://github.com/gmrchk/swifttype) - Minimal implementation

---

**⭐ Enjoy!**
