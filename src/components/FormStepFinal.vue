<template>
  <div class="mt-5 campaign-step-wizard">
    <div class="col-md-12 text-start">
      <div class="col-md-12 text-start mt-4">
        <div class="form-group my-2" v-bind:class="{ 'has-warning': attemptSubmit && missingdob }">
          <label class="required-label form-label" for="name">Date of birth</label>
          <input type="date" id="dob" class="form-control" v-model="dob" />
          <div class="form-control-feedback" v-if="attemptSubmit && missingdob">This field is required.</div>
        </div>
        <!-- /form-group -->
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6 text-start wizard-footer">
        <button class="btn btn-warning" id="goPrevious" @click="$emit('go-previous', this.index)">Previous</button>
      </div>
      <div class="col-md-6 text-end wizard-footer">
        <button class="btn btn-success" id="submitFormStepFinal" @click="submitFormStepFinal()">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormStepFinal",
  components: {},
  props: {
    index: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      dob: "",
      attemptSubmit: false,
    };
  },
  computed: {
    missingdob: function () {
      return this.dob === "";
    },
  },
  methods: {
    submitFormStepFinal() {
      this.attemptSubmit = true;
      if (!this.missingdob) {
        console.log("FormStepFinal");
        this.emitter.emit("FormStepFinal", { dob: this.dob });
      }
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
