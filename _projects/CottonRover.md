---
layout: distill
title: Cotton Rover
description: 
img: assets/img/cottonRover.png
importance: 1
category: Ag-Robots
date: 2021-05-22
authors:
  - name: Mohamed Debbagh
    url: "mohas95@.github.io/"
    affiliations:
      name: McGill University
bibliography: 2018-12-22-distill.bib
toc:
  - name: Overview
  - name: The Challenge
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }
---

## Overview
The Cotton Rover (CR) is an autonomous robotic system specifically designed for the automation of cotton harvesting. The CR integrates several subsystems including a navigation system, cotton detection and mapping system, harvesting mechanism, and delivery system. The CR demonstrates the application of robotics in the context of agriculture contributes to advancements in automated precision agriculture technology.

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://mail93832.autodesk360.com/shares/public/SHd38bfQT1fb47330c99ef8447249f44dc17?mode=embed' width='1024' height='768' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'  frameborder='0'></iframe></div>

---

## The Challenge

Autonomous robots will harvest cotton on a brown 8’ x 8’ playing field with a brown, 4” tall border. The playing field has 6 rows, and each row contains 9 cotton plants. Each plant has one, two, or three bolls of cotton at heights between 7” and 11”, and each ripe boll contains between three and five distinct cotton balls. Robots score points by collecting cotton, mapping the location of “unripe” bolls of cotton, and “delivering” the cotton to a corner of the playing field.

### The Playing Field:

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://mail93832.autodesk360.com/shares/public/SHd38bfQT1fb47330c9992aef2be1efcc409?mode=embed' width='1024' height='768' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'  frameborder='0'></iframe></div>
<br/>
