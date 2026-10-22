# Private Offline AI — Public Portfolio Showcase

[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-blue?style=flat-square&logo=github)](https://YOUR_GITHUB_USERNAME.github.io/private-offline-ai-demo/)
[![Static Website](https://img.shields.io/badge/Architecture-Static%20Client--Side-green?style=flat-square)](./PRIVACY.md)
[![Zero Cloud Exfiltration](https://img.shields.io/badge/Security-Zero%20Data%20Exfiltration-success?style=flat-square)](./PRIVACY.md)
[![Model](https://img.shields.io/badge/Local%20Model-Qwen%202.5%201.5B-purple?style=flat-square)](https://ollama.com/library/qwen2.5)

> **Important Disclosure:** This repository contains the public portfolio demonstration for **Private Offline AI**. It is a **100% client-side static website** designed to be hosted on **GitHub Pages**. The actual AI model, Ollama runtime, and Python backend run strictly and exclusively on the developer's local Windows laptop. **No AI model is hosted on this website, and visitor prompts are never transmitted or persisted.**

---

## Live Demo & Repository Links

- **Live GitHub Pages URL:** `https://YOUR_GITHUB_USERNAME.github.io/private-offline-ai-demo/` *(Replace with your actual GitHub username upon repository creation)*
- **Public Demo Repository:** `https://github.com/YOUR_GITHUB_USERNAME/private-offline-ai-demo`
- **Private/Local Architecture Source:** `https://github.com/YOUR_GITHUB_USERNAME/private-offline-ai` *(Placeholder)*

---

## 1. Project Overview

Modern Large Language Models (LLMs) provide transformative productivity, but standard commercial cloud deployments require transmitting proprietary source code, personal thoughts, and confidential business documents to third-party data centers.

**Private Offline AI** solves this security tradeoff. It is a fully functional, ChatGPT-inspired local interface engineered to operate in **complete physical isolation (100% offline with Wi-Fi disabled)** on accessible consumer gaming laptop hardware.

### Key Highlights
- **Zero Cloud Dependence:** Complete token generation runs on a local AMD Ryzen 5 5600H and NVIDIA GeForce GTX 1650 (4 GB VRAM) laptop.
- **Strict Network Boundary:** Python backend and Ollama bind exclusively to the loopback address (`127.0.0.1`), preventing external network access.
- **Zero Disk Logging:** Prompts, responses, and conversation turns are processed in volatile RAM and are never persisted to disk, databases, or logs.
- **Transparent Public Showcase:** This repository hosts the static portfolio demo without exposing private endpoints or creating network tunnels back to the developer's laptop.

---

## 2. Architecture: Public Demo vs. Real Local AI

The diagram below illustrates the two completely isolated environments:

```
[ PUBLIC INTERNET: GITHUB PAGES ]
   Public Visitor
         │
         ▼ (Loads static HTML, CSS & script.js)
   GitHub Pages Static CDN
         │
         ▼ (Sandboxed browser execution)
   Simulated JavaScript Demo ──► Pre-recorded sample answers (0 network calls)

═══════════════════════════════════════════════════════════════════════════════
   ⚡ TOTAL AIR GAP: NO NETWORK TUNNEL &bull; NO PORT FORWARDING &bull; NO DATA EXFILTRATION
═══════════════════════════════════════════════════════════════════════════════

[ PRIVATE LOCAL WORKSTATION: WINDOWS 11 (WI-FI DISABLED) ]
   Developer's Browser (InPrivate)
         │
         ▼ (HTTP over 127.0.0.1:8765)
   Python Backend (app.py) ──► ThreadingHTTPServer (Suppressed request logging)
         │
         ▼ (SSE Stream over 127.0.0.1:11434)
   Ollama Local Engine
         │
         ▼ (CUDA matrix operations in VRAM)
   qwen2.5:1.5b Model (GPU) ──► Real streaming tokens (~30 t/s)
```

---

## 3. Files in this Repository

This repository is completely self-contained and ready for immediate deployment to GitHub Pages:

| File | Purpose |
| :--- | :--- |
| **`index.html`** | Semantic, accessible HTML5 single-page portfolio with inline SVG diagrams, ChatGPT-inspired demo UI, technical specifications, and step-by-step guides. |
| **`style.css`** | High-performance CSS3 styling with Dark and Light mode support, accessible focus states, responsive mobile-first layouts, and zero external font/CDN dependencies. |
| **`script.js`** | Pure vanilla JavaScript driving the interactive demo, safe markdown rendering, syntax-highlighted code blocks, one-click copy buttons, and client-side token streaming. |
| **`PRIVACY.md`** | Comprehensive security and privacy disclosures explaining client-side sandboxing, zero prompt transmission, zero persistence, and static hosting metadata. |
| **`README.md`** | Primary project documentation, architecture overview, hardware specifications, and deployment guide. |
| **`.nojekyll`** | Instructs GitHub Pages to serve static files directly without running the Jekyll build engine. |

---

## 4. How to Deploy to GitHub Pages

Follow these exact steps to publish this portfolio showcase to your own GitHub account:

### Step 1: Create a New GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Click **New Repository** (or visit `https://github.com/new`).
3. Set the Repository Name to: `private-offline-ai-demo`
4. Set Visibility to **Public**.
5. Do **not** initialize with a README, .gitignore, or license (these files are already provided).
6. Click **Create repository**.

### Step 2: Upload the Files
Using the Git command line from inside the `public-demo/` directory:
```bash
cd public-demo

git init
git add .
git commit -m "Initial commit: Deploy Private Offline AI public portfolio demo"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/private-offline-ai-demo.git
git push -u origin main
```
*(Alternatively, you can drag and drop all files from `public-demo/` into the GitHub Web UI upload interface).*

### Step 3: Enable GitHub Pages
1. In your GitHub repository, navigate to **Settings** > **Pages** (in the left sidebar).
2. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
3. Click **Save**.
4. Within 1-2 minutes, GitHub Pages will deploy your site to:
   ```
   https://YOUR_GITHUB_USERNAME.github.io/private-offline-ai-demo/
   ```

---

## 5. Hardware & Model Specifications

The real local application is calibrated to run on everyday hardware:

- **Operating System:** Windows 11 Home (64-bit)
- **Processor:** AMD Ryzen 5 5600H (6 cores / 12 threads)
- **GPU:** NVIDIA GeForce GTX 1650 (4 GB GDDR6 VRAM)
- **RAM:** 8 GB DDR4
- **Model:** `qwen2.5:1.5b` (Q4_K_M quantized GGUF weights, ~986 MB)
- **Context Window:** 2,048 tokens
- **Inference Speed:** ~25 to 35 tokens per second

---

## 6. How to Run the Real Local Application

To run the authentic private offline AI on your own Windows computer:

1. **Install Ollama for Windows:** Download from [ollama.com](https://ollama.com).
2. **Pull the Model:**
   ```powershell
   ollama pull qwen2.5:1.5b
   ```
3. **Launch the Local Backend:**
   ```powershell
   python app.py
   ```
4. **Access the Interface:**
   Open `http://127.0.0.1:8765` in your browser (preferably in an InPrivate window).
5. **Verify 100% Offline Operation:**
   Turn off Wi-Fi or unplug your Ethernet cable. Run in PowerShell:
   ```powershell
   Test-Connection 8.8.8.8 -Count 1 -Quiet
   # Output: False
   ```
   Submit prompts in the interface. Generation continues entirely locally on your GPU!

---

## 7. License & Credits

- Architectural design and implementation by the project author.
- Built with vanilla web standards and the open-source Ollama runtime.
- Model weights: [Qwen 2.5](https://huggingface.co/Qwen) by Alibaba Cloud (Apache 2.0 License).
