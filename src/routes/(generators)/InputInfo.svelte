<script lang="ts">
	import FormInput from '$lib/components/FormInput.svelte';
	export let businessType: string = '';
	export let generatorType: string = '';
	export let businessName: string = '';
	export let businessEmail: string = '';
	export let linkToPrivacyPolicy: string = '';
	export let linkToPaymentAndRefundsPolicy: string = '';
	export let refundPeriod: string = '';
	export let servicesOffered: string = '';
</script>

<div class="mb-4">
	<h2 class="font-serif text-xl">Provide some basic info</h2>
	<FormInput labelText="What's the name?" placeholder="Banana Inc." bindValue={businessName} />
	<FormInput
		labelText="What's a good contact email?"
		labelTextAlt="Used for text generation, not collecting"
		placeholder="cherry@banana.xyz"
		bindValue={businessEmail}
	/>
	{#if generatorType === 'generate-terms' && (businessType === 'app' || businessType === 'ecommerce')}
		<FormInput
			labelText="Link To Privacy Policy"
			labelTextAlt="If you don't have one, you can generate one later"
			placeholder="example.com/privacy-policy"
			bindValue={linkToPrivacyPolicy}
		/>
		<FormInput
			labelText="Link To Payment & Refunds Policy"
			labelTextAlt="If you don't have one, you can generate one later"
			placeholder="example.com/refund-policy"
			bindValue={linkToPaymentAndRefundsPolicy}
		/>
	{/if}
	{#if generatorType === 'generate-faqs'}
		{#if businessType === 'apps' || businessType === 'ecommerce'}
			<FormInput
				labelText="Refund Period"
				labelTextAlt="Please specify days, weeks, or months too"
				placeholder="69 days"
				bindValue={refundPeriod}
			/>
		{/if}
		{#if businessType === 'freelancer' || businessType === 'content-creator'}
			<FormInput
				labelText="What services do you offer?"
				labelTextAlt="Add as many as you like"
				placeholder="typescript development video editing"
				bindValue={servicesOffered}
			/>
		{/if}
	{/if}
	{#if generatorType === 'generate-payment-refunds'}
		<FormInput
			labelText="Refund Period"
			labelTextAlt="Please also specify days, weeks, or months too"
			placeholder="69 days"
			bindValue={refundPeriod}
		/>
	{/if}
</div>
