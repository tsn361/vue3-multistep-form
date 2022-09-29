import FormStepFinal from "@/components/FormStepFinal";
import mitt from "mitt";

import { expect } from "chai";

import { shallowMount } from "@vue/test-utils";

describe("FormStepFinal.vue", () => {
  const emitter = mitt();
  const wrapper = shallowMount(FormStepFinal, {
    global: {
      plugins: [],
      mocks: { emitter },
    },
  });

  it("renders form final step input fields and label should to be Middle name", () => {
    const dobInput = wrapper.find("label");
    expect(dobInput.text()).equal("Date of birth");
  });
  it("renders form final step submit btn label should to be Next", () => {
    expect(wrapper.find("#submitFormStepFinal").text()).equal("Submit");
  });

  it("renders form final step previous btn label should to be Previous", () => {
    expect(wrapper.find("#goPrevious").text()).equal("Previous");
  });

  it("renders form final step input field type should to be text", () => {
    const dobInput = wrapper.find("#dob");
    expect(dobInput.attributes().type).equal("date");
  });
});
