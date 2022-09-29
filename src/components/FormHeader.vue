<template>
  <div class="px-0 c-p d-inline-block" :class="[step.status === 'active' ? 'border-bottom b-color border-4' : '']">
    <div class="title mt-2 fs-5 wizard-header" v-if="step.status !== 'completed'">
      <h3 :class="[step.status === 'active' ? 'title-active-color' : 'title-color']">
        {{ step.title }}
      </h3>
    </div>
    <div class="title mt-2 fs-5 title-color-completed wizard-header" v-if="step.status === 'completed'">
      <h3>{{ step.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormHeader",
  props: {
    step: {
      type: Object,
      require: true,
    },
    index: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.wizard-header {
  cursor: pointer;
}
.title-color {
  color: #1f1f1f;
  opacity: 35%;
}

.title-active-color {
  color: #2081e2 !important;
}

.title-color-completed {
  color: #14a800 !important;
  opacity: 100%;
}

.step span {
  font: normal normal normal 13px/24px Inter;
}

.b-color {
  border-color: #2081e2 !important;
}
</style>
