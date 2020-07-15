## Overview

The idea behind this project is to automate the process of assignment submission and grading by developing an online portal that enables the course instructors(professors/ TAs) to offer auto-graded programming
assignments to their students over the Web. This platform will allow the instructors to give instant, automated feedback on the code submitted by the students without downloading or running any submission locally.

## Features

 - To provide a complete solution for the pre-existing system of assignment evaluation by automating the submissions and grading of programming assignments by running everything in place on cloud servers.
 - To enable the instructors to setup online assignments, add coding problems to it with the custom made test-cases for better evaluation.
 - To allow the students to enroll into these assignments, write the code directly in the browser using our cloud IDE, run/submit the code and see the evaluated result in realtime.
 - As students may intent to copy the code from their friends or from online sources, so each submission will be checked for cheat detection using [Stanford's MOSS](http://theory.stanford.edu/~aiken/moss/) (Measure of Software Similarity) algorithm.
 - Instructors can also watch all the submissions in realtime on their dashboard.
 - At the end of the assignment deadline, a detailed feedback report will be shared to the course instructor containing the statistical plot of the performance of students, score achieved by individual, and also the execution time/space of each submission.

## Technology Stack
- NodeJS
- VueJS
- MongoDB Atlas/ Redis
- Docker
- AWS S3

## System Architecture
myOJ will be developed following a microservice based architecture which means that the overall system will be broken down into multiple independent services each of which can be developed, tested, and deployed without any dependency on the other.

<p align="center"> 
<img src="https://i.imgur.com/MWrhP1W.png" style="width: 80%; height: 70%">
</p>

**Note:**

This repository contains the code for the client app of the myOJ, and still in the development stage. This project has [RCE(Remote Code Execution)](https://github.com/sastava007/ROC-Pipeline) service as it's major dependency which will be used to executed the code submitted by students in an isolated environment with the help of Docker containers.
