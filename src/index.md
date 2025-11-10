---
layout: page.njk
title: Working with ChatGPT
subtitle: Mastering ChatGPT's advanced capabilities
---

This guide covers ChatGPT's powerful features with practical examples and sample prompts you can use today.

---

Use the accordions below to jump into the tools that matter most—you can skim the overview, copy a prompt, and come back later as additional sections are added.

<section class="feature-accordion">
  <div class="feature-section" id="canvas">
    <button type="button" class="example-toggle" id="toggle-canvas" aria-expanded="false" aria-controls="content-canvas">
      Canvas
    </button>
    <div id="content-canvas" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-canvas">
      <div class="example-content-inner">
        <p><strong>Canvas</strong> is ChatGPT's collaborative workspace for long-form thinking—drop in documents, designs, tables, and runnable code, then iterate in-line with follow-up prompts while keeping everything in one scrollable artifact.</p>
        <p>Use it when you need to keep a living document, capture revisions, or prototype a web experience the moment inspiration strikes.</p>

        <h4>Sample Prompt 1 – Agenda Builder Workflow</h4>
        <p>Co-create a full agenda for an on-campus event, complete with locations, timeline, and narrative context.</p>
        <p><strong>Initial prompt</strong></p>
        <p>These are the exact instructions used in this training, so feel free to copy them or tweak the tone for your own needs. To edit your own custom instructions, visit <a href="https://chatgpt.com/schedules#settings/Personalization" target="_blank" rel="noopener">chatgpt.com/schedules#settings/Personalization</a>.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="canvas-doc-initial">You are my planning partner for a one-day "UC Merced Regenerative Agriculture Workshop."
Build a detailed agenda that starts in the Conference Center (CC) Auditorium for welcomes and keynotes, transitions to the campus Greenhouse for hands-on demos, and concludes with a guided visit to the Experimental Farm.
Include timestamps, speaker placeholders, logistical reminders (catering, AV, transport), and a closing recap that highlights next steps.
Write it like a colleague jotting down the plan in Canvas so I can edit live.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="canvas-doc-initial">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>
        <p><strong>Follow-up Prompt 1</strong></p>
        <div class="copyable-snippet" markdown="0">
          <pre id="canvas-doc-followup-1">Add a coordination table that lists each stakeholder group, the activity they lead, the location, and the supplies or AV support they require.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="canvas-doc-followup-1">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <p><strong>Follow-up Prompt 2</strong></p>
        <div class="copyable-snippet" markdown="0">
          <pre id="canvas-doc-followup-2">Create a Questions for Thought Leaders section with five prompts participants can pose during the Greenhouse demos and Experimental Farm tour.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="canvas-doc-followup-2">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <h4>Sample Prompt 2 – Abstract Background Studio</h4>
        <p>Prototype a simple creative tool that faculty can run, tweak, and share straight from Canvas—perfect for generating coordinated slide backdrops.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="canvas-webapp">Build a single-page “UC Merced Backdrop Studio” in the Canvas that generates abstract slide backgrounds using nested contour bands (soft, rounded shapes that repeat with small inward offsets). The look should feel like topographic swells or irrigation lines.

Visual rules
	•	Render 8–12 concentric bands per composition, each a rounded blob derived from the previous one with a 2–5% inward offset and corner smoothing.
	•	No hard strokes. Use solid fills with smooth color easing between bands (cubic or cosine interpolation).
	•	Bands should share one parent path so edges stay parallel and calm. Avoid sharp points and self-intersections.
	•	Default band count, offset, and curvature should produce a gentle left-to-right flow like the reference.
	•	Optional subtle paper grain overlay at 2–4% opacity to avoid flatness.

Controls
	•	Shuffle: randomize seed, band count (8–12), offset, curvature bias, and band rotation with one click.
	•	Palettes: show UC Merced chips
	•	Blue + Gold
	•	Twilight + Teal
	•	Field Greens
plus a full html color picker input field for start/end colors.
	•	Aspect: preview 16:9 by default with a 4:3 toggle. The generator should recompose to fill the chosen aspect without stretching.
	•	Watermark: toggle “UC Merced Research” watermark (bottom-right, small, 60–70% opacity). Keep disabled by default
	•	Download PNG: export the canvas via toDataURL with timestamped filenames.

