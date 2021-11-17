<script setup lang="ts">
import { reactive } from 'vue'
import Input from '@/components/molecules/Input.vue'
import Textarea from '@/components/molecules/Textarea.vue'
import Radio from '@/components/molecules/Radio.vue'
import Select from '@/components/molecules/Select.vue'
import Checkbox from '@/components/molecules/Checkbox.vue'

const form = reactive({
  myInput: '',
  myTextarea: '',
  myRadio: '',
  mySelect: '',
  myCheckbox: [],
})
const radioOptions = [
  { label: 'sushi', value: '1' },
  { label: 'tempura', value: '2' },
  { label: 'sukiyaki', value: '3' },
]
const selectOptions = [
  { label: 'Kyoto', value: '1' },
  { label: 'ToKyo', value: '2' },
  { label: 'Osaka', value: '3' },
]
const checkboxOptions = [
  { label: 'sumo', value: '1' },
  { label: 'kendo', value: '2' },
  { label: 'judo', value: '3' },
]

const handleSubmit = () => {
  alert(JSON.stringify(form))
}
</script>

<template>
  <div class="mt-10 space-y-10">
    <form @submit.prevent="handleSubmit">
      <Input
        v-model="form.myInput"
        name="myInput"
        type="text"
        label="myInput"
      />
      <Textarea
        v-model:myTextarea="form.myTextarea"
        name="myTextarea"
        label="myTextarea"
        :rows="10"
        :cols="20"
      ></Textarea>
      <Radio
        v-model="form.myRadio"
        :options="radioOptions"
        name="myRadio"
        label="myRadio"
      />
      <Select
        v-model="form.mySelect"
        :options="selectOptions"
        name="mySelect"
        label="mySelect"
      ></Select>
      <Checkbox
        v-model="form.myCheckbox"
        :options="checkboxOptions"
        name="myCheckbox"
      />

      <button
        type="submit"
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded
        "
      >
        submit
      </button>
    </form>
    <div>
      <p>name:{{ form.myInput }}</p>
      <p>message:{{ form.myTextarea }}</p>
      <p>myFavFood:{{ form.myRadio }}</p>
      <p>mySelect:{{ form.mySelect }}</p>
      <p>myCheckbox:{{ form.myCheckbox }}</p>
    </div>
  </div>
</template>
