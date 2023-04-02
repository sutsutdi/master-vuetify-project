// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    prefix: "",
    fname: "",
    lname: "",
    age: 0,
    rightname: "",
    hno: "",
    moo: "",
    subdist: "",
    dist: "",
    prov: ""

  }),
})