Color guidance
	•	Default to official tones for gradients, accents, and UI:
	•	Blue #041E42, Gold #FFB81C, Slate #4A5568, Mist #E5E7EB, Aqua #46A6D8.
	•	When a palette chip is selected, map it to dark → light band ramps, e.g., start at a deep shade and ease toward the light accent.

Responsiveness
	•	Fully responsive layout. Controls stack on narrow sidebars; preview maintains fixed aspect with a letterboxed container. Works from narrow Canvas to large desktop.

Implementation notes
	•	Single HTML file. No external assets.
	•	Use html canvas for drawing. Keep a deterministic seed so the same seed reproduces the same layout; shuffle replaces the seed.
	•	Generate the base blob with a few Bezier points, apply smoothing, then create inner bands by offsetting the path.
	•	Repaint on any control change. Debounce color pickers.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="canvas-webapp">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>
        <button type="button" class="close-section-btn" data-section="canvas">Close Canvas section</button>
      </div>
    </div>
  </div>

  <div class="feature-section" id="agent">
    <button type="button" class="example-toggle" id="toggle-agent" aria-expanded="false" aria-controls="content-agent">
      Agent
    </button>
    <div id="content-agent" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-agent">
      <div class="example-content-inner">
        <p><strong>Agent mode</strong> turns ChatGPT into a full workflow partner: it opens a virtual computer, jumps between a visual browser, text browser, terminal, and APIs, and keeps its own workspace alive while it clicks, filters, downloads files, and runs code on your behalf.</p>
        <p>Use it when you need to string together messy steps—like signing in to clunky portals, synthesizing data across multiple tabs, and returning polished artifacts—without babysitting every action. If a site requires your credentials, the agent hands control of the browser to you (or pauses) so you can log in securely, then you can grant it access again to continue. You stay in control via approval prompts, can hop in to steer, and resume the run at any time.</p>
        <p>The new Atlas browser brings this experience into a more interactive canvas: you can watch the agent navigate, nudge it in-line, and mix manual clicks with automated steps inside the same panel.</p>
        <p>To turn it on, open the tools dropdown in ChatGPT and click the <strong>Agent</strong> button (see below). You can hand the browser back and forth whenever a login prompt appears, then resume the run once you’re authenticated.</p>
        <figure class="feature-figure">
          <img src="{{ '/assets/agent.png' | url }}" alt="Agent tool highlighted inside the ChatGPT composer">
          <figcaption>Enable Agent mode from the tools dropdown in any conversation.</figcaption>
        </figure>

        <h4>Sample Prompt – California Hydropower Inventory</h4>
        <p>Ask the agent to map California dams with hydroelectric facilities by hopping across multiple authoritative data sources and returning a clean CSV.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="agent-delta-initial">You are a research-focused agent that can search trusted data sources and output structured results. Your task is to find all dams in California that generate hydroelectric power.

Start by searching authoritative sources like the California Department of Water Resources, the U.S. Bureau of Reclamation, and the California Energy Commission. Identify which dams have hydroelectric facilities, then collect the following information for each:
  • dam_name
  • year_installed
  • latitude
  • longitude

Return the results as a CSV with headers:
dam_name,year_installed,latitude,longitude

