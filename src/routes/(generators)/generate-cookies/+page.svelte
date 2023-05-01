<script lang="ts">
	import SelectBusinessType from '../SelectBusinessType.svelte';
	import InputInfo from '../InputInfo.svelte';
	import DownloadDoc from '../DownloadDoc.svelte';
	import ReviewDoc from '../ReviewDoc.svelte';

	let generatorType = 'cookies';
	let step = 1;
	let businessType = '';
	let businessName = '';
	let businessEmail = '';

	function handleForward() {
		step++;
	}
	function handleReset() {
		step = 1;
		businessType = businessName = businessEmail = '';
	}
	// Handle Reset
	$: if (step === 1) {
		handleReset();
	}
	// Step 1: Select business type
	$: businessType && handleForward();
</script>

<div class="flex justify-center mt-8">
	<div class="max-w-screen-md w-full">
		<div class="mockup-window border bg-base-300 w-full">
			<div class="flex flex-col justify-center py-2 bg-base-200 p-8 items-center">
				<h1 class="font-mono font text-center text-2xl py-4">The Cookie Policy Generator</h1>
				<ul class="steps font-mono">
					<li class="step step-primary">Type</li>
					<li class="step {step > 1 ? 'step-primary' : ''}">Info</li>
					<li class="step {step > 2 ? 'step-primary' : ''}">Review</li>
					<li class="step {step > 3 ? 'step-primary' : ''}">Copy</li>
				</ul>
				<div class="divider" />
				{#if step === 1}
					<SelectBusinessType bind:businessType />
				{/if}
				{#if step === 2}
					<InputInfo bind:generatorType bind:businessType bind:businessName bind:businessEmail />
				{/if}
				{#if step === 3}
					<ReviewDoc bind:businessEmail bind:businessName bind:businessType />
				{/if}
				{#if step === 4}
					<DownloadDoc bind:businessEmail bind:businessName bind:businessType />
				{/if}
				<div class="divider" />
				<section class="w-full flex flex-col items-center">
					{#if step > 1}
						<div class="flex flex-row justify-between w-full">
							<button class="btn btn-outline" on:click={() => step--}>Back</button>
							<button class="btn btn-primary hover:btn-success" on:click={() => handleForward()}
								>Next</button
							>
						</div>
						<div class="divider">OR</div>
					{/if}
					<div class="flex flex-col justify-between gap-2">
						{#if step === 1}
							<div class="tooltip" data-tip="Just get over step 1 please">
								<button class="btn btn-warning btn-xs {step < 2 ? 'btn-disabled' : ''}">
									Just take me to the template
								</button>
							</div>
						{:else}
							<button class="btn btn-warning btn-sm"> Just take me to the template </button>
						{/if}
						{#if step > 1}
							<div class="divider">OR</div>
							<button class="btn btn-info btn-sm" on:click={() => handleReset()}>
								Start Over
							</button>
						{/if}
					</div>
				</section>
			</div>
		</div>
	</div>
</div>
