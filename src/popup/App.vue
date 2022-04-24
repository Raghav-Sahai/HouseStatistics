<template>
  <div id="app">
      <h1>ROI Calculator</h1>
			<h2>{{ roi }} ROI</h2>
			<TextInput
				v-for="(textInput, index) in textInputArray"
				:key="index"
				:id="textInput.id"
				:label="textInput.label"
				:placeholder="textInput.placeholder"
				:validator="textInput.validator"
				@input="handleInputChange"
			/>
  </div>
</template>

<script>

import TextInput from './components/TextInput'
import calculateRoi from './utils/roi'

export default {
	data() {
		return {
			loanTerm: 0,
			homeValue: 0,
			downpaymentPercent: 0,
			interestRate: 0,
			rentPerMonth: 0,
			propertyTaxPerMonth: 0,
			hoaPerMonth: 0,
			homeInsurancePerMonth: 0,
			renovationClosing: 0,
			textInputArray: [
				{
					id: "homeValue",
					label: "Home Value ($)",
					placeholder: "Home value",
					validator: () => true
				},
				{
					id: "downpaymentPercent",
					label: "Downpayment Percent (%)",
					placeholder: "Downpayment percent",
					validator: () => true
				},
				{
					id: "interestRate",
					label: "Intrest Rate (%)",
					placeholder: "Interest rate",
					validator: () => true
				},
				{
					id: "rentPerMonth",
					label: "Rent Per Month ($)",
					placeholder: "rent/ month",
					validator: () => true
				},
				{
					id: "propertyTaxPerMonth",
					label: "Property Tax Per Month ($)",
					placeholder: "Property tax/ month",
					validator: () => true
				},
				{
					id: "hoaPerMonth",
					label: "HOA Per Month ($)",
					placeholder: "HOA/ month",
					validator: () => true
				},
				{
					id: "homeInsurancePerMonth",
					label: "Home Insurance Per Month ($)",
					placeholder: "Home Insurance/ month",
					validator: () => true
				},
				{
					id: "renovationClosing",
					label: "Renovations + Closing ($)",
					placeholder: "Renovation + closing costs",
					validator: () => true
				},
			]
		}
	},
	computed: {
		roi() {
			return calculateRoi(
				this.loanTerm,
				this.homeValue,
				this.downpaymentPercent,
				this.interestRate,
				this.rentPerMonth,
				this.propertyTaxPerMonth,
				this.hoaPerMonth,
				this.homeInsurancePerMonth,
				this.renovationClosing,
			)
		}
	},
	methods: {
		handleInputChange(input) {
			console.log(input)
			this[input.id] = input.value
		}
	},
	components: { TextInput }
}
</script>

<style>

#app {
	padding: 1em 1em
}

</style>