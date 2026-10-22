# Privacy & Security Disclosure

**Project:** Private Offline AI — Public Portfolio Demonstration  
**Host Target:** GitHub Pages (Static Hosting)  
**Deployment Scope:** Client-Side Demonstration Only  

---

## 1. Executive Summary

This repository contains the static web files for the public portfolio showcase of the **Private Offline AI** project.

- **The real AI inference engine runs strictly and exclusively on the developer's local Windows workstation.**
- **The public website is a static demonstration running client-side in the visitor's browser.**
- **No artificial intelligence model, backend server, or machine learning runtime executes on this public website.**
- **Sample responses shown in the interactive demonstration are pre-recorded deterministic samples stored directly in client-side JavaScript.**
- **There is zero network connection, zero tunneling, and zero communication between this public website and the developer's laptop.**

---

## 2. Public Demo Privacy Boundaries

### A. Zero Prompt Exfiltration
When you type a query into the interactive demo composer or click a curated sample prompt, the text is evaluated entirely inside your browser's local JavaScript execution sandbox.
- The demo scripts **never** issue network calls (`fetch`, `XMLHttpRequest`, `WebSocket`, `EventSource`, `WebRTC`, or `navigator.sendBeacon`) to transmit prompt data.
- The developer never receives, views, or logs the questions or text visitors enter into the public demo.

### B. Zero Conversation Persistence
- The application does not intentionally persist demo conversations.
- No `localStorage`, `sessionStorage`, `IndexedDB`, or HTTP cookies are used by the application to store chat transcripts.
- Resetting the conversation, clicking "New Demo", or reloading the browser tab completely clears the in-memory chat state.

### C. Static Web Host Operational Logging
While the application does not transmit or record visitor chats, this website is statically hosted on **GitHub Pages** (operated by GitHub, Inc. / Microsoft Corporation).
- Like all web servers on the internet, the hosting provider's infrastructure inevitably receives standard HTTP connection metadata during file retrieval.
- This metadata typically includes the visitor's public IP address, browser User-Agent string, operating system information, referrer header, and request timestamps.
- Such metadata is processed and retained by the hosting provider in accordance with GitHub's standard operational, telemetry, and security policies (e.g., DDoS defense, infrastructure analytics, and abuse monitoring).
- **We do not make unsupported claims that visiting any website makes your browser or the hosting infrastructure trace-free.**

### D. Visitor Advisory
Because this is an open, publicly accessible website hosted on third-party cloud infrastructure:
> **Advisory:** Visitors should **never** enter sensitive, confidential, proprietary, or personal information into any online demonstration or web form.

---

## 3. The Real Local Application vs. Public Demo

| Attribute | Public Portfolio Demo | Real Local AI Application |
| :--- | :--- | :--- |
| **Hosting Environment** | GitHub Pages Static CDN | Local Windows 11 Workstation |
| **Inference Engine** | None (Pre-recorded JS samples) | Local Ollama + Qwen 2.5 1.5B (GGUF) |
| **Network Dependency** | Requires internet to load static assets | **100% Offline (Works with Wi-Fi disabled)** |
| **Endpoint Binding** | Public HTTPS Web Server | Strict Loopback (`127.0.0.1:8765`) |
| **Model Weight Location** | None (0 MB model weights) | Local NVIDIA GTX 1650 4 GB VRAM |
| **Arbitrary Prompt Inference** | Transparently labeled fallback notice | Full live streaming token generation |
| **Data Transmission to Developer** | **Zero** | **Zero** |

---

## 4. Local Engine Air-Gap Architecture

The authentic local application is engineered with the following security invariants:
1. **Physical Air-Gap Capability:** Fully functional in Airplane Mode or with network adapters disabled. Outbound PowerShell test (`Test-Connection 8.8.8.8`) returns `False`.
2. **Loopback Boundary Enforcement:** Bound strictly to `127.0.0.1:8765` for Python and `127.0.0.1:11434` for Ollama. Packets addressed to `127.0.0.1` cannot traverse physical network cards.
3. **Suppressed Request Logs:** The Python `ThreadingHTTPServer` explicitly overrides and silences routine HTTP access and body logging to prevent unencrypted prompt traces on the local SSD.
4. **Operating System Boundary Disclosure:** The application does not claim to alter Windows system-level behaviors such as virtual memory paging (`pagefile.sys`), hibernation snapshots (`hiberfil.sys`), or hardware memory cache dumps. For maximum isolation on the local machine, running within an InPrivate browser window is standard practice.

---

## 5. Contact & Questions

If you have questions regarding the architecture or privacy design of this project, open an issue in the project repository or reach out via the developer's public portfolio contact channels.
