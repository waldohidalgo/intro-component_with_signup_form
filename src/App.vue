<script>
import InputForm from "./components/Input.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    return {
      isSubmitForm: false,
      firstName: { value: "", isValid: false },
      lastName: { value: "", isValid: false },
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },

      inputTypesAndNames: [
        {
          type: "text",
          name: "First Name",
          propertyName: "firstName",
          messageError: "First Name cannot be empty",
        },
        {
          type: "text",
          name: "Last Name",
          propertyName: "lastName",
          messageError: "Last Name cannot be empty",
        },
        {
          type: "email",
          name: "Email Address",
          propertyName: "email",
          messageError: "Looks like this is not an email",
        },
        {
          type: "password",
          name: "Password",
          propertyName: "password",
          messageError: "Password cannot be empty",
        },
      ],
    };
  },
  methods: {
    submitForm() {
      this.isSubmitForm = true;
      let isValid = false;
      this.firstName.isValid = this.firstName.value.trim().length > 0;
      this.lastName.isValid = this.lastName.value.trim().length > 0;
      this.email.isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.email.value
      );
      this.password.isValid = this.password.value.trim().length > 0;

      isValid =
        this.firstName.isValid &&
        this.lastName.isValid &&
        this.email.isValid &&
        this.password.isValid;

      if (isValid) {
        alert("Form submitted successfully 😄");
      }
    },
    getField(propertyName) {
      return this[propertyName];
    },
    updatedValue(propertyName, value) {
      this[propertyName].value = value;
      if (["firstName", "lastName", "password"].includes(propertyName)) {
        this[propertyName].isValid = value.trim().length > 0;
        return;
      }
      if (["email"].includes(propertyName)) {
        this[propertyName].isValid =
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        return;
      }
    },
  },
  components: {
    InputForm,
    Footer,
  },
};
</script>

<template>
  <main class="relative">
    <div
      class="bg-[url('./assets/bg-intro-mobile.png')] bg-red bg-cover absolute top-0 left-0 right-0 bottom-0 z-[-1] lg:hidden"
    ></div>
    <div
      class="bg-[url('./assets/bg-intro-desktop.png')] bg-red bg-cover absolute top-0 left-0 right-0 bottom-0 z-[-1] hidden lg:block"
    ></div>

    <div
      class="flex flex-col p-[100px_29px] lg:flex-row md:p-[62px_15px] xl:p-[50px_164px_114px_166px]"
    >
      <div
        class="w-full lg:w-[51.1%] lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-[15px]"
      >
        <h2
          class="text-center text-white text-[30px] font-bold leading-[41px] lg:text-start lg:text-[49px] lg:mt-[73px] lg:leading-[56px]"
        >
          Learn to code by watching others
        </h2>
        <p
          class="text-white text-center text-[18px] mt-[25px] leading-[28px] lg:text-start lg:mt-[10px] lg:text-[16px] lg:leading-[26px] lg:pe-[46px]"
        >
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div class="w-full lg:w-[48.9%]">
        <button
          class="bg-blue text-white rounded-[11px] min-[375px]:px-[60px] py-[19px] mt-[72px] leading-[30px] text-[17px] shadow-button1 w-full hover:bg-blue/80 lg:py-[14px] lg:text-[15.5px] lg:mt-[78px]"
        >
          <span class="font-bold">Try it free 7 days</span> then $20/mo.
          thereafter
        </button>
        <form
          class="mt-[25px] bg-white p-[28px_25px] flex flex-col rounded-[8px] gap-[18px] lg:p-[40px_42px] shadow-button1"
          @submit.prevent="submitForm"
        >
          <InputForm
            v-for="{
              type,
              name,
              propertyName,
              messageError,
            } in inputTypesAndNames"
            :type="type"
            :name="name"
            :value="getField(propertyName).value"
            :isValid="getField(propertyName).isValid"
            :messageError="messageError"
            :isSubmitForm="isSubmitForm"
            @update:value="updatedValue(propertyName, $event)"
          />

          <button
            type="submit"
            class="bg-green text-white py-[18px] uppercase rounded-[7px] font-medium [word-spacing:1px] text-[18px] shadow-button2 hover:bg-green/80"
            title="Submit form"
            aria-label="Submit form"
          >
            Claim your free trial
          </button>
          <p
            class="text-center text-grayishBlue font-semibold text-[12px] px-[20px] leading-[22px] -mt-[10px]"
          >
            By clicking the button, you are agreeing to our
            <a href="#" class="text-red font-bold">Terms and Services</a>
          </p>
        </form>
      </div>
    </div>
  </main>
  <Footer />
</template>
