<script lang="ts">
	import FormInput from '$lib/components/FormInput.svelte';
	export let businessType: string;
	export let generatorType: string;
	export let businessName: string;
	export let businessEmail: string;
	export let linkToPrivacyPolicy: string;
	export let linkToPaymentAndRefundsPolicy: string;
	export let location: string;
	export let refundPeriod: string;
	export let servicesOffered: string;
</script>

<div class="mb-4">
	<h2 class="font-serif text-xl">Provide some basic info</h2>
	<FormInput
		labelText="What's the name?"
		placeholder="Banana Inc."
		bind:value={businessName}
		labelTextAlt="Dummy name also works"
	/>
	<FormInput
		labelText="What's a good contact email?"
		labelTextAlt="Used for text generation, not collecting"
		placeholder="cherry@banana.xyz"
		bind:value={businessEmail}
	/>
	{#if generatorType === 'generate-terms'}
		<FormInput
			labelText="Where you at?"
			labelTextAlt="State or Country ... or both?"
			placeholder="Texas, USA"
			bind:value={location}
		/>
		{#if businessType === 'app' || businessType === 'ecommerce'}
			<FormInput
				labelText="Link To Privacy Policy"
				labelTextAlt="If you don't have one, you can generate one later"
				placeholder="example.com/privacy-policy"
				bind:value={linkToPrivacyPolicy}
			/>
			<FormInput
				labelText="Link To Payment & Refunds Policy"
				labelTextAlt="If you don't have one, you can generate one later"
				placeholder="example.com/refund-policy"
				bind:value={linkToPaymentAndRefundsPolicy}
			/>
		{/if}
	{/if}
	{#if generatorType === 'generate-faqs'}
		{#if businessType === 'apps' || businessType === 'ecommerce'}
			<FormInput
				labelText="Refund Period"
				labelTextAlt="Please specify days, weeks, or months too"
				placeholder="69 days"
				bind:value={refundPeriod}
			/>
		{/if}
		{#if businessType === 'freelancer' || businessType === 'content-creator'}
			<FormInput
				labelText="What services do you offer?"
				labelTextAlt="Add as many as you like"
				placeholder="typescript development video editing"
				bind:value={servicesOffered}
			/>
		{/if}
	{/if}
	{#if generatorType === 'generate-payment-refunds'}
		<FormInput
			labelText="Refund Period"
			labelTextAlt="Please also specify days, weeks, or months too"
			placeholder="69 days"
			bind:value={refundPeriod}
		/>
	{/if}
</div>
<div class="alert bg-base-100 shadow-lg">
	<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="stroke-info flex-shrink-0 w-6 h-6"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<div>
			<h3 class="font-bold">Don't worry!</h3>
			<div class="text-xs">You can change these later</div>
		</div>
	</div>
</div>
