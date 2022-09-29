import FormStepTwo from "@/components/FormStepTwo";
import mitt from "mitt";

import { expect } from "chai";

import { shallowMount } from "@vue/test-utils";

describe("FormStepTwo.vue", () => {
  const emitter = mitt();
  const wrapper = shallowMount(FormStepTwo, {
    global: {
      plugins: [],
      mocks: { emitter },
    },
  });

  it("renders form step two input fields and label should to be Middle name", () => {
    const mNameInput = wrapper.find("label");
    expect(mNameInput.text()).equal("Middle name");
  });
  it("renders form step two submit btn label should to be Next", () => {
    expect(wrapper.find("#submitFormStepTwo").text()).equal("Next");
  });

  it("renders form step two previous btn label should to be Previous", () => {
    expect(wrapper.find("#goPrevious").text()).equal("Previous");
  });

  it("renders form step two input field type should to be text", () => {
    const fNameInput = wrapper.find("#middleName");
    expect(fNameInput.attributes().type).equal("text");
  });
});
