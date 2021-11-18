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
  <div class="mt-5">
    <div class="shadow-lg rounded w-[560px] p-10 bg-gray-50">
      <form class="" @submit.prevent="handleSubmit">
        <div class="flex-centered flex-col space-y-10 leading-loose">
          <p class="text-lg">Form props and emit</p>
          <Input
            v-model="form.myInput"
            class="w-full"
            name="myInput"
            type="text"
            label="myInput"
          />
          <Textarea
            v-model:myTextarea="form.myTextarea"
            class="w-full"
            name="myTextarea"
            label="myTextarea"
            :rows="10"
            :cols="20"
          ></Textarea>
          <Radio
            v-model="form.myRadio"
            class="w-full"
            :options="radioOptions"
            name="myRadio"
            label="myRadio"
          />
          <Select
            v-model="form.mySelect"
            class="w-full"
            :options="selectOptions"
            name="mySelect"
            label="mySelect"
          ></Select>
          <Checkbox
            v-model="form.myCheckbox"
            class="w-full"
            :options="checkboxOptions"
            name="myCheckbox"
            label="myCheckbox"
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
        </div>
      </form>
    </div>
  </div>
</template>
