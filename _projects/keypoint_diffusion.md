---
layout: post
title: Diffusion Models for Drug Design
description: Accelerating molecular diffusion models with learned protein structure representations. 
---

<!-- insert a video that is centered in the page and takes up 70% of the width -->
<div style="text-align:center">
  <video controls autoplay loop style="width:70%">
    <source src="/assets/videos/kp_diff.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

Diffusion models are a powerful class of deep generative model. Although they were originally developed for image generation, recent work has shown that they can be adapted successfully for generating 3D molecules. By conditioning the generation process on a protein structure, we can generate molecules that are predicted to bind to the protein. 

These molecular diffusion models are prone to slow inference times. This is primarily due to two factors: (1) the computational demands of graph neural networks (GNNs) scales unfavorably with the graph size and (2) diffusion models rely on many forward passes to generate a single sample. Some rely on coarse-grained structures of protein representations to make training and inference feasible; however, such coarse-grained structures discard essential information regarding molecular interactions and consequently impair the quality of generated molecules.

In this work, we propose a novel GNN architecture which is capable of learning compressed representations of molecular structure. By training our structure encoder end-to-end with a diffusion model, we show that we can accelerate inference times by 3x while maintaining comparable quality of generated molecules.