<script lang="ts">
	import { page } from '$app/stores';

	import { showMenu } from '$lib/stores/menu-store';

	export let size = 35;
	export let showLabel = true;
	let expanded = false;

	const expand = (_e: Event) => {
		showMenu.set(!expanded);
	};

	showMenu.subscribe((v) => (expanded = v));
	page.subscribe((transition) => showMenu.set(false));
	let dashOffset = 136.9;
	let dashOffsetBurger = 136.9;
	let dashOffsetCross = 74.1;
</script>

<!--<label> dashArray: {dashArray}-->
<!--<input type="range" min="0" max="100" step="0.1" bind:value={dashArray}/>-->
<!--</label>-->

<!--<label> dashOffset: {dashOffset}-->
<!--    <input type="range" min="0" max="200" step="0.1" bind:value={dashOffset}/>-->
<!--</label>-->
<div
	class="grid place-content-center grid-flow-col gap-2 cursor-pointer z-50 "
	on:click={expand}
	aria-label="Menu"
>
	<div aria-label="Menu" class="grid place-items-center">
		<div class="h-7 grid place-content-center">
			<svg
				viewBox="0 0 26.458333 26.458333"
				id="svg5"
				xmlns="http://www.w3.org/2000/svg"
				class=" w-[1.875rem] h-[1.875rem] transition-all duration-500 {expanded
					? 'expanded'
					: 'collapsed'}"
			>
				<g id="layer1">
					<path
						id="bottom"
						class="line"
						d="M 3.7732683,18.978041 H 22.68511 c 0,0 5.067961,-0.01076 2.149154,4.017304 -1.814915,2.504651 -4.323456,-0.80244 -4.323456,-0.80244 L 6.5428366,6.4729796"
					/>
					<path id="middle" class="line" d="M 3.7732681,13.229167 H 22.685065" />
					<path
						id="top"
						class="line"
						d="M 3.7732683,7.4104353 H 22.68511 c 0,0 5.067961,0.010758 2.149154,-4.0173039 -1.814915,-2.5046506 -4.323456,0.8024401 -4.323456,0.8024401 L 6.5428366,19.915497"
					/>
				</g>
			</svg>
		</div>
		{#if showLabel}
			<div class="text-xs mb-1  {$showMenu ? 'text-heart' : 'text-black'}">
				<span> Menu </span>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.line {
		fill: none;
		stroke-width: 2px;
		stroke-linecap: round;
		stroke-linejoin: miter;
		stroke-miterlimit: 4;
		stroke-dasharray: 52;
		stroke-opacity: 1;
	}

	svg {
		stroke: #000;
	}

	.collapsed {
		stroke: #000;

		stroke-dashoffset: 136.9;
	}
	.expanded {
		stroke: #e40045;
		stroke-dashoffset: 71.1;
	}
</style>
