/**
 * PRIVATE OFFLINE AI — PUBLIC PORTFOLIO DEMO SCRIPT
 * -----------------------------------------------------------------------------
 * STRICT SECURITY GUARANTEES:
 * 1. ZERO NETWORK CALLS: No fetch, XMLHttpRequest, WebSocket, WebRTC, or EventSource.
 * 2. ZERO EXFILTRATION: Prompts entered by visitors never leave the browser.
 * 3. ZERO PERSISTENCE: No localStorage, sessionStorage, cookies, or IndexedDB.
 * 4. DETERMINISTIC DEMO: Pre-curated responses showcasing real output formatting.
 * -----------------------------------------------------------------------------
 */

(function () {
  "use strict";

  // Pre-curated realistic sample responses stored directly in client-side memory
  const CURATED_RESPONSES = {
    sql: {
      title: "Explain what SQL joins are.",
      queryMatch: ["sql", "join", "joins", "inner join", "outer join"],
      response: `### Understanding SQL Joins

In relational database systems (RDBMS), data is normalized across multiple tables to avoid redundancy. **SQL Joins** allow you to combine records from two or more tables based on a related column between them (typically foreign keys).

---

#### The 4 Fundamental Join Types

| Join Type | Description | Result Set |
| :--- | :--- | :--- |
| **\`INNER JOIN\`** | Returns rows where a match exists in **both** tables. | Intersection only |
| **\`LEFT JOIN\`** | Returns **all** rows from the left table, plus matched rows from the right table. | All Left + matched Right (NULL otherwise) |
| **\`RIGHT JOIN\`** | Returns **all** rows from the right table, plus matched rows from the left table. | All Right + matched Left (NULL otherwise) |
| **\`FULL OUTER JOIN\`** | Returns all rows when there is a match in **either** left or right table. | Complete union of both sets |

---

#### Practical SQL Example

Imagine two tables: \`employees\` (id, name, department_id) and \`departments\` (id, dept_name).

\`\`\`sql
-- Retrieve all employees along with their department name
SELECT 
    e.id AS employee_id,
    e.name AS employee_name,
    d.dept_name AS department
FROM employees AS e
INNER JOIN departments AS d 
    ON e.department_id = d.id;

-- Retrieve all departments, including those with zero assigned employees
SELECT 
    d.dept_name,
    COUNT(e.id) AS total_staff
FROM departments AS d
LEFT JOIN employees AS e 
    ON d.id = e.department_id
GROUP BY d.dept_name;
\`\`\`

> **Key Rule of Thumb:** Use \`INNER JOIN\` when you only want strictly related records. Use \`LEFT JOIN\` when you need to preserve the primary table's records even if secondary data is missing.`
    },

    arduino: {
      title: "Write a simple Arduino ultrasonic sensor example.",
      queryMatch: ["arduino", "ultrasonic", "sensor", "hc-sr04", "sonar"],
      response: `### HC-SR04 Ultrasonic Distance Sensor with Arduino

The **HC-SR04** ultrasonic distance sensor measures distances from 2 cm to 400 cm using high-frequency sonar pulses (40 kHz).

---

#### Hardware Pinout Wiring

| HC-SR04 Pin | Arduino Uno Pin | Description |
| :--- | :--- | :--- |
| **VCC** | 5V | Power supply (5V DC) |
| **GND** | GND | Ground reference |
| **TRIG** | Pin 9 | Trigger pulse input (Sends ultrasonic burst) |
| **ECHO** | Pin 10 | Echo output (Pulse width reflects round-trip time) |

---

#### Complete Arduino C++ Code

\`\`\`cpp
// HC-SR04 Distance Measurement Demo
const int TRIG_PIN = 9;
const int ECHO_PIN = 10;

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Serial.println("HC-SR04 Ultrasonic Sensor Initialized.");
}

void loop() {
  // 1. Clear the trigger pin
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);

  // 2. Transmit a 10-microsecond HIGH pulse
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  // 3. Measure duration of the echo pulse (in microseconds)
  long duration = pulseIn(ECHO_PIN, HIGH);

  // 4. Calculate distance: Speed of sound = ~0.0343 cm/microsecond
  // Distance = (duration * speed of sound) / 2 (round-trip)
  float distanceCm = (duration * 0.0343) / 2.0;

  // 5. Print results to the Serial Monitor
  if (distanceCm >= 400 || distanceCm <= 2) {
    Serial.println("Out of reliable range (2cm - 400cm)");
  } else {
    Serial.print("Target Distance: ");
    Serial.print(distanceCm, 1);
    Serial.println(" cm");
  }

  // Delay before next ping (prevent sonar echo crosstalk)
  delay(200);
}
\`\`\`

> **Calculation Explanation:** Speed of sound in ambient air is ~343 m/s (0.0343 cm/µs). Because the sound travels to the object and reflects back, the elapsed duration must be divided by two.`
    },

    offline: {
      title: "Explain how local AI works without an internet connection.",
      queryMatch: ["offline", "local ai", "internet", "how local ai works", "without internet"],
      response: `### How Local AI Operates 100% Offline

A common misconception is that AI models require continuous cloud connection to function. In reality, modern Large Language Models (LLMs) can be completely self-contained within your local machine.

---

#### 1. The Pre-trained Model Weights
- During model training (which takes thousands of GPUs in data centers), the model learns statistical relationships and language structures.
- The outcome is a static binary weights file (e.g. \`qwen2.5:1.5b\` quantized to **GGUF** format, ~986 MB).
- Once downloaded to your SSD, the entire "intelligence" of the model exists locally in this weight matrix. No cloud server is ever queried.

---

#### 2. The Local Inference Engine (Ollama / llama.cpp)
- **Ollama** runs a local background service on Windows bound strictly to \`127.0.0.1:11434\` (the loopback interface).
- It loads the model weights directly into your **RAM** (system memory) and **VRAM** (NVIDIA GPU memory).
- When a prompt is submitted, the inference engine executes forward-pass matrix multiplications locally on your CPU/GPU cores.

---

#### 3. Air-Gapped Loopback Architecture

\`\`\`
[ Your Browser ]
       │
       ▼  (HTTP over 127.0.0.1:8765 - Loopback only)
[ Local Python Server (app.py) ]
       │
       ▼  (Streaming SSE over 127.0.0.1:11434)
[ Local Ollama Engine ]
       │
       ▼  (Hardware matrix math in VRAM)
[ qwen2.5:1.5b Weights on GPU ]
\`\`\`

---

#### 4. The Privacy & Security Guarantee
- **Zero Internet Packets:** You can physically disconnect Wi-Fi or unplug your Ethernet cable; token generation continues seamlessly.
- **Loopback-Only Isolation:** Network packets addressed to \`127.0.0.1\` never traverse physical network interfaces and cannot be intercepted by routers or external networks.
- **Zero Disk Logging:** Prompts are processed strictly in volatile RAM and instantly destroyed upon context reset.`
    },

    ramrom: {
      title: "Explain the difference between RAM and ROM.",
      queryMatch: ["ram", "rom", "ram and rom", "difference between ram and rom", "memory"],
      response: `### Key Differences Between RAM and ROM

Both **RAM** (Random Access Memory) and **ROM** (Read-Only Memory) are primary electronic storage mechanisms in computer hardware, but they serve fundamentally opposing architectural roles.

---

#### Side-by-Side Comparison

| Feature | RAM (Random Access Memory) | ROM (Read-Only Memory) |
| :--- | :--- | :--- |
| **Volatility** | **Volatile** (data erased when power is lost) | **Non-volatile** (retains data permanently without power) |
| **Operation Mode** | High-speed Read & Write operations | Primarily Read-Only (modified only via specialized flashing) |
| **Speed** | Extremely fast (nanoseconds latency) | Slower than RAM |
| **Primary Purpose** | Workspace for OS, active apps, and AI context | Firmware, BIOS/UEFI, bootloader instructions |
| **Capacity** | Typically 8 GB to 64 GB+ on PCs | Typically 4 MB to 64 MB for BIOS chips |

---

#### Architectural Roles

\`\`\`
Power On ──► [ ROM / BIOS ] ──► Initializes Motherboard & Bootloader
                                       │
                                       ▼ Loads OS into
                                 [ System RAM ] ──► CPU executes apps &
                                                    Ollama loads LLM weights
\`\`\`

1. **ROM (The Foundation):** Contains the immutable bootstrap firmware required to initialize motherboard chips, verify CPU/RAM readiness (POST), and locate bootable storage drives.
2. **RAM (The Scratchpad):** When you run our local AI backend or load \`qwen2.5:1.5b\`, the model tensors are copied from disk directly into RAM/VRAM so the processor can execute billions of matrix multiplications per second.`
    }
  };

  // DOM Elements
  const chatMessages = document.getElementById("chatMessages");
  const composerForm = document.getElementById("composerForm");
  const composerInput = document.getElementById("composerInput");
  const sendBtn = document.getElementById("sendBtn");
  const btnNewDemo = document.getElementById("btnNewDemo");
  const btnClearChat = document.getElementById("btnClearChat");
  const promptChips = document.querySelectorAll(".prompt-chip");
  const themeToggle = document.getElementById("themeToggle");

  let isStreaming = false;
  let activeTimer = null;

  // Auto-resize composer textarea
  function autoResizeTextarea() {
    composerInput.style.height = "auto";
    composerInput.style.height = Math.min(composerInput.scrollHeight, 140) + "px";
  }

  composerInput.addEventListener("input", autoResizeTextarea);

  // Keyboard navigation: Enter to submit, Shift+Enter for new line
  composerInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      composerForm.dispatchEvent(new Event("submit", { cancelable: true }));
    }
  });

  // Lightweight safe Markdown renderer (no external dependencies)
  function renderMarkdown(rawText) {
    // 1. Separate code blocks to protect them from inline processing
    const codeBlocks = [];
    let text = rawText.replace(/```([a-zA-Z0-9_\-+]*)\n([\s\S]*?)```/g, function (match, lang, code) {
      const id = "___CODE_BLOCK_" + codeBlocks.length + "___";
      codeBlocks.push({ lang: lang || "text", code: code.trim() });
      return id;
    });

    // 2. Escape HTML entities
    text = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 3. Tables
    text = text.replace(/((?:\|[^\n]+\|\r?\n)+)/g, function (tableMatch) {
      const lines = tableMatch.trim().split("\n");
      if (lines.length < 2) return tableMatch;

      let html = '<div class="table-wrapper"><table class="specs-table">';
      lines.forEach((line, index) => {
        if (line.includes("---")) return; // skip separator row
        const cells = line.split("|").filter((c, i, arr) => i > 0 && i < arr.length - 1);
        const tag = index === 0 ? "th" : "td";
        html += "<tr>";
        cells.forEach(cell => {
          html += `<${tag}>${cell.trim()}</${tag}>`;
        });
        html += "</tr>";
      });
      html += "</table></div>";
      return html;
    });

    // 4. Headers (###, ##, #)
    text = text.replace(/^### (.*$)/gim, "<h4>$1</h4>");
    text = text.replace(/^## (.*$)/gim, "<h3>$1</h3>");
    text = text.replace(/^# (.*$)/gim, "<h2>$1</h2>");

    // 5. Blockquotes
    text = text.replace(/^> (.*$)/gim, '<blockquote style="border-left: 3px solid var(--accent-primary); padding-left: 0.85rem; margin: 0.85rem 0; color: var(--text-secondary);">$1</blockquote>');

    // 6. Bold & Italic
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // 7. Inline code
    text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

    // 8. Unordered lists
    text = text.replace(/^\s*[-*]\s+(.*$)/gim, "<li>$1</li>");
    text = text.replace(/(<li>.*<\/li>)/gms, "<ul>$1</ul>");
    text = text.replace(/<\/ul>\s*<ul>/g, "");

    // 9. Paragraphs
    const paras = text.split(/\n{2,}/);
    text = paras.map(p => {
      p = p.trim();
      if (!p) return "";
      if (p.startsWith("<h4>") || p.startsWith("<h3>") || p.startsWith("<h2>") || 
          p.startsWith("<ul>") || p.startsWith("<div") || p.startsWith("<blockquote") ||
          p.startsWith("___CODE_BLOCK_")) {
        return p;
      }
      return `<p>${p.replace(/\n/g, "<br>")}</p>`;
    }).join("\n");

    // 10. Restore code blocks with Copy Button
    codeBlocks.forEach((block, i) => {
      const placeholder = "___CODE_BLOCK_" + i + "___";
      // Escape the code block contents safely
      const escapedCode = block.code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      const blockHtml = `
        <div class="code-block-wrapper">
          <div class="code-header">
            <span>${block.lang.toUpperCase()}</span>
            <button class="copy-code-btn" type="button" aria-label="Copy code to clipboard">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
              <span>Copy code</span>
            </button>
          </div>
          <pre><code>${escapedCode}</code></pre>
        </div>
      `;
      text = text.replace(placeholder, blockHtml);
    });

    return text;
  }

  // Bind copy events
  function attachCopyHandlers(container) {
    const copyButtons = container.querySelectorAll(".copy-code-btn");
    copyButtons.forEach(btn => {
      btn.addEventListener("click", function () {
        const pre = btn.closest(".code-block-wrapper").querySelector("pre code");
        if (!pre) return;
        const codeText = pre.innerText || pre.textContent;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(codeText).then(showCopied).catch(fallbackCopy);
        } else {
          fallbackCopy();
        }

        function fallbackCopy() {
          const textarea = document.createElement("textarea");
          textarea.value = codeText;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand("copy");
            showCopied();
          } catch (err) {
            console.error("Copy failed", err);
          }
          document.body.removeChild(textarea);
        }

        function showCopied() {
          const textSpan = btn.querySelector("span");
          const original = textSpan.textContent;
          textSpan.textContent = "Copied!";
          btn.style.color = "var(--accent-success)";
          setTimeout(() => {
            textSpan.textContent = original;
            btn.style.color = "";
          }, 2000);
        }
      });
    });
  }

  // Scroll chat window to bottom
  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Append a message bubble to the chat UI
  function appendMessage(role, contentHtml, isSimulated = false) {
    const row = document.createElement("div");
    row.className = `message-row ${role}`;

    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    if (role === "user") {
      row.innerHTML = `
        <div class="message-bubble">
          <div class="message-body">${contentHtml}</div>
        </div>
        <div class="avatar user-avatar" title="Public Visitor">You</div>
      `;
    } else {
      row.innerHTML = `
        <div class="avatar assistant-avatar" title="Simulated Local AI">AI</div>
        <div class="message-bubble">
          <div class="assistant-meta">
            <span class="assistant-meta-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              SIMULATED RESPONSE
            </span>
            <span class="assistant-meta-time">${timestamp} · 0 Network Requests</span>
          </div>
          <div class="message-body">${contentHtml}</div>
        </div>
      `;
    }

    chatMessages.appendChild(row);
    attachCopyHandlers(row);
    scrollToBottom();
    return row;
  }

  // Match prompt to curated answers or generate transparent fallback
  function findCuratedResponse(promptText) {
    const lower = promptText.toLowerCase().trim();

    if (lower.includes("sql") || lower.includes("join")) {
      return CURATED_RESPONSES.sql.response;
    }
    if (lower.includes("arduino") || lower.includes("ultrasonic") || lower.includes("sensor")) {
      return CURATED_RESPONSES.arduino.response;
    }
    if (lower.includes("offline") || lower.includes("internet") || lower.includes("how local ai works") || lower.includes("local ai")) {
      return CURATED_RESPONSES.offline.response;
    }
    if (lower.includes("ram") || lower.includes("rom")) {
      return CURATED_RESPONSES.ramrom.response;
    }

    // Transparent, honest arbitrary prompt handling
    const safePrompt = promptText.length > 80 ? promptText.substring(0, 80) + "..." : promptText;
    return `### [Demo Mode Notice — No Real Model Connected]

You submitted:
> **"${safePrompt}"**

**Why wasn't this question evaluated by an AI?**
- This public portfolio website is a **100% static demonstration** hosted on GitHub Pages.
- **No language model is hosted or executing on this public web server.**
- **Zero network requests were made**: your input was evaluated exclusively by client-side browser logic and was **never transmitted** to an AI backend, external API, or the author's laptop.

---

#### How to Experience Real AI Inference:
To submit arbitrary natural language questions and generate live tokens with dynamic reasoning, run the project locally on your machine:
1. Ensure **Ollama** is running locally: \`ollama run qwen2.5:1.5b\`
2. Launch the local backend: \`python app.py\`
3. Open your browser to the local port (even with **Wi-Fi disabled**).

*(Try selecting one of the curated prompt buttons above to view realistic formatting, code blocks, and markdown rendering!)*`;
  }

  // Smooth client-side token streaming simulation (Zero network traffic)
  function simulateAssistantStream(rawMarkdown) {
    isStreaming = true;
    sendBtn.disabled = true;

    // Create container for incoming response
    const row = document.createElement("div");
    row.className = "message-row assistant";
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    row.innerHTML = `
      <div class="avatar assistant-avatar" title="Simulated Local AI">AI</div>
      <div class="message-bubble">
        <div class="assistant-meta">
          <span class="assistant-meta-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            SIMULATED RESPONSE
          </span>
          <span class="assistant-meta-time">${timestamp} · 0 Network Requests</span>
        </div>
        <div class="message-body streaming-body"><span class="cursor-blink">▍</span></div>
      </div>
    `;

    chatMessages.appendChild(row);
    scrollToBottom();

    const bodyEl = row.querySelector(".message-body");

    // Chunk the text into pseudo-tokens for smooth visual pacing
    const tokens = rawMarkdown.match(/\S+|\s+/g) || [rawMarkdown];
    let currentIndex = 0;
    let accumulated = "";

    // Stream at a natural pace (~18ms per token chunk)
    activeTimer = setInterval(() => {
      if (currentIndex < tokens.length) {
        // Append 2-3 tokens per step for realistic throughput (~35 tokens/sec)
        const step = Math.min(3, tokens.length - currentIndex);
        for (let i = 0; i < step; i++) {
          accumulated += tokens[currentIndex++];
        }
        bodyEl.innerHTML = renderMarkdown(accumulated) + '<span class="cursor-blink">▍</span>';
        scrollToBottom();
      } else {
        clearInterval(activeTimer);
        activeTimer = null;
        isStreaming = false;
        sendBtn.disabled = false;
        bodyEl.innerHTML = renderMarkdown(accumulated);
        attachCopyHandlers(row);
        scrollToBottom();
      }
    }, 20);
  }

  // Handle Form Submission
  composerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (isStreaming) return;

    const userText = composerInput.value.trim();
    if (!userText) return;

    // Sanitize user text for HTML display
    const sanitizedUserHtml = userText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>");

    // 1. Display User Message
    appendMessage("user", `<p>${sanitizedUserHtml}</p>`);
    composerInput.value = "";
    autoResizeTextarea();

    // 2. Select matching curated answer or honest fallback
    const answerMarkdown = findCuratedResponse(userText);

    // 3. Render via simulated client-side stream
    simulateAssistantStream(answerMarkdown);
  });

  // Curated Prompt Chips Click Handling
  promptChips.forEach(chip => {
    chip.addEventListener("click", function () {
      if (isStreaming) return;
      const promptKey = chip.getAttribute("data-prompt");
      if (CURATED_RESPONSES[promptKey]) {
        const queryText = CURATED_RESPONSES[promptKey].title;
        composerInput.value = queryText;
        autoResizeTextarea();
        composerForm.dispatchEvent(new Event("submit", { cancelable: true }));
      }
    });
  });

  // Reset / Clear Conversation (Guaranteed 100% in-memory wipe)
  function resetConversation() {
    if (activeTimer) {
      clearInterval(activeTimer);
      activeTimer = null;
    }
    isStreaming = false;
    sendBtn.disabled = false;

    // Clean DOM
    chatMessages.innerHTML = `
      <div class="message-row assistant">
        <div class="avatar assistant-avatar" title="Simulated Local AI">AI</div>
        <div class="message-bubble">
          <div class="assistant-meta">
            <span class="assistant-meta-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              DEMO NOTICE
            </span>
            <span class="assistant-meta-time">Sandboxed Client-Side</span>
          </div>
          <div class="message-body">
            <p><strong>Welcome to the Private Offline AI Portfolio Demonstration.</strong></p>
            <p>This interactive demonstration is hosted statically on GitHub Pages. To guarantee total isolation, <strong>no AI model is hosted here</strong> and <strong>visitor prompts are never sent over the network</strong>.</p>
            <p>You can test the interface using the curated prompts above (SQL joins, Arduino sensor, Local AI architecture, or RAM vs ROM), or type a question to inspect demo handling.</p>
            <p><em>To run genuine AI inference locally on your own machine, see the setup guide below.</em></p>
          </div>
        </div>
      </div>
    `;
    composerInput.value = "";
    autoResizeTextarea();
  }

  btnNewDemo.addEventListener("click", resetConversation);
  btnClearChat.addEventListener("click", resetConversation);

  // Theme Switcher (Ephemerally toggles dark/light mode on the document)
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme");
      const nextTheme = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", nextTheme);
      themeToggle.setAttribute("aria-label", `Switch to ${current === "light" ? "light" : "dark"} mode`);
    });
  }

  // Initial copy handlers attachment
  attachCopyHandlers(chatMessages);
})();
