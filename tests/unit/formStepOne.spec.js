import FormStepOne from "@/components/FormStepOne";
import mitt from "mitt";

import { expect } from "chai";

import { shallowMount } from "@vue/test-utils";

describe("FormStepOne.vue", () => {
  const emitter = mitt();
  const wrapper = shallowMount(FormStepOne, {
    global: {
      plugins: [],
      mocks: { emitter },
    },
  });

  it("renders form step one input fields and label should to be First name, Last name", () => {
    const divArray = wrapper.findAll(".form-label");
    const secondDiv = divArray.at(0);
    expect(secondDiv.text()).equal("First name");
    const lastDiv = divArray.at(-1);
    expect(lastDiv.text()).equal("Last name");
  });
  it("renders form step one submit btn label should to be Next", () => {
    expect(wrapper.find("#submitFormStepOne").text()).equal("Next");
  });

  it("renders form step one all input fields type should to be text", () => {
    const divArray = wrapper.findAll("input");
    const fNameInput = divArray.at(0);
    expect(fNameInput.attributes().type).equal("text");
    const lNameInput = divArray.at(-1);
    expect(lNameInput.attributes().type).equal("text");
  });
});
