---
layout: post
title: "Running VS code on a shared cluster using slurm."
---

# Introduction

VSCode has a remote development extension which allows you do development on a remote system through VSCode running on your local computer. This is super useful for reasons I won't enumerate. You may want to use VSCode when doing research/coding directly on a shared computational cluster. However, this usually causes issues because of how shared clusters are usually configured and how the VS code remote extension actually works under the hood.


## How VS code remote extension works (at a very high level)
When you start the remote extension in VS code, you are prompted to provide the address of a remote machine. VScode will connect to this host via SSH, and install/start a server as well as several background processes on the remote machine. VS code uses this remote server to monitor/interact with the remote filesystem, execute commands, etc.

## How shared computational clusters are configured (at a very high level)

Now I'll talk about how clusters usually have "head nodes" or "login nodes". This node is only intended to serve as an access point; the head node has limited computational resources dedicated to it. Ideally, you should only be using the head node to do things like viewing/editing files. If you need to do anything remotely computationally intensive, you should request compute nodes with appropriate computational resources, and do your computing on those compute nodes. If you use up too much CPU/memory on the head node, you can cause the head node to crash / you can make it very difficult/impossible for other people to get on the head node and do their work. This is not very nice.

## The incompatibility of VS code remote extension and clusters

So you open VS code on your local machine. The remote development extension asks you for the address of the remote machine that you would like to work on. The only way to access the cluster is through an address that points you to the head node. So you point the VS code remote extension to the head node. The VS code remote extension then installs and runs a server as well as several background processes *on the head node*. This is a problem. If too many people are doing this, or if the VS code remote server simply starts using too much computational resources, you can crash the head node.

The solution is to get VS code to run its server/background processes on compute nodes of your cluster as opposed to the head node. The point of the post is to outline how you can do this.


# Running VS code remote on a slurm job

Note that some of these instructions will be specific to the pitt CSB cluster

0. Install VS code and the remote SSH development extension
1. Place the following into your ssh config file:

```text
Host n??? g???
	User YOUR_CLUSTER_USERNAME
	IdentityFile YOUR_CLUSTER_SSH_KEY
	ProxyCommand ssh -t -W %h.csb.pitt.edu:%p cluster
```
2. Start an interactive job on the cluster having the appropriate computational resources. Make note of the node that your job is running on.
3. Open VS code, open the command palette (command+shift+p). Search for  "Remote-SSH: Connect to Host". Select this option
4. Type in the name of the node that your interactive job is running on. For example, if it is on node `g001`, that is all you have to type into the command palette.  
