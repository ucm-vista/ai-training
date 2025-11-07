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
      if (!content) return;
      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

      // Toggle current
      if (isOpen) {
        content.style.maxHeight = null;
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        toggle.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      }
    });
  });
});

// Close section buttons
document.addEventListener('DOMContentLoaded', () => {
  const closeButtons = document.querySelectorAll('.close-section-btn');

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionId = button.dataset.section;
      const toggle = document.getElementById(`toggle-${sectionId}`);

      if (toggle) {
        const content = toggle.nextElementSibling;
        if (content) {
          // Close the section even if inline max-height is absent
          content.style.maxHeight = null;
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          content.setAttribute('aria-hidden', 'true');

          // Scroll to the toggle button
          toggle.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });
});

const CopyUI = (() => {
  let toastTimer;

  function getToast() {
    let toast = document.querySelector('.copy-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'copy-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.setAttribute('aria-atomic', 'true');
      document.body.appendChild(toast);
    }
    return toast;
  }

  function showToast(message, isError = false) {
    const toast = getToast();
    toast.textContent = message;
    toast.classList.toggle('error', isError);
    toast.classList.add('visible');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2000);
  }

  return { showToast };
})();

// Copy buttons for sample prompts
document.addEventListener('DOMContentLoaded', () => {
  const snippetButtons = document.querySelectorAll('.copy-snippet-btn');

  snippetButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const targetId = button.dataset.copyTarget;
      const target = targetId ? document.getElementById(targetId) : null;
      const text = target ? target.innerText.trim() : '';
      const icon = button.querySelector('.copy-snippet-icon');
      const originalIcon = icon ? icon.textContent : '';

      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        button.classList.add('copied');
        if (icon) {
          icon.textContent = '✓';
        }
        CopyUI.showToast('Copied to clipboard');
      } catch (err) {
        console.error('Failed to copy snippet', err);
        CopyUI.showToast('Copy failed', true);
        return;
      }

      setTimeout(() => {
        button.classList.remove('copied');
        if (icon) {
          icon.textContent = originalIcon || '📋';
        }
      }, 2000);
    });
  });
});

// Copy image assets to clipboard
document.addEventListener('DOMContentLoaded', () => {
  const imageButtons = document.querySelectorAll('.copy-image-btn');

  imageButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const src = button.dataset.imageSrc;
      if (!src) return;

      const originalContent = button.innerHTML;
      button.disabled = true;

      try {
        if (navigator.clipboard && navigator.clipboard.write && window.ClipboardItem) {
          const response = await fetch(src);
          const blob = await response.blob();
          const clipboardItem = new ClipboardItem({ [blob.type]: blob });
          await navigator.clipboard.write([clipboardItem]);
          button.innerHTML = 'Copied image!';
          button.classList.add('copied');
          CopyUI.showToast('Icon copied to clipboard');
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
          const absoluteUrl = new URL(src, window.location.origin).href;
          await navigator.clipboard.writeText(absoluteUrl);
          button.innerHTML = 'Copied link!';
          CopyUI.showToast('Icon link copied');
        } else {
          throw new Error('Clipboard API not supported');
        }
      } catch (err) {
        console.error('Failed to copy image', err);
        CopyUI.showToast('Image copy failed', true);
      } finally {
        setTimeout(() => {
          button.innerHTML = originalContent;
          button.classList.remove('copied');
          button.disabled = false;
        }, 2000);
      }
    });
  });
});
