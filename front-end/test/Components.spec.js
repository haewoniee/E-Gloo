import { mount } from "@vue/test-utils";
import GeneralInput from "@/components/GeneralInput.vue";
import Grid from "@/components/Grid.vue";
import Ingredient from "@/components/Ingredient.vue";
import Navbar from "@/components/Navbar.vue";
import Notification from "@/components/Notification.vue";
import RegisterModal from "@/components/RegisterModal.vue";
import SwitchTabInput from "@/components/SwitchTabInput.vue";
import TabItem from "@/components/TabItem.vue";
import Recipe from "@/components/Recipe.vue";
import flushPromises from "flush-promises";
import "@/plugins/vee-validate";

describe("GeneralInput", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(GeneralInput);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("Grid", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Grid);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("Navbar", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Navbar);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("Notification", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Notification);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("RegisterModal", () => {
  const wrapper = mount(RegisterModal);
  const registerButton = wrapper.find("button");
  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
  test("required inputs missing", async () => {
    registerButton.trigger("click");
    await flushPromises();
    expect(wrapper.emitted()).not.toHaveProperty("register");
    expect(wrapper.find(".warning").text()).not;
  });
  test("required inputs put", async () => {
    wrapper.find("input[name='닉네임']").setValue("abc");
    wrapper.find("input[name='비밀번호']").setValue("asdfASDF");
    wrapper.find("input[name='이메일']").setValue("abc123");
    await flushPromises();
    expect(wrapper.find(".warning").text()).toBe("");
    await registerButton.trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("register");
  });
});

describe("SwitchTabInput", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(SwitchTabInput);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("TabItem", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(TabItem);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("Ingredient", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Ingredient);
    expect(wrapper.vm).toBeTruthy();
  });
  test("has imageUrl", () => {
    const wrapper = mount(Ingredient, {
      propsData: {
        ingredient: {
          name: "재료 테스트",
          id: 1,
          bookmarked: false,
          imageUrl: ""
        }
      }
    });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.vm.cssVars).toEqual({ "--image-url": "#e0e0e0" });
  });
  test("does not have imageUrl", () => {
    const wrapper = mount(Ingredient, {
      propsData: {
        ingredient: {
          name: "재료 테스트",
          id: 1,
          bookmarked: false,
          imageUrl: "test.com"
        }
      }
    });
    expect(wrapper.vm.cssVars).toEqual({ "--image-url": "url(test.com)" });
  });
});

describe("Recipe", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Recipe);
    expect(wrapper.vm).toBeTruthy();
  });
});
// var componentList = [
//   GeneralInput,
//   Grid,
//   Ingredient,
//   Navbar,
//   Notification,
//   Recipe,
//   RegisterModal,
//   SwitchTabInput,
//   TabItem
// ];

// componentList.forEach(component => {
//   describe(component.toString, () => {
//     test("is a Vue instance", () => {
//       const wrapper = mount(GeneralInput);
//       expect(wrapper.vm).toBeTruthy();
//     });
//   });
// });
