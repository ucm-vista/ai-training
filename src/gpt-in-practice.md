---
layout: page.njk
title: GPT in Practice
subtitle: Mastering ChatGPT's advanced capabilities
---

This guide covers ChatGPT's powerful features with practical examples and sample prompts you can use today.

---

Use the accordions below to jump into the tools that matter most—you can skim the overview, copy a prompt, and come back later as we fill out the remaining sections.

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
        <p>Examples and prompts coming soon.</p>
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
        <p>Examples and prompts coming soon.</p>
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
        <p>Examples and prompts coming soon.</p>
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
        <p>Examples and prompts coming soon.</p>
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
        <p>Examples and prompts coming soon.</p>
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
        <p>Examples and prompts coming soon.</p>
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
        <p>Examples and prompts coming soon.</p>
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
