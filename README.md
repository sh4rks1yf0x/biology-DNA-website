# DNA Lab — From Code to Cells

A mobile-first, four-language interactive Biol 100 project by Ryan Hsu (Yu-Cheng Hsu), connecting DNA → mRNA → amino acids with cell growth safeguards.

**Live project:** https://ryan-dna-mutation-lab.indigo-okapi-8813.chatgpt.site

The hosted link retains its existing access settings. Hosting your own copy on GitHub Pages creates a separate website.

## Features

- Animated DNA introduction and responsive typography.
- Reference DNA displayed as numbered codon cards.
- Create your DNA: enter 18 A/T/C/G bases and compare coding DNA, mRNA and amino acids. Spaces and lowercase input are accepted.
- Start-loss, early-stop and stop-loss explanations without predicting real protein function.
- Independent cell-safeguard illustration based mainly on the course lectures.
- English, Traditional Chinese, Spanish and Japanese; reduced-motion support.
- Clickable Sources: four original lecture PDFs and external educational/YouTube links.

## Run locally

No dependency installation or build is needed. From the project folder run:

```bash
python3 -m http.server 8000
```

On Windows you can use `py -m http.server 8000`. Open http://localhost:8000/dist/ in a browser. VS Code Live Server can also serve `dist/index.html`.

Run the biology and input-validation checks with Node.js installed:

```bash
npm test
```

## Upload to GitHub / 上傳 GitHub

1. Unzip this archive. / 先解壓縮。
2. Create a GitHub repository and choose **Add file → Upload files**.
3. Upload the contents of the `dna-lab-github` folder, including `dist`, `tests`, `README.md`, `package.json` and `index.html`. Upload the files and folders, rather than the ZIP itself.
4. Commit the uploaded files. The code is now on GitHub.
5. Optional website hosting: in the repository, open **Settings → Pages**, choose **Deploy from a branch**, select your branch and **/(root)**, then save. The root `index.html` opens the app in `dist/`.

The four course PDFs are included so source links work after upload. They are instructor-provided teaching materials, separate from the application code; obtain the appropriate permission before publishing those materials in a public repository. You can keep the repository private for code storage.

## Files

- `index.html`: entry point for root-based static hosting.
- `dist/index.html`: application structure and source links.
- `dist/styles.css`, `dist/medical.css`: layout, mobile styles and colors.
- `dist/app.mjs`: language controls, custom DNA input and cell interaction.
- `dist/core.mjs`: genetic code, translation and sequence validation.
- `dist/story.mjs`: animated DNA introduction and codon cards.
- `dist/course.mjs`, `dist/languages.mjs`: lecture content and translations.
- `dist/assets/dna-logo.png`: supplied DNA logo.
- `dist/sources/`: four original lecture PDFs.
- `tests/`: genetic-code and input-validation checks.

## Sources

| Course material | File | Referenced PDF pages |
| --- | --- | --- |
| Class #6 — Genes, protein function & cancer | [Lecture PDF](dist/sources/class-06-genes-and-cancer.pdf) | 11–13, 20–26 |
| Mutation lecture — Mystery Gene | [Lecture PDF](dist/sources/mutation-lecture.pdf) | 5–20 |
| Class #08 — Information flow & DNA replication | [Lecture PDF](dist/sources/class-08-information-flow.pdf) | 9, 13–20 |
| Class #09 — Mutagens & inheriting mutations | [Lecture PDF](dist/sources/class-09-mutations-and-inheritance.pdf) | 7–8, 22–28 |

- [Class video: transcription and translation](https://www.youtube.com/watch?v=nHM4UUVHPQM)
- [NHGRI animation collection](https://www.genome.gov/about-genomics/teaching-tools/Transcription-Translation)
- [National Cancer Institute: Genetics of Cancer](https://www.cancer.gov/about-cancer/causes-prevention/genetics)
- [NHGRI: Mutation](https://www.genome.gov/genetics-glossary/Mutation)
- [NHGRI: Missense Mutation](https://www.genome.gov/genetics-glossary/Missense-Mutation)
- [NHGRI: Nonsense Mutation](https://www.genome.gov/genetics-glossary/Nonsense-Mutation)
- [NCBI: Standard Genetic Code](https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi#SG1)

## Scientific scope

The invented 18-base coding DNA is 5′-ATG GAA TTT CGA TGG TAA-3′. The reference decodes to Met–Glu–Phe–Arg–Trp followed by stop. The model compares substitutions in a fixed reading frame; it does not model gene expression, splicing, folding, clinical outcomes or cancer risk. Cell illustrations are independent and qualitative.

Application input is processed in the browser. The application has no database, user account system or analytics. Optional Google Fonts use system fallbacks.
