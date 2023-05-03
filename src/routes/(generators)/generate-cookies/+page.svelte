<script lang="ts">
	import GeneratorWindow from '../GeneratorWindow.svelte';

	let generatorType = 'generate-cookies';
</script>

<svelte:head>
	<title>Cookie Policy Generator - The Boring Docs</title>
	<meta
		name="description"
		content="Don't waste your time drafting policies from scratch! The Boring Docs offers free and simple policy templates for your website, including Terms and Conditions, Privacy Policy, Cookie Policy, Payment and Refunds Policy, and FAQs."
	/>
</svelte:head>

<div class="flex justify-center mt-8">
	<div class="max-w-screen-md w-full">
		<GeneratorWindow bind:generatorType />
	</div>
</div>
