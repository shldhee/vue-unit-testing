import { mount } from "@vue/test-utils";
import test from "ava";
import Box from "@/components/Box";
// import Box from "../../src/components/Box";

test("snapshot test", t => {
  const wrapper = mount(Box);

  t.snapshot(wrapper.html(), "box");
});
