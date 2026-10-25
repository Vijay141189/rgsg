/* ==========================================================================
   VIJAY SHANKAR - PORTFOLIO INTERACTION ENGINE (app.js)
   Features:
   - Dynamic Mouse Spotlight Glow
   - Fully Interactive DevSecOps & AI CLI Terminal
   - Live Model Context Protocol (MCP) & Autonomous Agent Simulator
   - Project Filter Matrix
   - Responsive Navigation & Smooth Scroll
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCursorGlow();
  initMobileNav();
  initCliTerminal();
  initAiAgentSimulator();
  initProjectFilters();
});

/* --------------------------------------------------------------------------
   1. CURSOR SPOTLIGHT GLOW
   -------------------------------------------------------------------------- */
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;

  window.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
  });

  // Close nav on click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('active');
    });
  });
}

/* --------------------------------------------------------------------------
   3. INTERACTIVE CLI TERMINAL
   -------------------------------------------------------------------------- */
function initCliTerminal() {
  const input = document.getElementById('terminalInput');
  const body = document.getElementById('terminalBody');
  const submitBtn = document.getElementById('termSubmitBtn');
  const chips = document.querySelectorAll('.term-chip');

  if (!input || !body) return;

  const commands = {
    help: () => `
<div class="term-line"><span class="term-cyan">Available Commands:</span></div>
<div class="term-line">  • <span class="term-green">whoami</span>       : Executive profile & summary</div>
<div class="term-line">  • <span class="term-green">skills</span>       : Core technical arsenal & tools</div>
<div class="term-line">  • <span class="term-green">mcp-status</span>   : Inspect active Model Context Protocol tools</div>
<div class="term-line">  • <span class="term-green">run-triage</span>   : Trigger simulated AI SRE auto-remediation</div>
<div class="term-line">  • <span class="term-green">projects</span>     : List flagship enterprise architectures</div>
<div class="term-line">  • <span class="term-green">certs</span>        : View industry credentials (CKA, CKS, AWS, Azure)</div>
<div class="term-line">  • <span class="term-green">finops</span>       : Cost optimization metrics & achievements</div>
<div class="term-line">  • <span class="term-green">contact</span>      : Reach out for Staff/Lead roles</div>
<div class="term-line">  • <span class="term-green">clear</span>        : Clear the terminal console</div>
    `,

    whoami: () => `
<div class="term-line"><span class="term-cyan">Vijay Shankar</span> — Staff / Lead DevSecOps Architect &amp; AI Systems Engineer</div>
<div class="term-line">Experience : <span class="term-purple">9+ Years Enterprise Engineering</span></div>
<div class="term-line">Focus Area : Zero-Trust Multi-Cloud (AWS/Azure/GCP), Kubernetes, IaC, MCP &amp; Agentic AI</div>
<div class="term-line">Value Prop : Architecting 99.999% SLA resilient clouds while deploying autonomous AI agents for SRE &amp; Security.</div>
    `,

    skills: () => `
<div class="term-line"><span class="term-cyan">[DevSecOps Core]</span>   : HashiCorp Vault, Trivy, Snyk, SonarQube, OPA Gatekeeper, Kyverno, Falco, Cosign</div>
<div class="term-line"><span class="term-purple">[Cloud & IaC]</span>      : Terraform, Terragrunt, OpenTofu, Kubernetes (EKS/AKS/GKE), Helm, ArgoCD, Istio, Cilium</div>
<div class="term-line"><span class="term-green">[AI & MCP Tools]</span>    : Model Context Protocol (MCP), LangGraph, CrewAI, Qdrant, Pinecone, vLLM, NeMo Guardrails</div>
<div class="term-line"><span class="term-yellow">[Observability]</span>   : Prometheus, Grafana, OpenTelemetry (OTel), Datadog, Chaos Mesh</div>
    `,

    'mcp-status': () => `
<div class="term-line"><span class="term-cyan">⚡ Model Context Protocol (MCP) Runtime Engine:</span> <span class="term-green">ONLINE</span></div>
<div class="term-line">Connected MCP Tool Servers:</div>
<div class="term-line">  [1] <span class="term-purple">mcp-k8s-operator</span>    : Query pods, nodes, metrics, auto-scale deployments (Active)</div>
<div class="term-line">  [2] <span class="term-purple">mcp-trivy-scanner</span>   : Trigger image & IaC scans, stream CVE severity reports (Active)</div>
<div class="term-line">  [3] <span class="term-purple">mcp-vault-pki</span>       : Generate short-lived TLS certs & dynamic DB credentials (Active)</div>
<div class="term-line">  [4] <span class="term-purple">mcp-enterprise-rag</span>  : Semantic runbook lookup via Qdrant Vector Engine (Active)</div>
<div class="term-line text-muted">➜ All tool protocols registered with schema validation & sandbox execution.</div>
    `,

    'run-triage': () => `
<div class="term-line"><span class="term-yellow">⚠ Simulating Autonomous Incident Triage...</span></div>
<div class="term-line">1. [0.12s] Prometheus alert received: <span class="term-red">HighMemoryUsage_Pod_payment-svc</span></div>
<div class="term-line">2. [0.45s] Agent dispatched via <span class="term-purple">Model Context Protocol</span></div>
<div class="term-line">3. [0.89s] Calling tool: <code>mcp-k8s-operator.get_pod_logs(namespace='prod', pod='payment-svc-78')</code></div>
<div class="term-line">4. [1.20s] Root Cause Identified: <span class="term-cyan">Java JVM heap exhaustion due to unbounded query cache</span></div>
<div class="term-line">5. [1.60s] Invoking remediation tool: <code>mcp-k8s-operator.patch_hpa_min_replicas(count=6)</code></div>
<div class="term-line"><span class="term-green">✔ Auto-Remediation Succeeded:</span> Cluster stabilized in 1.8 seconds. Slack notification sent.</div>
    `,

    projects: () => `
<div class="term-line"><span class="term-cyan">1. Autonomous SRE Agent (MCP + LLM)</span>: Self-healing incident response using Model Context Protocol.</div>
<div class="term-line"><span class="term-cyan">2. Zero-Trust GitOps Platform</span>: ArgoCD + Vault + Kyverno multi-cluster deployment.</div>
<div class="term-line"><span class="term-cyan">3. Enterprise Ops & Compliance RAG</span>: Sub-second semantic search over runbooks via Qdrant.</div>
<div class="term-line"><span class="term-cyan">4. Modular Multi-Region Cloud Landing Zone</span>: Enterprise Terraform Hub-Spoke architecture.</div>
    `,

    certs: () => `
<div class="term-line"><span class="term-yellow">★ AWS Certified Solutions Architect Professional</span> (AWS)</div>
<div class="term-line"><span class="term-cyan">★ CKA — Certified Kubernetes Administrator</span> (CNCF / Linux Foundation)</div>
<div class="term-line"><span class="term-red">★ CKS — Certified Kubernetes Security Specialist</span> (CNCF / Linux Foundation)</div>
<div class="term-line"><span class="term-cyan">★ Microsoft Certified: Azure Solutions Architect Expert</span></div>
<div class="term-line"><span class="term-purple">★ HashiCorp Certified: Terraform Associate</span></div>
    `,

    finops: () => `
<div class="term-line"><span class="term-green">FinOps Impact:</span> 40% aggregate cloud spend reduction achieved.</div>
<div class="term-line">• Automated Graviton / ARM instance migration</div>
<div class="term-line">• Spot instance orchestration for stateless Kubernetes workloads</div>
<div class="term-line">• Infracost pre-commit PR checks preventing expensive runaway resource allocations</div>
    `,

    contact: () => `
<div class="term-line">Email    : <a href="mailto:vijay@example.com" class="term-cyan">vijay@example.com</a></div>
<div class="term-line">LinkedIn : <a href="https://linkedin.com" target="_blank" class="term-purple">linkedin.com/in/vijayshankar</a></div>
<div class="term-line">GitHub   : <a href="https://github.com/Vijay141189" target="_blank" class="term-green">github.com/Vijay141189</a></div>
    `,

    clear: () => {
      body.innerHTML = '';
      return '';
    }
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Echo command
    const echoLine = document.createElement('div');
    echoLine.className = 'term-line';
    echoLine.innerHTML = `<span class="term-purple">vijay@architect:~$</span> <span class="term-cyan">${escapeHtml(cmd)}</span>`;
    body.appendChild(echoLine);

    // Run action
    if (commands[cmd]) {
      const output = commands[cmd]();
      if (output) {
        const outDiv = document.createElement('div');
        outDiv.innerHTML = output;
        body.appendChild(outDiv);
      }
    } else {
      const errLine = document.createElement('div');
      errLine.className = 'term-line text-muted';
      errLine.innerHTML = `command not found: <span class="term-red">${escapeHtml(cmd)}</span>. Type <span class="term-cyan">help</span> for list of commands.`;
      body.appendChild(errLine);
    }

    body.scrollTop = body.scrollHeight;
    input.value = '';
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(input.value);
    }
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      executeCommand(input.value);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });
}

