---
layout: post
title: CACHE Challenges
description: Large-Scale Virtual Screening with Open-Source Software
---

The [CACHE Challenges](https://cache-challenge.org/) are a series of challenges to test the performance of computational methods for finding small molecules that bind to a given protein target. CACHE stands for Critical Assessment of Computational Hit-finding Experiments. You can think of it as an analogue to the CASP challenges but for small molecule drug discovery. 

During my PhD I have participated in the first two challenges which targeted the [Parkinson's-associated LRRK2 protein](https://cache-challenge.org/challenges/predict-hits-for-the-wdr-domain-of-lrrk2) and the [SaRs-CoV-2 nsp13 protein](https://cache-challenge.org/challenges/finding-ligands-targeting-the-conserved-rna-binding-site-of-sars-cov-2-nsp13). My submissions for both challenges succesfully resulted in the identification of multiple novel, experimentally validated hit and potential hit compounds. 

For both challenges, my strategy was largely based on using [gnina](https://github.com/gnina/gnina), an open-source molecular docking program developed by the Koes lab which uses a deep-learning based scoring function. In this first challenge, I docked the entire MolPort database, approximately 7 million molecules into the target receptor. In the second challenge, I wanted to screen the Enamine REAL database, which contains 43 billion molecules. Since docking all 43 billion molecules is infeasible, I instead implemented an active learning strategy to intelligently search through the database for hit compounds. I only had to dock 600,000 molecules, and of the top ~50 that were tested, 5 were experimentally identified as potential hits.
