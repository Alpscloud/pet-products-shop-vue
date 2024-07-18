<script setup>
import CopyLinkIc from "../UI/icons/socials/CopyLinkIc.vue";
import FacebookIc from "../UI/icons/socials/FacebookIc.vue";
import TwitterIc from "../UI/icons/socials/TwitterIc.vue";
import WhatsAppIc from "../UI/icons/socials/WhatsAppIc.vue";
import ViberIc from "../UI/icons/socials/ViberIc.vue";
import DiscordIc from "../UI/icons/socials/DiscordIc.vue";

import SocialsLink from "../UI/SocialsLink.vue";
</script>

<template>
  <ul class="socials">
    <li>
      <SocialsLink href="#" title="Link">
        <CopyLinkIc />
      </SocialsLink>
    </li>
    <li>
      <SocialsLink href="#" title="Link">
        <FacebookIc />
      </SocialsLink>
    </li>
    <li>
      <SocialsLink href="#" title="Link">
        <TwitterIc />
      </SocialsLink>
    </li>
    <li>
      <SocialsLink href="#" title="Link">
        <WhatsAppIc />
      </SocialsLink>
    </li>
    <li>
      <SocialsLink href="#" title="Link">
        <ViberIc />
      </SocialsLink>
    </li>
    <li>
      <SocialsLink href="#" title="Link">
        <DiscordIc />
      </SocialsLink>
    </li>
  </ul>
</template>