/* --------------------------------------------------------------------------
   4. LIVE AI AGENT & MCP SIMULATOR
   -------------------------------------------------------------------------- */
function initAiAgentSimulator() {
  const scenarioBtns = document.querySelectorAll('.scenario-btn');
  const runBtn = document.getElementById('btnRunAgent');
  const streamBox = document.getElementById('agentStreamContent');
  const badge = document.getElementById('agentStatusBadge');

  if (!runBtn || !streamBox) return;

  let activeScenario = 'k8s-pod-crash';

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeScenario = btn.getAttribute('data-scenario');
    });
  });

  const scenarios = {
    'k8s-pod-crash': [
      { delay: 300, step: 'DETECTED', text: 'Prometheus Alert fired: [NodeMemoryExhaustion] on cluster-prod-us-east-1.' },
      { delay: 1000, step: 'MCP TOOL CALL', text: 'Executing MCP Server <code>mcp-k8s-operator.list_pods_by_memory()</code>.' },
      { delay: 2000, step: 'REASONING', text: 'Agent identifies pod <code>ingress-proxy-v2</code> leaking file descriptors after burst traffic.' },
      { delay: 3200, step: 'ACTION', text: 'Invoking <code>mcp-k8s-operator.graceful_restart_and_scale()</code>. Target replicas adjusted to 8.' },
      { delay: 4200, step: 'VERIFIED', text: 'Memory pressure dropped by 64%. Node status returned to Healthy. Mean Time to Resolution: 3.9 seconds.' }
    ],
    'cve-zero-day': [
      { delay: 300, step: 'DETECTED', text: 'CI/CD Webhook: Trivy scan detected CVE-2026-4412 (CVSS 9.8) in base alpine container.' },
      { delay: 1100, step: 'MCP TOOL CALL', text: 'Calling <code>mcp-trivy-scanner.query_fixed_version(cve="CVE-2026-4412")</code>.' },
      { delay: 2100, step: 'REASONING', text: 'Patch found in alpine:3.21.3. Generating automated Git pull request with dependency bump.' },
      { delay: 3200, step: 'POLICY CHECK', text: 'Kyverno policy validation: PASS. Checkov IaC security scan: 0 errors.' },
      { delay: 4200, step: 'COMPLETED', text: 'PR #418 opened on GitHub with automated verification tests passing. Security gate cleared.' }
    ],
    'rag-compliance': [
      { delay: 300, step: 'TRIGGERED', text: 'Audit query: "Verify SOC2 Trust Services Criteria CC6.6 & CIS Kubernetes Benchmark v1.8."' },
      { delay: 1000, step: 'MCP RAG RETRIEVAL', text: 'Querying Qdrant Vector Store with hybrid dense/sparse embedding.' },
      { delay: 2200, step: 'MATCH FOUND', text: 'Retrieved 4 relevant policy documents from internal architecture repository in 28ms.' },
      { delay: 3200, step: 'EVALUATION', text: 'NeMo Guardrails verifying claims: 100% of etcd encryption-at-rest keys managed via HashiCorp Vault.' },
      { delay: 4200, step: 'CERTIFICATE READY', text: 'Generated signed compliance audit attestation. Verification status: FULLY COMPLIANT.' }
    ]
  };

  runBtn.addEventListener('click', () => {
    runBtn.disabled = true;
    badge.className = 'badge-status running';
    badge.textContent = 'EXECUTING AGENT WORKFLOW';
    streamBox.innerHTML = '';

    const steps = scenarios[activeScenario] || scenarios['k8s-pod-crash'];

    steps.forEach((s) => {
      setTimeout(() => {
        const stepEl = document.createElement('div');
        stepEl.className = 'stream-step';
        stepEl.innerHTML = `
          <span class="step-timestamp">[${s.step}]</span>
          <p>${s.text}</p>
        `;
        streamBox.appendChild(stepEl);
        streamBox.scrollTop = streamBox.scrollHeight;
      }, s.delay);
    });

    const totalTime = steps[steps.length - 1].delay + 500;
    setTimeout(() => {
      runBtn.disabled = false;
      badge.className = 'badge-status completed';
      badge.textContent = 'WORKFLOW RESOLVED';
    }, totalTime);
  });
}

/* --------------------------------------------------------------------------
   5. PROJECT FILTER MATRIX
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
