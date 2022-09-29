<template>
  <div class="mt-5 campaign-step-wizard">
    <div class="col-md-12 text-start">
      <div class="mt-2">
        <label class="form-label" for="mname">Middle name </label>
        <div>
          <input type="text" id="middleName" class="form-control" v-model="middleName" />
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6 text-start wizard-footer">
        <button class="btn btn-warning" id="goPrevious" @click="$emit('go-previous', this.index)">Previous</button>
      </div>
      <div class="col-md-6 text-end wizard-footer">
        <button class="btn btn-primary" id="submitFormStepTwo" @click="submitFormStepTwo()">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormStepTwo",
  components: {},
  props: {
    index: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      middleName: "",
    };
  },
  methods: {
    submitFormStepTwo() {
      console.log("FormStepTwo");
      this.emitter.emit("FormStepTwo-submitted", { middleName: this.middleName });
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
