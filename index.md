---
layout: default
title: Home
---

<script src="{{ '/assets/js/carousel.js' | relative_url }}"></script>
<script src="{{ '/assets/js/whatwedo.js' | relative_url }}"></script>
<section  id="home" class="hero">

  <div class="hero-inner">

    <div class="logo">
      <span class="mark">E</span>idona <span class="bio">Bio</span>
    </div>

    <p class="tagline">
      A multimodal model of biological response
    </p>
    <p class="hero-text">
      Fill in the experiments nobody ran.
    </p>

  </div>
</section>

<div class="hero-actions">
  <a class="hero-action primary" href="mailto:contact@eidona.bio">
    Talk to us about a program →
  </a>

  <a class="hero-action secondary" href="https://eidonabio.substack.com/">
    Join the discussion →
  </a>
</div>

<section id="approach" class="section approach">

  <h2>Our approach</h2>

  <div class="carousel" data-carousel>
    <button class="carousel-btn prev" aria-label="Previous slide">‹</button>
    <div class="carousel-track">
      <div class="carousel-slide">
        <img src="{{ '/assets/images/carousel-slide-1.svg' | relative_url }}" alt="">
      </div>
      <div class="carousel-slide">
        <img src="{{ '/assets/images/carousel-slide-2.svg' | relative_url }}" alt="">
      </div>
      <div class="carousel-slide">
        <img src="{{ '/assets/images/carousel-slide-3.svg' | relative_url }}" alt="">
      </div>
      <div class="carousel-slide">
        <img src="{{ '/assets/images/carousel-slide-4.svg' | relative_url }}" alt="">
      </div>
      <div class="carousel-slide">
        <img src="{{ '/assets/images/carousel-slide-5.svg' | relative_url }}" alt="">
      </div>
    </div>
    <div class="carousel-dots"></div>
    <button class="carousel-btn next" type="button">›</button>
  </div>

</section>

<section class="section whatwedo">

  <h2>What we do</h2>

  <div class="whatwedo-grid">
  <details>
    <summary>
      Focus on biological questions around preclinical programs.
    </summary>

    <p>We combine public perturbational data with a bounded amount of program-specific data to understand what the existing evidence supports, where uncertainty remains, and what information would be most useful next.
    </p>

  </details>
  <details>
    <summary>
      Characterize response across assays and biological systems
    </summary>
    <p>Two assets can look similar in one experiment and behave very differently elsewhere. We model how responses change across readouts, perturbations and biological systems to identify where an asset looks robust — and where its behavior starts to diverge.
    </p>
  </details>
  <details>
    <summary>
      Understand which uncertainty matters
    </summary>
    <p>
      Not every missing experiment is equally informative. We separate what is supported by existing evidence from what remains uncertain, and use that structure to identify the questions most likely to change the interpretation of a program.
    </p>
  </details>
  <details>
    <summary>
      Test whether biology transfers
    </summary>
    <p>
      A result in a paper, another model, or another assay may or may not hold in your system. We use broad public perturbational evidence and customer-specific calibration data to test how far that biology appears to transfer before larger experimental commitments are made.
    </p>
  </details>
  <details>
    <summary>
      Build a dedicated, customer-isolated environment
    </summary>
    <p>We adapt Eidona to your program inside a separate environment. Your data and customer-derived artifacts stay there — they are not pooled, transferred back to Eidona, or used for other customers.
    </p>
  </details>

  </div>
  <br/>
<p><strong>Start with one program, one question, and the data you already have.</strong><br/>
We can work from a single campaign, assay or bounded dataset rather than requiring a full data integration project.
</p>

  <p>
    We share the scientific questions, results and open problems shaping Eidona as we build.
    <br/>
    <a href="https://eidonabio.substack.com/">Join the discussion →</a>
  </p>

</section>

<section id="founders" class="section founders">

  <h2>Founders</h2>

  <div class="founders-grid">

    <div class="founder">
      <img  alt="Etienne Dumoulin" class="profile-img"
            src="{{ '/assets/images/etienne-dumoulin-profile.jpg' | relative_url }}">
      <h3>Etienne Dumoulin</h3>
      <p>
        Machine learning and computational drug discovery
      </p>
      <p>
        <a href="https://biounfold.ai/"
          target="_blank"
          rel="noopener noreferrer">
          BioUnfold
        </a>
        ·
        <a href="https://www.linkedin.com/in/%C3%A9tienne-dumoulin-624a9624/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </div>

    <div class="founder">
      <img alt="Erik Martin" class="profile-img"
           src="{{ '/assets/images/erik-martin-profile.jpg' | relative_url }}">
      <h3>Erik Martin</h3>
      <p>
        Chemoproteomics and mechanism biology
      </p>
      <br>
      <p>
        <a href="https://tinyurl.com/erikmartin-google-scholar"
          target="_blank"
          rel="noopener noreferrer">
          Google Scholar
        </a>
        ·
        <a href="https://www.linkedin.com/in/erik-martin-5bb49234/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </div>

  </div>

</section>

<section id="contact" class="section contact">

  <h2>Contact</h2>

  <p>
    <a href="mailto:contact@eidona.bio">
      contact@eidona.bio
    </a>
  </p>

</section>
