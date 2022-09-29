<template>
  <section class="create-whitelist-campaign">
    <div class="container px-0">
      <div class="card card-area" v-if="!isFinalSubmitDone">
        <div class="card-body px-0">
          <div class="text-center card-title">
            <h1 id="formTitle">Multi Step Form</h1>
          </div>
          <div class="px-5">
            <div class="container border-bottom border-muted">
              <div class="row">
                <div class="col-md-3 px-0" v-for="(step, i) in formSteps" :key="i" @click="handleFormStep(i)">
                  <form-header :step="step" :index="i"></form-header>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 px-5">
            <keep-alive>
              <component :is="currentStep" :index="currentIndex - 1" @go-previous="handleFormStep"></component>
            </keep-alive>
          </div>
        </div>
      </div>
      <div class="card card-area" v-else>
        <div class="card-body px-0">
          <div class="text-center card-title">
            <h2>Your Submitted Data</h2>
          </div>
          <div class="mt-4 px-5" id="submittedData">
            <p>First Name: {{ formData.firstName }}</p>
            <p>Last Name: {{ formData.lastName }}</p>
            <p>Middle Name: {{ formData.middleName }}</p>
            <p>Date of Birth: {{ formData.dob }}</p>
          </div>
          <div class="mt-4">
            <button class="btn btn-danger" id="testAgain" @click="restAll()">Try Again</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FormHeader from "@/components/FormHeader";
import FormStepOne from "@/components/FormStepOne";
import FormStepTwo from "@/components/FormStepTwo";
import FormStepFinal from "@/components/FormStepFinal";

export default {
  name: "HomeView",
  components: {
    FormHeader,
    FormStepOne,
    FormStepTwo,
    FormStepFinal,
  },
  data() {
    return {
      isFinalSubmitDone: false,
      formStep: "FormStepOne",
      formData: {},
      formSteps: [
        {
          title: "Step One",
          component: "FormStepOne",
          validated: false,
          status: "active", //pending, completed
        },
        {
          title: "Step Two",
          component: "FormStepTwo",
          validated: false,
          status: "pending",
        },
        {
          title: "Final",
          component: "FormStepFinal",
          validated: false,
          status: "pending",
        },
      ],
    };
  },
  computed: {
    currentStep() {
      return this.formStep;
    },
    currentIndex() {
      return this.formSteps.findIndex((step) => step.component === this.currentStep);
    },
  },
  methods: {
    handleFormStep(index) {
      this.formSteps.forEach((step, i) => {
        if (index > i && step.validated) {
          step.status = "completed";
        }
        if (index < i) {
          step.status = "pending";
        }
      });

      const validatedCheckIndex = index === 0 ? index : index - 1;
      //if the previous step is valildated then route to next step
      if (validatedCheckIndex === index && !this.formSteps[validatedCheckIndex].validated) {
        this.formSteps[validatedCheckIndex].status = "active";
        this.formStep = this.formSteps[validatedCheckIndex].component;
      }

      if (this.formSteps[validatedCheckIndex].validated) {
        this.formSteps[index].status = "active";
        this.formStep = this.formSteps[index].component;
      }
    },
    restAll() {
      this.isFinalSubmitDone = false;
      this.formData = {};
      (this.formStep = "FormStepOne"),
        (this.formSteps = [
          {
            title: "Step One",
            component: "FormStepOne",
            validated: false,
            status: "active", //pending, completed
          },
          {
            title: "Step Two",
            component: "FormStepTwo",
            validated: false,
            status: "pending",
          },
          {
            title: "Final",
            component: "FormStepFinal",
            validated: false,
            status: "pending",
          },
        ]);
    },
  },
  mounted() {
    this.emitter.on("FormStepOne-submitted", (data) => {
      console.log("got=>FormStepOne-submitted ", data);
      this.formData = { ...this.formData, ...data };
      this.formSteps[0].validated = true;
      this.handleFormStep(1);
    });
    this.emitter.on("FormStepTwo-submitted", (data) => {
      console.log("got=>FormStepTwo-submitted ", data);
      this.formData = { ...this.formData, ...data };
      this.formSteps[1].validated = true;
      this.handleFormStep(2);
    });
    this.emitter.on("FormStepFinal", (data) => {
      this.formData = { ...this.formData, ...data };
      console.log("got=>FormStepFinal ==  ", this.formData);
      this.isFinalSubmitDone = true;
    });
  },
};
</script>
