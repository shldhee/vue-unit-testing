import { mount } from "@vue/test-utils";
import test from "ava";
import Icon from "@/components/Icon";
// import Icon from "../../src/components/Icon";

test("snapshot icon", t => {
  const wrapper = mount(Icon);

  t.snapshot(wrapper.html(), "Icon");
});
