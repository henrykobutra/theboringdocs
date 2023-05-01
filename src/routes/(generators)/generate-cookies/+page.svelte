<script lang="ts">
	import SelectBusinessType from '../SelectBusinessType.svelte';
	import InputInfo from '../InputInfo.svelte';
	import DownloadDoc from '../DownloadDoc.svelte';
	import ReviewDoc from '../ReviewDoc.svelte';

	let step = 1;
	let generatorType = 'cookies';
	let businessType = '';
	let businessName = '';
	let businessEmail = '';

	function resetForm() {
		step = 1;
		businessType = '';
		businessName = '';
		businessEmail = '';
	}

	function handleForward() {
		if (step < 4) {
			step++;
		}
	}

	function handleBackward() {
		if (step > 1) {
			step--;
		}
	}

	$: if (step === 1) {
		resetForm();
	}

	$: if (businessType) {
		handleForward();
	}
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
				<section class="w-full flex flex-col items-center">
					{#if step > 1}
						<div class="divider" />
						<div class="flex flex-row justify-between w-full">
							<button
								class="btn btn-outline"
								on:click={() => {
									if (step === 4) {
										step = 2;
									} else {
										handleBackward();
									}
								}}
							>
								{step === 2 ? 'Start Over' : 'Edit Info'}
							</button>
							<button
								class="btn btn-primary hover:btn-success"
								on:click={() => {
									if (step === 4) {
										resetForm();
									} else {
										handleForward();
									}
								}}
							>
								{step === 4 ? 'Start Over' : 'Next'}
							</button>
						</div>
					{/if}
				</section>
			</div>
		</div>
	</div>
</div>
