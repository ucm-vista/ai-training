// Interactive Prompt Builder Functionality

class PromptBuilder {
  constructor(container) {
    this.container = container;
    this.template = container.dataset.template;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updatePrompt();
  }

  setupEventListeners() {
    // Listen for changes on all inputs, selects, and textareas
    const inputs = this.container.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => this.updatePrompt());
      input.addEventListener('change', () => this.updatePrompt());
    });

    // Copy button
    const copyBtn = this.container.querySelector('.copy-prompt-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => this.copyPrompt());
    }
  }

  updatePrompt() {
    const output = this.container.querySelector('.prompt-output');
    if (!output) return;

    let prompt = this.template;

    // Replace all placeholders with input values
    const inputs = this.container.querySelectorAll('[data-placeholder]');
    inputs.forEach(input => {
      const placeholder = input.dataset.placeholder;
      let value = input.value || input.dataset.default || `[${placeholder}]`;

      // For textareas, preserve line breaks
      if (input.tagName === 'TEXTAREA') {
        value = value.trim();
      }

      prompt = prompt.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), value);
    });

    output.textContent = prompt;
  }

  async copyPrompt() {
    const output = this.container.querySelector('.prompt-output');
    const copyBtn = this.container.querySelector('.copy-prompt-btn');
    const originalText = copyBtn.textContent;

    try {
      await navigator.clipboard.writeText(output.textContent);
      copyBtn.textContent = '✓ Copied!';
      copyBtn.classList.add('copied');

      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      copyBtn.textContent = 'Failed to copy';
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    }
  }
}

// Initialize all prompt builders on page load
document.addEventListener('DOMContentLoaded', () => {
  const builders = document.querySelectorAll('.prompt-builder');
  builders.forEach(container => {
    new PromptBuilder(container);
  });
});

// Collapsible sections
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.example-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const isOpen = content.style.maxHeight;

      // Close all other examples in the same section
      const section = toggle.closest('.feature-section');
      if (section) {
        section.querySelectorAll('.example-content').forEach(other => {
          if (other !== content) {
            other.style.maxHeight = null;
            const otherToggle = other.previousElementSibling;
            if (otherToggle) {
              otherToggle.classList.remove('active');
            }
          }
        });
      }

      // Toggle current
      if (isOpen) {
        content.style.maxHeight = null;
        toggle.classList.remove('active');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        toggle.classList.add('active');
      }
    });
  });
});
