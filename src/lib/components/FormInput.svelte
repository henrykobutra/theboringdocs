<script lang="ts">
	export let labelText: string;
	export let labelTextAlt: string = '';
	export let placeholder: string;
	export let value: string = '';
	const onInput = (e: Event): void => {
		const target = e.target as HTMLInputElement;
		value = target.value;
	};
</script>

<div class="form-control w-full max-w-xs mt-2">
	<label for={labelText} class="label">
		<span class="label-text">{labelText}</span>
	</label>
	<input
		type="text"
		{placeholder}
		class="input input-bordered w-full max-w-xs"
		{value}
		on:input={onInput}
	/>
	{#if labelTextAlt}
		<label for={labelText} class="label">
			<span class="label-text-alt">{labelTextAlt}</span>
		</label>
	{/if}
</div>