If some information is missing, note it clearly in the CSV. Before returning the data, briefly summarize how you verified which dams are hydroelectric and what data sources were used.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="agent-delta-initial">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

       
        <button type="button" class="close-section-btn" data-section="agent">Close Agent section</button>
      </div>
    </div>
  </div>

  <div class="feature-section" id="search">
    <button type="button" class="example-toggle" id="toggle-search" aria-expanded="false" aria-controls="content-search">
      Search
    </button>
    <div id="content-search" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-search">
      <div class="example-content-inner">
        <p><strong>ChatGPT Search</strong> blends natural conversation with live web lookups for everyone. Ask normally and it will search when it needs fresh info, or tap the globe icon to force a real-time pass.</p>
        <p>Results come back with inline citations, a Sources sidebar, and rich cards for things like weather, stocks, sports, news, and maps so you can double-check context before sharing.</p>
        <p>Click the <strong>Search</strong> globe icon in the composer (see below) whenever you want to guarantee a live crawl.</p>
        <figure class="feature-figure">
          <img src="{{ '/assets/search.png' | url }}" alt="Search globe icon highlighted inside ChatGPT">
          <figcaption>Toggle Search directly from the composer.</figcaption>
        </figure>

        <h4>Sample Prompt – Merced Infrastructure Watch</h4>
        <p>Use search to stay current on local buildouts without hopping through a dozen tabs.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="search-merced">Search for the latest news and permitting documents about new infrastructure projects in Merced (e.g., campus expansion, downtown transit hub, irrigation upgrades). For anything approved in the last 60 days, summarize scope, sponsor, expected timeline, and budget, then cite the source (city agenda, news outlet, or agency PDF).</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="search-merced">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <h4>Sample Prompt – Yosemite Roads Status</h4>
        <p>Blend live conditions, official advisories, and context for trip planning.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="search-yosemite">Check Caltrans, National Park Service alerts, and local news for the current status of Yosemite National Park roadways (Highway 120/Tioga Pass, Glacier Point Road, Highway 41, Highway 140). Report which segments are open, closed, or under controlled access today, note any chain controls or construction delays, and include links to the official advisories.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="search-yosemite">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>
        <button type="button" class="close-section-btn" data-section="search">Close Search section</button>
      </div>
    </div>
  </div>

  <div class="feature-section" id="deep-research">
    <button type="button" class="example-toggle" id="toggle-deep-research" aria-expanded="false" aria-controls="content-deep-research">
      Deep Research
    </button>
    <div id="content-deep-research" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-deep-research">
      <div class="example-content-inner">
        <p><strong>Deep research</strong> is an agentic run that can spend 5–30 minutes reading hundreds of sources, reasoning through contradictions, and returning a fully cited report you can use as work product.</p>
        <p>Select it from the composer when you need multi-step analysis: you’ll see a live steps sidebar, can attach spreadsheets or PDFs for context, and will get a notification once the research-grade summary, data tables, and citations are ready.</p>
        <p><em>When to use it:</em> reach for deep research when you need 20–30 minutes of autonomous digging with rigorous citations; use Search for quick fact checks or timely snippets, and Agent mode when you need hands-on workflows (logins, downloads, spreadsheets, task execution).</p>
        <p>Turn it on by clicking the <strong>Deep research</strong> button in the tools dropdown (pictured below), then send your long-form question.</p>
        <figure class="feature-figure">
          <img src="{{ '/assets/research.png' | url }}" alt="Deep research option highlighted inside ChatGPT">
          <figcaption>Enable deep research from the composer before submitting your query.</figcaption>
        </figure>

        <h4>Sample Prompt – Floodplain Retrofits Dossier</h4>
        <p>Offload the kind of multi-source policy digging that usually eats an afternoon.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="deep-floodplain">Produce a 3-page briefing on multi-benefit floodplain retrofit projects in the Sacramento–San Joaquin Delta funded since 2022. Include:
• Table of projects (location, sponsor, budget, permitting status, ecosystem/ag benefits)
• Analysis of which funding programs (DWR, NOAA, USBR, philanthropic) are backing them
• Regulatory or community hurdles noted in meeting minutes or EIRs
• Citations for every claim and a short "next actions" section for UC Merced Water Systems researchers.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="deep-floodplain">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <h4>Sample Prompt – NDAA-Compliant Drone Matrix</h4>
        <p>Task deep research with a procurement-style evaluation.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="deep-commuter">Identify NDAA-compliant drones that can carry a MicaSense Altum PT or comparable LiDAR payload (2.5–3 kg class). For each viable airframe:
