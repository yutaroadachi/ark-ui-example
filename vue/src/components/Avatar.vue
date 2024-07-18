<script setup lang="ts">
import { Avatar } from "@ark-ui/vue";

type Props = {
  src: string;
  alt: string;
};

const props = defineProps<Props>();
</script>

<template>
  <Avatar.Root class="Avatar">
    <Avatar.Fallback class="Avatar__Fallback">Not Found</Avatar.Fallback>
    <Avatar.Image :src="props.src" :alt="props.alt" class="Avatar__Image" />
  </Avatar.Root>
</template>
