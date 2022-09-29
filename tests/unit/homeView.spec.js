import Home from "@/views/HomeView";
import mitt from "mitt";
import FormHeader from "@/components/FormHeader";

import { expect } from "chai";

import { shallowMount } from "@vue/test-utils";

describe("HomeView.vue", () => {
  const emitter = mitt();
  const wrapper = shallowMount(Home, {
    global: {
      plugins: [],
      mocks: { emitter },
    },
  });
  it("should render FormHeader component on mount", () => {
    const formHeader = wrapper.findComponent(FormHeader);
    expect(formHeader.exists()).equal(true);
  });

  it("renders form title", () => {
    expect(wrapper.find("#formTitle").text()).equal("Multi Step Form");
  });
});
