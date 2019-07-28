# <a href="https://dreamli1314.github.io/angboot/"><img width="60px" align="center" src="https://raw.githubusercontent.com/DreamLi1314/angboot/master/web/src/favicon.ico" alt="icon"/></a> [angboot](https://dreamli1314.github.io/angboot/) 
[![Build Status](https://travis-ci.org/DreamLi1314/angboot.svg?branch=master)](https://travis-ci.org/DreamLi1314/angboot)
[![Gitter](https://badges.gitter.im/Angboot/Angboot.svg)](https://gitter.im/Angboot/Angboot?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![codecov](https://codecov.io/gh/DreamLi1314/angboot/branch/master/graph/badge.svg)](https://codecov.io/gh/DreamLi1314/angboot)
![GitHub release](https://img.shields.io/github/release-pre/dreamli1314/angboot)

## 1. Prerequisites
You should have installed the following software and configure the corresponding environment variables:

* JDK: version >= 1.8

## 2. Technical selection

* Java: Spring Boot + SpringSecurity + Mybatis + SSO(CAS)
* web: Angular7 + Bootstrap + SCSS
* Server: Tomcat
* Database: H2
* Project Management Tools: Gradle
* CI Tools: [Travis](https://travis-ci.org/DreamLi1314/angboot)(Default), Jenkins
* Cache: Map(Support Redis, Ehcache etc.)

## 3. Run application
> execute follow command for install dependencies in your terminal, Note: **just first**.
```
gradlew[.bat] build
```
> execute follow command for start up application
```
gradlew[.bat] server
```

## 4. Getting help
To see [User Manual](https://dreamli1314.github.io/angboot/).

## 5. License
AngBoot is Open Source software released under the Apache 2.0 license.
