:root{
    --ink:#1c130d;
    --ink-soft:#241a12;
    --amber-deep:#4a2412;
    --amber-mid:#8a4a1f;
    --cream:#f2e8d5;
    --cream-dim:#cabe9f;
    --brass:#c9a15a;
    --capo-red:#c1442e;
    --capo-red-bright:#e05a3f;
    --steel:#5a5044;
    --line: rgba(242,232,213,0.12);
    --radius: 10px;
    --font-display: "Fraunces", serif;
    --font-body: "Inter", sans-serif;
    --font-mono: "JetBrains Mono", monospace;
  }

  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  @media (prefers-reduced-motion: reduce){
    html{scroll-behavior:auto;}
    *{animation-duration:0.001ms !important; transition-duration:0.001ms !important;}
  }

  body{
    margin:0;
    background:var(--ink);
    color:var(--cream);
    font-family:var(--font-body);
    line-height:1.6;
    -webkit-font-smoothing:antialiased;
  }

  a{color:var(--brass);}
  a:focus-visible, button:focus-visible, select:focus-visible, input:focus-visible{
    outline:2px solid var(--capo-red-bright);
    outline-offset:3px;
  }

  h1,h2,h3{font-family:var(--font-display); margin:0 0 .4em; font-weight:600; color:var(--cream);}
  h1{font-weight:700;}
  .eyebrow{
    font-family:var(--font-mono);
    text-transform:uppercase;
    letter-spacing:.14em;
    font-size:.72rem;
    color:var(--brass);
    display:block;
    margin-bottom:.6em;
  }

  .wrap{max-width:1080px; margin:0 auto; padding:0 24px;}
  section{padding:88px 0;}
  section + section{border-top:1px solid var(--line);}

  /* NAV */
  header.site-nav{
    position:sticky; top:0; z-index:50;
    background:rgba(28,19,13,0.92);
    backdrop-filter:blur(8px);
    border-bottom:1px solid var(--line);
  }
  .nav-inner{
    max-width:1080px; margin:0 auto; padding:14px 24px;
    display:flex; align-items:center; justify-content:space-between;
    gap:16px; flex-wrap:wrap;
  }
  .brand{
    font-family:var(--font-mono); font-weight:600; font-size:.95rem;
    letter-spacing:.04em; color:var(--cream); text-decoration:none;
    display:flex; align-items:center; gap:8px;
  }
  .brand .dot{width:8px; height:8px; border-radius:50%; background:var(--capo-red-bright); display:inline-block;}
  nav.links{display:flex; gap:22px; flex-wrap:wrap;}
  nav.links a{
    color:var(--cream-dim); text-decoration:none; font-size:.85rem; font-weight:500;
    border-bottom:1px solid transparent; padding-bottom:2px;
  }
  nav.links a:hover{color:var(--cream); border-color:var(--brass);}

  /* HERO */
  .hero{
    padding:72px 0 96px;
    background:
      radial-gradient(120% 90% at 50% -10%, rgba(138,74,31,0.55), transparent 60%),
      linear-gradient(180deg, var(--ink) 0%, var(--ink-soft) 100%);
    border-top:none;
  }
  .hero-grid{
    display:grid; grid-template-columns: 1.1fr 1fr; gap:56px; align-items:center;
  }
  @media (max-width:860px){ .hero-grid{grid-template-columns:1fr;} }

  .hero h1{font-size:clamp(2.2rem, 4.4vw, 3.4rem); line-height:1.06; letter-spacing:-.01em;}
  .hero p.lede{font-size:1.08rem; color:var(--cream-dim); max-width:46ch;}
  .hero-ctas{display:flex; gap:12px; margin-top:28px; flex-wrap:wrap;}
  .btn{
    font-family:var(--font-body); font-weight:600; font-size:.9rem;
    padding:12px 20px; border-radius:999px; border:1px solid transparent;
    cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px;
    transition:transform .15s ease, background .15s ease;
  }
  .btn:hover{transform:translateY(-1px);}
  .btn-primary{background:var(--capo-red); color:var(--cream);}
  .btn-primary:hover{background:var(--capo-red-bright);}
  .btn-ghost{border-color:var(--line); color:var(--cream);}
  .btn-ghost:hover{border-color:var(--brass);}

  /* FRETBOARD WIDGET */
  .fret-widget{
    background:var(--ink-soft);
    border:1px solid var(--line);
    border-radius:16px;
    padding:22px;
  }
  .fret-widget .fw-label{
    font-family:var(--font-mono); font-size:.72rem; text-transform:uppercase;
    letter-spacing:.1em; color:var(--brass); margin-bottom:14px; display:block;
  }
  #fretboardSvg{width:100%; height:auto; display:block;}
  .fret-buttons{display:flex; gap:6px; margin-top:16px; flex-wrap:wrap;}
  .fret-buttons button{
    font-family:var(--font-mono); font-size:.8rem; font-weight:600;
    width:38px; height:38px; border-radius:8px; border:1px solid var(--line);
    background:transparent; color:var(--cream-dim); cursor:pointer;
    transition:all .15s ease;
  }
  .fret-buttons button:hover{border-color:var(--brass); color:var(--cream);}
  .fret-buttons button[aria-pressed="true"]{
    background:var(--capo-red); border-color:var(--capo-red); color:var(--cream);
  }
  .fw-readout{
    margin-top:16px; padding-top:16px; border-top:1px dashed var(--line);
    font-family:var(--font-mono); font-size:.85rem; color:var(--cream-dim);
  }
  .fw-readout strong{color:var(--brass); display:block; font-size:1.15rem; margin-bottom:2px; font-family:var(--font-body);}

  /* MODULE HEADER */
  .module-head{display:flex; align-items:baseline; gap:14px; margin-bottom:36px; flex-wrap:wrap;}
  .module-num{
    font-family:var(--font-mono); color:var(--capo-red-bright); font-size:1rem; font-weight:600;
  }
  .module-head h2{font-size:clamp(1.6rem,3vw,2.2rem);}
  .module-intro{color:var(--cream-dim); max-width:70ch; margin-bottom:40px;}

  /* CARDS */
  .card-grid{display:grid; grid-template-columns:repeat(3, 1fr); gap:18px;}
  @media (max-width:860px){ .card-grid{grid-template-columns:1fr 1fr;} }
  @media (max-width:600px){ .card-grid{grid-template-columns:1fr;} }
  .card{
    background:var(--ink-soft); border:1px solid var(--line); border-radius:var(--radius);
    padding:22px; transition:border-color .15s ease;
  }
  .card:hover{border-color:var(--brass);}
  .card h3{font-size:1.05rem; margin-bottom:.5em;}
  .card p{color:var(--cream-dim); font-size:.92rem; margin:0;}
  .card .tag{
    font-family:var(--font-mono); font-size:.68rem; text-transform:uppercase;
    letter-spacing:.08em; color:var(--brass); display:block; margin-bottom:10px;
  }

  /* TABLE */
  table{width:100%; border-collapse:collapse; font-size:.9rem;}
  caption{text-align:left; font-family:var(--font-mono); font-size:.72rem; color:var(--brass); text-transform:uppercase; letter-spacing:.08em; margin-bottom:10px;}
  th,td{text-align:left; padding:12px 14px; border-bottom:1px solid var(--line);}
  th{font-family:var(--font-mono); font-size:.72rem; text-transform:uppercase; letter-spacing:.06em; color:var(--cream-dim); font-weight:600;}
  td{color:var(--cream-dim);}
  td:first-child, th:first-child{color:var(--cream); font-weight:600;}
  .table-scroll{overflow-x:auto; border:1px solid var(--line); border-radius:var(--radius); padding:4px 4px 0;}
  .table-scroll table{margin-bottom:4px;}

  /* TIMELINE (legit sequence — application steps) */
  .timeline{list-style:none; margin:0; padding:0; counter-reset:step;}
  .timeline li{
    counter-increment:step;
    position:relative; padding:0 0 32px 52px; border-left:1px solid var(--line);
    margin-left:18px;
  }
  .timeline li:last-child{border-left-color:transparent; padding-bottom:0;}
  .timeline li::before{
    content:counter(step);
    position:absolute; left:-19px; top:0;
    width:36px; height:36px; border-radius:50%;
    background:var(--capo-red); color:var(--cream);
    font-family:var(--font-mono); font-weight:700; font-size:.9rem;
    display:flex; align-items:center; justify-content:center;
  }
  .timeline h3{font-size:1.02rem; margin-bottom:.3em;}
  .timeline p{color:var(--cream-dim); margin:0; max-width:62ch;}

  /* CALCULATOR */
  .calc{
    background:var(--ink-soft); border:1px solid var(--line); border-radius:16px;
    padding:28px; display:grid; grid-template-columns:1fr auto; gap:24px; align-items:end;
  }
  @media (max-width:700px){ .calc{grid-template-columns:1fr;} }
  .calc-controls{display:flex; gap:18px; flex-wrap:wrap;}
  .field{display:flex; flex-direction:column; gap:6px;}
  .field label{font-family:var(--font-mono); font-size:.7rem; text-transform:uppercase; letter-spacing:.08em; color:var(--brass);}
  select{
    background:var(--ink); color:var(--cream); border:1px solid var(--line);
    border-radius:8px; padding:10px 14px; font-family:var(--font-body); font-size:.95rem;
    min-width:140px;
  }
  .mode-toggle{display:flex; border:1px solid var(--line); border-radius:999px; overflow:hidden;}
  .mode-toggle button{
    background:transparent; border:none; color:var(--cream-dim); font-family:var(--font-mono);
    font-size:.72rem; padding:9px 14px; cursor:pointer; text-transform:uppercase; letter-spacing:.05em;
  }
  .mode-toggle button[aria-pressed="true"]{background:var(--capo-red); color:var(--cream);}
  .calc-result{
    text-align:right;
  }
  .calc-result .r-label{font-family:var(--font-mono); font-size:.7rem; text-transform:uppercase; letter-spacing:.08em; color:var(--brass); display:block;}
  .calc-result .r-value{font-family:var(--font-display); font-size:2.4rem; font-weight:700; color:var(--cream);}
  @media (max-width:700px){ .calc-result{text-align:left;} }

  /* VIDEO GRID */
  .video-grid{display:grid; grid-template-columns:repeat(2, 1fr); gap:22px;}
  @media (max-width:760px){ .video-grid{grid-template-columns:1fr;} }
  .video-card{
    background:var(--ink-soft); border:1px solid var(--line); border-radius:var(--radius);
    overflow:hidden;
  }
  .video-frame{position:relative; width:100%; padding-top:56.25%; background:#000;}
  .video-frame iframe{position:absolute; inset:0; width:100%; height:100%; border:0;}
  .video-meta{padding:16px 18px;}
  .video-meta .lvl{
    font-family:var(--font-mono); font-size:.68rem; text-transform:uppercase; letter-spacing:.08em;
    color:var(--brass); display:block; margin-bottom:6px;
  }
  .video-meta h3{font-size:.98rem; margin-bottom:.35em;}
  .video-meta p{color:var(--cream-dim); font-size:.85rem; margin:0;}
  .yt-fallback{
    display:inline-block; margin-top:12px; font-family:var(--font-mono); font-size:.72rem;
    text-transform:uppercase; letter-spacing:.06em; color:var(--brass); text-decoration:none;
    border-bottom:1px solid transparent;
  }
  .yt-fallback:hover{color:var(--capo-red-bright); border-color:var(--capo-red-bright);}

  /* SONG CASE STUDIES */
  .song-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:18px;}
  @media (max-width:760px){ .song-grid{grid-template-columns:1fr;} }
  .song-card{
    border:1px solid var(--line); border-radius:var(--radius); padding:22px;
    background:linear-gradient(180deg, var(--ink-soft), var(--ink));
  }
  .song-card .fret-tag{
    display:inline-block; font-family:var(--font-mono); font-size:.72rem; font-weight:700;
    color:var(--ink); background:var(--brass); padding:4px 10px; border-radius:999px; margin-bottom:10px;
  }
  .song-card h3{font-size:1.05rem;}
  .song-card .artist{color:var(--brass); font-size:.82rem; display:block; margin-bottom:10px; font-family:var(--font-mono);}
  .song-card p{color:var(--cream-dim); font-size:.9rem; margin:0;}

  /* TAKEAWAYS */
  .takeaways{list-style:none; margin:0; padding:0; display:grid; gap:16px;}
  .takeaways li{
    display:flex; gap:14px; align-items:flex-start;
    padding:18px 20px; border:1px solid var(--line); border-radius:var(--radius);
    background:var(--ink-soft);
  }
  .takeaways li::before{
    content:"♪"; color:var(--capo-red-bright); font-size:1.2rem; line-height:1.4; flex-shrink:0;
  }
  .takeaways p{margin:0; color:var(--cream-dim);}
  .takeaways strong{color:var(--cream);}

  footer{
    padding:48px 0; text-align:center; color:var(--cream-dim); font-size:.82rem;
    border-top:1px solid var(--line);
  }
  footer a{color:var(--brass);}
