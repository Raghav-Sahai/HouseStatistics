<template>
	<div id="app">
		<div class="header">
			<h1>HouseStatistics</h1>
			<ZillowSync @zillowSync="handleZillowSync" />
		</div>
		<DataDisplay :data="calculatedData" />
		<hr />
			<DropdownInput 
				id="loanTerm"
				label="Loan Type"
				:options="loanTermOptions"
				:defaultValue="loanTerm"
				@dropdownInput="handleInputChange"
			/>
		<div class="container">
			<div class="left">
				<TextInput v-for="(textInput, index) in textInputArray.slice(0, 4)" :key="index" :id="textInput.id"
					:label="textInput.label" :placeholder="textInput.placeholder" :defaultValue="textInput.defaultValue"
					:validator="textInput.validator" @input="handleInputChange" />
			</div>
			<div class="right">
				<TextInput v-for="(textInput, index) in textInputArray.slice(4, 8)" :key="index" :id="textInput.id"
					:label="textInput.label" :placeholder="textInput.placeholder" :defaultValue="textInput.defaultValue"
					:validator="textInput.validator" @input="handleInputChange" />
			</div>
		</div>

	</div>
</template>

<script>

import TextInput from './components/TextInput'
import DropdownInput from './components/DropdownInput'
import ZillowSync from './components/ZillowSync'
import DataDisplay from './components/DataDisplay'
import calculate from './utils/calculate'

export default {
	data() {
		return {
			loanTerm: 30,
			homeValue: 100000,
			downpaymentPercent: 20,
			interestRate: 4.5,
			rentPerMonth: 1000,
			propertyTaxPerMonth: 125,
			hoaPerMonth: 0,
			homeInsurancePerMonth: 66,
			renovationClosing: 3000,
			loanTermOptions: [
				{ text: "30 year fixed", value: 30 },
				{ text: "15 year fixed", value: 15 }
			]
		}
	},
	computed: {
		textInputArray() {
			return [
				{
					id: "homeValue",
					label: "Home Value ($)",
					placeholder: "Home value",
					defaultValue: this.homeValue,
					validator: () => true
				},
				{
					id: "downpaymentPercent",
					label: "Downpayment Percent (%)",
					placeholder: "Downpayment percent",
					defaultValue: this.downpaymentPercent,
					validator: () => true
				},
				{
					id: "rentPerMonth",
					label: "Rent Per Month ($)",
					placeholder: "rent/ month",
					defaultValue: this.rentPerMonth,
					validator: () => true
				},
				{
					id: "propertyTaxPerMonth",
					label: "Property Tax Per Month ($)",
					placeholder: "Property tax/ month",
					defaultValue: this.propertyTaxPerMonth,
					validator: () => true
				},
					{
						id: "interestRate",
						label: "Intrest Rate (%)",
						placeholder: "Interest rate",
						defaultValue: this.interestRate,
						validator: () => true
					},
				{
					id: "hoaPerMonth",
					label: "HOA Per Month ($)",
					placeholder: "HOA/ month",
					defaultValue: this.hoaPerMonth,
					validator: () => true
				},
				{
					id: "homeInsurancePerMonth",
					label: "Home Insurance Per Month ($)",
					placeholder: "Home Insurance/ month",
					defaultValue: this.homeInsurancePerMonth,
					validator: () => true
				},
				{
					id: "renovationClosing",
					label: "Renovations + Closing ($)",
					placeholder: "Renovation + closing costs",
					defaultValue: this.renovationClosing,
					validator: () => true
				},
			]
		},
		calculatedData() {
			const { roi, downpaymentValue, monthlyCashFlow, payment } = calculate(
				parseFloat(this.loanTerm),
				parseFloat(this.homeValue),
				parseFloat(this.downpaymentPercent),
				parseFloat(this.interestRate),
				parseFloat(this.rentPerMonth),
				parseFloat(this.propertyTaxPerMonth),
				parseFloat(this.hoaPerMonth),
				parseFloat(this.homeInsurancePerMonth),
				parseFloat(this.renovationClosing),
			)
			return [
				{
					label: "ROI (%)",
					value: roi
				},
				{
					label: "Downpayment",
					value: `$${downpaymentValue}`
				},
				{
					label: "Cash flow/mo",
					value: `$${monthlyCashFlow}`
				},
				{
					label: "Payment/mo",
					value: `$${payment}`
				}
			]


		}
	},
	methods: {
		handleInputChange(input) {
			this[input.id] = input.value
		},
		handleZillowSync(object) {
			this.homeValue = object.homeValue
			this.propertyTaxPerMonth = object.propertyTaxPerMonth
			this.homeInsurancePerMonth = object.homeInsurancePerMonth
			this.hoaPerMonth = object.hoaPerMonth
		}
	},
	components: { TextInput, ZillowSync, DataDisplay, DropdownInput }
}
</script>

<style>
#app {
	color: #0a2540;
	font-family:Arial, Helvetica, sans-serif;
}

h1 {
	margin: 0;
}

.header {
	display: flex;
	justify-content: space-between;
}
.container {
	display: flex;
}
</style>