• Confirm payload specs, flight time with that payload, and integration notes for Altum PT/LiDAR kits
• Pull recent (2023–2025) operator reviews or field reports highlighting pros/cons
• Note pricing, lead times, and any ITAR/export constraints
• Summarize in a table plus a narrative recommendation section (best for ag sensing, best for infrastructure, etc.) with full citations.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="deep-commuter">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>
        <button type="button" class="close-section-btn" data-section="deep-research">Close Deep Research section</button>
      </div>
    </div>
  </div>

  <div class="feature-section" id="image-generation">
    <button type="button" class="example-toggle" id="toggle-image-generation" aria-expanded="false" aria-controls="content-image-generation">
      Image Generation (DALL-E)
    </button>
    <div id="content-image-generation" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-image-generation">
      <div class="example-content-inner">
        <p><strong>Image generation</strong> taps the latest DALL·E models directly inside ChatGPT—perfect for mockups, illustration explorations, or quick renderings to drop into slides.</p>
        <p>Open the tools menu, toggle <strong>Image</strong>, and describe what you need; you can iterate with follow-up edits, request variations, or upscale outputs for final assets.</p>

        <h4>Sample Prompt – VISTA Field Day Poster</h4>
        <p>Create branded art for the VISTA Lab’s on-farm showcase and include the official icon.</p>
        <figure class="feature-figure feature-figure--small">
          <img src="{{ '/assets/VISTA_LogoSquare.png' | url }}" alt="VISTA Lab icon">
          <figcaption>Use the button below to copy the icon directly into your prompt.</figcaption>
        </figure>
        <button type="button" class="copy-image-btn" data-image-src="{{ '/assets/VISTA_LogoSquare.png' | url }}">
          <span aria-hidden="true">📎</span>
          Copy VISTA icon to clipboard
        </button>
        <p class="asset-note">After copying, paste both the prompt and the VISTA icon image into ChatGPT so it knows exactly what badge to render.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="image-merced">Design a watercolor poster for "VISTA Lab Field Day" at the UC Merced Experimental Farm. Show students walking test plots, portable sensors, and tasting stations under shade sails, with warm evening light and soft grain. Incorporate the VISTA icon (attached) as a badge near the headline, leave negative space for agenda text, and keep the palette in UC Merced blue/gold with sun-faded oranges.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="image-merced">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <h4>Sample Prompt – Field Sensor Explainer</h4>
        <p>Pair image generation with technical storytelling.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="image-sensor">Generate a clean isometric diagram showing an almond orchard row with soil-moisture probes, a solar-powered telemetry mast with on-board data logger, and a small drone capturing multispectral imagery overhead. Emphasize data flow using graceful dotted lines from probes → mast → drone → cloud icon, but do not add text labels. Keep the palette muted with teal, sage, and warm gray tones.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="image-sensor">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <h4>Sample Prompt – Embossed Bee Pattern</h4>
        <p>Produce a refined repeating texture for backgrounds or slide accents.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="image-bee">Generate a seamless repeating pattern of stylized bees arranged in a tidy grid, resembling embossed logos pressed into a flat surface. Keep the palette neutral (white, cream, or light stone), add soft directional lighting with gentle shadows for a low-relief 3D feel, and aim for uniform, minimalist bee silhouettes that convey a calm, elegant wallpaper.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="image-bee">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>
        <button type="button" class="close-section-btn" data-section="image-generation">Close Image Generation section</button>
      </div>
    </div>
  </div>

  <div class="feature-section" id="gpts">
    <button type="button" class="example-toggle" id="toggle-gpts" aria-expanded="false" aria-controls="content-gpts">
      GPTs (Custom ChatGPT Versions)
    </button>
    <div id="content-gpts" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-gpts">
      <div class="example-content-inner">
        <p><strong>GPTs</strong> are custom versions of ChatGPT you can tailor for a specific workflow—mix your own instructions, upload files or PDFs to extend its knowledge, and grant tool/API permissions so it behaves like a mini specialist for your team.</p>
        <p>To browse or launch one, open ChatGPT and click <strong>Explore GPTs</strong> (left sidebar) or head to <a href="https://chatgpt.com/gpts" target="_blank" rel="noopener">chatgpt.com/gpts</a>. To build your own, go to <a href="https://chatgpt.com/create" target="_blank" rel="noopener">chatgpt.com/create</a> and follow the guided builder—then keep it private, share it internally with your org, or publish it.</p>
        <p><strong>How to create a GPT</strong></p>
        <ol>
          <li>Describe the role: in the builder chat, explain what the GPT should do and who it serves.</li>
          <li>Add knowledge + tools: upload files or paste docs, then toggle which capabilities it can use (web search, code interpreter, image generation, or advanced API “actions” for power users).</li>
          <li>Set sharing: keep it private, restrict it to your workspace, or publish it publicly/GPT Store once verified.</li>
        </ol>
        <p>Great use cases include internal playbooks, branded writing assistants, lab equipment concierges, onboarding buddies, data-cleaning bots, classroom tutors, and more.</p>

        <h4>Sample GPT – Field SOP Companion</h4>
        <p>Give your team a repeatable helper that answers questions straight from Trimble and other equipment SOPs.</p>
        <div class="resource-buttons">
          <a class="resource-btn" href="https://chatgpt.com/create" target="_blank" rel="noopener">➕ Create a new GPT</a>
          <a class="resource-btn" href="{{ '/assets/Trimble TDC600 - SOP.docx' | url }}" target="_blank" rel="noopener" download>⬇️ Download Trimble TDC600 SOP</a>
        </div>
        <p class="asset-note">Workflow: 1) Click “Create a new GPT” and paste the instructions below. 2) Go to the Configure tab, upload the Trimble SOP into Knowledge, and disable Canvas + Image generation. 3) Save/share to your org and test by asking “How do I collect field data with the TDC600?”</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="gpt-vista">System instructions: You are the UC Merced Field SOP Companion. Answer questions strictly using the uploaded Standard Operating Procedures (starting with the Trimble TDC600) and flag any missing steps.

