<script>
export default {
  props: {
    type: String,
    name: String,
    value: String,
    isValid: Boolean,
    isSubmitForm: Boolean,
    messageError: String,
  },
  methods: {
    updatedValue(value) {
      this.$emit("update:value", value);
    },
  },
};
</script>
<template>
  <div>
    <div class="relative">
      <div
        v-show="!isValid && isSubmitForm"
        class="absolute right-0 h-full flex items-center justify-end pe-[16px]"
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle fill="#FF7979" cx="12" cy="12" r="12" />
            <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
            <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
          </g>
        </svg>
      </div>
      <input
        class="w-full text-darkBlue border-grayishBlue border-[1px] rounded-[5px] p-[18px_20px] placeholder:text-darkBlue placeholder:font-semibold font-semibold lg:p-[17px_26px] lg:text-[14px] focus:outline focus:outline-blue"
        :name="name"
        :class="{
          'border-red border text-red': !isValid && isSubmitForm,
        }"
        :type="type"
        :placeholder="name"
        @input="updatedValue($event.target.value)"
        :autocomplete="`${name}`"
      />
    </div>

    <div v-show="!isValid && isSubmitForm" class="error-message">
      {{ messageError }}
    </div>
  </div>
</template>
