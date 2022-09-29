<template>
  <div class="mt-5 campaign-step-wizard">
    <div class="col-md-12 text-start">
      <div class="form-group my-2" v-bind:class="{ 'has-warning': attemptSubmit && missingfirstName }">
        <label class="required-label form-label" for="fname">First name</label>
        <input id="firstName" class="form-control form-control-warning" type="text" v-model="firstName" />
        <div class="form-control-feedback" v-if="attemptSubmit && missingfirstName">This field is required.</div>
      </div>
      <!-- /form-group -->
    </div>
    <div class="col-md-12 text-start mt-4">
      <div class="form-group my-2" v-bind:class="{ 'has-warning': attemptSubmit && missinglastName }">
        <label class="required-label form-label" for="lname">Last name</label>
        <input id="lastName" class="form-control form-control-warning" type="text" v-model="lastName" />
        <div class="form-control-feedback" v-if="attemptSubmit && missinglastName">This field is required.</div>
      </div>
      <!-- /form-group -->
    </div>
    <div class="row mt-4">
      <div class="col-md-12 text-end wizard-footer">
        <button class="btn btn-primary" id="submitFormStepOne" @click="submitFormStepOne()">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormStepOne",
  components: {},
  props: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      attemptSubmit: false,
    };
  },
  computed: {
    missingfirstName: function () {
      return this.firstName === "";
    },
    missinglastName: function () {
      return this.lastName === "";
    },
  },
  methods: {
    submitFormStepOne() {
      this.attemptSubmit = true;
      if (!this.missingfirstName && !this.missinglastName) {
        console.log("submitFormStepOne", this.missingfirstName);
        this.emitter.emit("FormStepOne-submitted", { firstName: this.firstName, lastName: this.lastName });
      }
    },
  },
  mounted() {},
};
</script>
<style scoped></style>