Knowledge pack (Configure → Knowledge): Trimble TDC600 SOP DOCX plus any future equipment SOPs.

Capabilities: Enable Browse + Code Interpreter for weather lookups + quick calcs. Disable Canvas and Image generation.

Behavior requirements:
  • Begin each response with a short summary, then cite SOP section headings.
  • If the SOP lacks an answer, say so and list the required info to proceed.
  • Provide step-by-step checklists for field tasks and remind users about PPE + data logging.
  • Offer download links to referenced SOPs when available.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy GPT instructions" data-copy-target="gpt-vista">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <button type="button" class="close-section-btn" data-section="gpts">Close GPTs section</button>
      </div>
    </div>
  </div>

  <div class="feature-section" id="memory">
    <button type="button" class="example-toggle" id="toggle-memory" aria-expanded="false" aria-controls="content-memory">
      Memory
    </button>
    <div id="content-memory" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-memory">
      <div class="example-content-inner">
        <p><strong>Memory</strong> lets ChatGPT remember helpful facts from your chats so you don’t have to repeat yourself. You can explicitly tell it, “Remember this,” or let it pick up consistent preferences (tone, report format, campus context) on its own.</p>
        <p>Control lives under <strong>Settings → Personalization → Memory</strong>: view or delete individual memories, clear everything, or turn the feature off entirely. For one-off conversations where you don’t want anything saved, start a temporary chat.</p>
        <p>Pro tip: pair memory with Custom Instructions. Use memory for living facts (“UC Merced’s VISTA team runs field days every May”) and leave timeless guidance (“Always format agendas with bullets”) in Custom Instructions.</p>

        <h4>Sample Prompt – Capture a UC Merced Detail</h4>
        <p>Use explicit commands when you want ChatGPT to store something.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="memory-remember">Please remember that UC Merced’s Sustainable Ag field office prefers summaries with three action items and that the 2025 Field Day happens on May 16 at the Experimental Farm.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="memory-remember">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <h4>Sample Prompt – Preview What It Knows</h4>
        <p>Ask for a recap to verify memories or tailor future requests.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="memory-recap">Can you review our previous conversations and identify my writing/communication style and outline it for me.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="memory-recap">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <p><strong>Follow-up Prompt</strong></p>
        <div class="copyable-snippet" markdown="0">
          <pre id="memory-recap-followup">Thanks for the style summary. Using that voice, draft an invitation email for our UC Merced training session on using GPT and AI. Keep it friendly, add a short agenda, and call out next Tuesday at noon in SE1 130.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="memory-recap-followup">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <p>If you change your mind, just say “Forget that detail about Field Day” (or clear it in Manage Memory). ChatGPT’s memories aren’t tied to a single chat, so deletions must happen via the memory list, not by deleting the conversation.</p>
        <button type="button" class="close-section-btn" data-section="memory">Close Memory section</button>
      </div>
    </div>
  </div>

  <div class="feature-section" id="projects">
    <button type="button" class="example-toggle" id="toggle-projects" aria-expanded="false" aria-controls="content-projects">
      Projects
    </button>
    <div id="content-projects" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-projects">
      <div class="example-content-inner">
        <p><strong>Projects</strong> are smart workspaces where chats, files, memory, and instructions live together so ChatGPT stays anchored to a single effort (research sprint, launch plan, class notes, etc.).</p>
        <p>Create one by clicking <strong>New project</strong> in ChatGPT’s sidebar: name it, pick an icon, then drop in files (PDFs, spreadsheets, images) and project-specific instructions. Chats inside the project automatically inherit that context and project memory, so you can hop between devices without losing the plot.</p>
        <p>Need to collaborate? Use the <strong>Share</strong> button to invite teammates (chat or edit access) or generate a workspace link—perfect for UC Merced labs coordinating weekly reports. Learn more in the <a href="https://help.openai.com/en/articles/10169521-projects-in-chatgpt" target="_blank" rel="noopener">Projects in ChatGPT guide</a>.</p>

        <h4>Quick Setup Checklist</h4>
        <ol>
          <li>Click <strong>New project</strong>, give it a descriptive name (e.g., “Delta Allocations Watch”), and choose an icon/color.</li>
          <li>Upload reference files (policies, datasets, SOPs). Projects for Free/Plus allow up to 5/25 files respectively.</li>
          <li>Add project instructions via the menu → “Project instructions” (tone, format, intake questions).</li>
          <li>Decide on memory mode: default (can reference outside chats) or project-only (keeps everything locked to this workspace).</li>
          <li>Share with teammates (optional) and set access (Chat vs Edit).</li>
        </ol>

        <h4>Sample Prompt – Yosemite Lake Bathymetry Brief</h4>
        <p>Use this inside a fresh project to lock in the goal, gear, and cadence.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="project-kickoff">We’re launching a “Yosemite Lake Bathymetry” project. Goal: produce a seasonal subsurface depth map for the reservoir to support dredging plans.

