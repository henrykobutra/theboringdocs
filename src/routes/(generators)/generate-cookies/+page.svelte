<script lang="ts">
	import SelectBusinessType from '../SelectBusinessType.svelte';

	let step = 1;
	let businessType = '';
	function handleStep1() {
		step = 2;
	}
	function handleReset() {
		step = 1;
		businessType = '';
	}
	// Handle Reset
	$: if (step === 1) {
		handleReset();
	}
	// Step 1: Select business type
	$: businessType && handleStep1();
</script>

<div class="flex justify-center mt-8">
	<div class="max-w-screen-xl">
		<div class="mockup-window border bg-base-300 w-full">
			<div class="flex flex-col justify-center py-2 bg-base-200 p-8 items-center">
				<h1 class="font-mono font text-center text-2xl py-4">The Cookie Policy Generator</h1>
				<ul class="steps font-mono">
					<li class="step step-primary">Type</li>
					<li class="step {step > 1 ? 'step-primary' : ''}">Info</li>
					<li class="step">Review</li>
					<li class="step">Download</li>
				</ul>
				<div class="divider" />
				{#if step === 1}
					<SelectBusinessType bind:businessType />
				{/if}
				{#if step === 2}
					step 2: {businessType}
				{/if}
				<div class="divider" />
				<div>
					{#if step > 1}
						<button class="btn btn-primary" on:click={() => step--}>Back</button>
					{/if}
					<button class="btn btn-primary {step < 2 ? 'btn-disabled' : ''}">
						Just take me to the template
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
