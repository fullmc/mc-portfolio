<script setup lang='ts'>
import { cn } from '@/lib/utils'

interface AnimatedGradientText {
  class?: string
}

const props = defineProps<AnimatedGradientText>()

const className = cn(
  'flex max-w-fit flex-row items-center justify-center py-1.5 text-sm font-medium [--bg-size:300%]',
  props.class,
)
</script>

<template>
  <div :class="className">
    <div
      class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#E87B35] via-[#C54269] to-[#E87B35] bg-[length:var(--bg-size)_100%] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
    />

    <slot />
  </div>
</template>