Context files (to be uploaded next): sonar-logs-2024.csv, gps-tracks.gpx, equipment-checklist.pdf.

Inside this project, draft a kickoff memo that includes:
  • Mission statement + success metrics (target grid spacing, seasonal cadence)
  • Required equipment (Trimble TDC600, inflatable skiff, dual-frequency sonar)
  • 6-week field/testing timeline with milestones
  • Project instruction suggestions I can paste into the Project Instructions panel (tone, intake questions, required outputs)

Return the memo in Markdown so I can copy/paste it into the project files.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="project-kickoff">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <h4>Sample Prompt – Branch & Brief</h4>
        <p>Great for recurring workstreams where you need a fresh angle without losing history.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="project-branch">Branch this chat and draft a Monday status brief that pulls updates from our last three conversations plus the “bathymetry-log.md” file. Include sections for Survey Coverage, Equipment Issues, Data Gaps, and Next Transects. Mention who ran each transect (by initials) so the crew can follow up.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy prompt" data-copy-target="project-branch">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <p><em>Tip:</em> moving an existing chat into a project inherits the instructions/files instantly, so your old brainstorming thread can continue with the new context. Use project-only memory for sensitive collaborations where you don’t want cross-project bleed-through.</p>
        <button type="button" class="close-section-btn" data-section="projects">Close Projects section</button>
      </div>
    </div>
  </div>

  <div class="feature-section" id="scheduled-tasks">
    <button type="button" class="example-toggle" id="toggle-scheduled-tasks" aria-expanded="false" aria-controls="content-scheduled-tasks">
      Scheduled Tasks
    </button>
    <div id="content-scheduled-tasks" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-scheduled-tasks">
      <div class="example-content-inner">
        <p><strong>Tasks</strong> let ChatGPT run automated prompts on your schedule—perfect for daily briefings, reminders, or recurring coaching check-ins even when you’re offline.</p>
        <p>Just ask “Create a task that…,” then confirm the time or trigger (daily at 4 PM, one-time on March 13, API callback, etc.). You’ll get a confirmation card plus push/email notifications when each run finishes.</p>
        <p><a href="https://chatgpt.com/schedules" target="_blank" rel="noopener">Manage tasks</a> or open <strong>Settings → Notifications → Manage tasks</strong> (Web) to pause, edit, or delete. Limit: 10 active tasks per account. Tasks currently exclude voice chats, file uploads, and GPTs.</p>

        <h4>Sample Task – AES Site QA Sweep</h4>
        <p>Stay ahead of broken links or typos across aes.ucmerced.edu without manually spot-checking every page.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="task-aes">Create a recurring task called "AES Site QA Sweep" to run every Monday at 6 AM PT.
