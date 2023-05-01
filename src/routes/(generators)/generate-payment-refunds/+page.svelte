<script lang="ts">
	import GeneratorWindow from '../GeneratorWindow.svelte';

	let generatorType = 'generate-payment-refunds';
</script>

<div class="flex justify-center mt-8">
	<div class="max-w-screen-md w-full">
		<GeneratorWindow bind:generatorType />
	</div>
</div>
