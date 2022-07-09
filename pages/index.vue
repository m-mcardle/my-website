<template>
  <div class="main bg-black text-white h-screen">
    <div class="main w-full flex flex-row">
      <div class="intro flex flex-col p-16 ml-0 mr-auto">
        <div class="greeting flex flex-row py-8">
          <h2>
            Hi there!&nbsp;
          </h2>
          <div class="wave">
            <h2>👋</h2>
          </div>
        </div>
        <h3>My name is</h3>
        <h1>Matt McArdle</h1>
        <hr>
        <p>Software Engineer / Student</p>
      </div>
      <div class="image p-16 ml-auto mr-0">
        <img class="w-64 h-64" alt="Matt McArdle" src="~/assets/images/MatthewMcArdleIcon.jpg">
        <div class="contact-info flex flex-row my-5">
          <LinkedinBoxFill class="w-8 h-8 fill-[#0072b1] bg-white" />
          <MailFill class="w-8 h-8 fill-black bg-white" />
          <PhoneFill class="w-8 h-8 fill-black bg-white" />
        </div>
      </div>
    </div>
    <div class="bottom-0 absolute p-16 pb-0 w-full">
      <h3>Come read about my <b>skills</b>, <b>experiences</b>, and <b>interests</b>!</h3>
      <hr>
      <div class="logo-images flex flex-row justify-between">
        <img class="w-32 h-32" alt="University of Guelph Logo" src="~/assets/images/UoG-Logo.jpeg">
        <NuxtLink to="/Magnet" class="magnet-link shadow hover:shadow-lg hover:shadow-blue/90 shadow-blue/50">
          <img class="w-32 h-32" alt="Magnet Forensics Logo" src="~/assets/images/Magnet-Logo.png">
        </NuxtLink>
        <NuxtLink to="/Vidyard" class="vidyard-link shadow hover:shadow-lg hover:shadow-green-400/90 shadow-green-400/50">
          <img class="w-32 h-32" alt="Vidyard Logo" src="~/assets/images/Vidyard-Logo.png">
        </NuxtLink>
      </div>
      <div class="w-full">
        <ChevronDownSolid class="scroll-icon w-32 h-32 mx-auto" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import { ChevronDownSolid } from 'vue-icon-packs/hi'
// @ts-ignore
import { LinkedinBoxFill, MailFill, PhoneFill } from 'vue-icon-packs/ri'

export default Vue.extend({
  name: 'IndexPage',

  components: {
    ChevronDownSolid,
    LinkedinBoxFill,
    MailFill,
    PhoneFill
  }
})
</script>

<style>
  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }

  hr {
    border-color: #00B9E1;
    margin: 8px 0;
  }

  img {
    background-color: white;
  }

  @keyframes waving {
    0% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(-20deg);
    }
  }

  @keyframes blink {
    0% {
      opacity: 0%;
    }
    50% {
      opacity: 100%;
    }
    100% {
      opacity: 0%;
    }
  }

  .wave {
    animation: waving 1.5s infinite linear;
  }

  .scroll-icon {
    animation: blink 2s infinite linear;
  }
</style>