Each run, crawl every public page on https://aes.ucmerced.edu to check for:
Broken or redirected links
Spelling and grammar mistakes
Missing files or broken images
4xx or 5xx HTTP status codes
Return a Markdown table listing each issue with its URL, Problem Type, Suggested Fix, and Priority, then end with a "Top Fixes" list highlighting the three most urgent items.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy task prompt" data-copy-target="task-aes">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <h4>Sample Task – California Reservoir Snapshot</h4>
        <p>Automate a statewide water-level briefing.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="task-brief">Create a recurring task called "Reservoir Watch" that runs every Monday at 7 AM PT.
Each run, pull the latest public data on the following major California dams: Trinity, Shasta, Oroville, Folsom, New Melones, San Luis, Don Pedro, Millerton, Pine Flat, and Isabella.
Summarize the following for each dam:
Current storage percentage
Week-over-week change in storage
Any current curtailment advisories
Finally, send me a notification containing the complete Markdown report and the source links used to gather the data.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy task prompt" data-copy-target="task-brief">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>
        <p><em>Tip:</em> for mobile push notifications, create the task on iOS/Android first so the app can request notification permissions. For more details, see the Tasks docs inside Settings → Notifications.</p>
        <button type="button" class="close-section-btn" data-section="scheduled-tasks">Close Scheduled Tasks section</button>
      </div>
    </div>
  </div>

  <div class="feature-section" id="custom-instructions">
    <button type="button" class="example-toggle" id="toggle-custom-instructions" aria-expanded="false" aria-controls="content-custom-instructions">
      Custom Instructions
    </button>
    <div id="content-custom-instructions" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-custom-instructions">
      <div class="example-content-inner">
        <p><strong>Custom instructions</strong> let you store personal context and response preferences directly inside ChatGPT. Once saved, GPT reads them before every reply so you can skip re-explaining your goals or tone.</p>
        <p>Use it to steer style choices—for example, tell ChatGPT to avoid em dashes or certain filler phrases, and every future answer will follow your preferred voice automatically.</p>
        <p>These are the custom instructions that I use in my GPT feel free to use them outright or tweak the tone to match your own workflow. To edit your custom instructions, open <a href="https://chatgpt.com/schedules#settings/Personalization" target="_blank" rel="noopener">chatgpt.com/schedules#settings/Personalization</a>.</p>
        <div class="copyable-snippet" markdown="0">
          <pre id="custom-style">Write like a human. Keep it professional but conversational. Don't use em dashes or buzzwords like "streamlined." Avoid sounding like a press release. Be clear, direct, and natural, like you're writing to a smart friend.</pre>
          <button type="button" class="copy-snippet-btn" aria-label="Copy custom instruction example" data-copy-target="custom-style">
            <span class="copy-snippet-icon" aria-hidden="true">📋</span>
          </button>
        </div>

        <button type="button" class="close-section-btn" data-section="custom-instructions">Close Custom Instructions section</button>
      </div>
    </div>
  </div>

  <div class="feature-section" id="atlas">
    <button type="button" class="example-toggle" id="toggle-atlas" aria-expanded="false" aria-controls="content-atlas">
      Atlas (Upcoming Feature)
    </button>
    <div id="content-atlas" class="example-content" role="region" aria-hidden="true" aria-labelledby="toggle-atlas">
      <div class="example-content-inner">
        <p>Examples and prompts coming soon.</p>
        <button type="button" class="close-section-btn" data-section="atlas">Close Atlas section</button>
      </div>
    </div>
  </div>
</section>
