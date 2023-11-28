---
layout: post
title: Diffusion Models for Drug Design
description: Accelerating structure-based drug design with diffusion models.
---
<!-- description: Accelerating molecular diffusion models with learned protein structure representations.  -->

<!-- # Overview -->
<!-- Overview
======== -->
Deep generative models are an attractive prospect for accelerating structure-based drug design. As it is today, most structure-based drug discovery campaigns involve searching a large chemical space and evaluating many molecules for their potential as a drug. This process is expensive, time-consuming, and inefficient. The most accurate methods of evlauting binding affinity, such as physical experiments or detailed physics-based simulations, are far too slow and expensive to screen large chemical spaces. On the other hand, faster methods such as molecular docking are not accurate enough, and must be supplemented with extensive physical experimentation. The core value proposition of generative models is that they could be used to completely bypass the need to *search* chemical space. Instead, we could directly *generate* the molecules that will bind to a given protein. That is, if the generative models work well enough. The majority of my PhD research is focused on improving the quality of generative models for structure-based drug design. Specifically, I'm intersted in developing diffusion and diffusion-like generative models for molecular structures.

<!-- # Diffusion Models

Diffusion models are a powerful class of deep generative model which currently achieve state of the art performance in multiple domains. Although they were originally developed for image generation, recent work has shown that they can be adapted successfully for generating 3D molecules.  -->

<!-- Diffusion models can be viewed as models that learn a transport map which can transport samples from one probability distribution to samples from a different probability distribution. At a high level, rather than pre  -->

<!-- By conditioning the generation process on a protein structure, we can generate molecules that are predicted to bind to the protein.  -->


# Keypoint Diffusion
<div style="text-align:center">
  <video controls autoplay loop style="width:70%">
    <source src="/assets/videos/kp_diff.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

Keypoint diffusion was my first project working with diffusion models for molecules. It was accepted as a spotlight paper at the NeurIPS 2023 Generative AI and Biology Workshop. You can read the paper [here](https://arxiv.org/abs/2311.13466). All code for the project as well as trained models for your use can be found in [this github repository](https://github.com/dunni3/keypoint-diffusion). 

Molecular diffusion models are prone to slow inference times. This is primarily due to two factors: (1) the computational demands of graph neural networks (GNNs) scales unfavorably with the graph size and (2) diffusion models rely on many forward passes to generate a single sample. Some rely on coarse-grained structures of protein representations to make training and inference feasible; however, such coarse-grained structures discard essential information regarding molecular interactions and consequently impair the quality of generated molecules.

This work proposes a new choice of molecular representation which simultaneously enjoys the expressiveness of all-atom representations and computational efficiency of coarse-grained representations. We propose a novel GNN architecture which is capable of learning compressed representations of molecular structure. By training our structure encoder end-to-end with a diffusion model, we show that we can accelerate inference times by 3x while maintaining comparable quality of generated molecules.