<script>
	import { nkReady } from '$lib/client';
	import { getChallengeUserDataSummary } from '$lib/services/challenge-storage';

	import { rewardStore } from '$lib/stores/reward-store';

	let medals = '0';

	const pad = (num, size) => {
		return String(num).padStart(size, '0');
	};

	rewardStore.subscribe((state) => {
		const _medals = state.medal;
		medals = pad(_medals, 2);
	});

	// onMount(() => {
	// 	getChallengeUserDataSummary();
	// });

	const updateMedals = async () => {
		return await getChallengeUserDataSummary();
	};
</script>

<div class="flex flex-col gap-5 items-center place-items-center  w-full relative">
	<!-- <div class="relative -z-10">
		<BlobAnim />
	</div> -->

	<div class="font-serif font-bold text-lg">Abgeschlossene Challenges</div>
	<div class="grid grid-flow-col place-items-center gap-20">
		<div class="text-reward">
			<svg
				class="h-24 w-24 mx-auto"
				viewBox="0 0 76 76"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M37.9997 69.6663C50.2198 69.6663 60.1663 59.7198 60.1663 47.4997C60.1663 35.2795 50.2198 25.333 37.9997 25.333C25.7763 25.333 15.833 35.2795 15.833 47.4997C15.833 59.7198 25.7763 69.6663 37.9997 69.6663ZM37.9997 31.6663C46.7302 31.6663 53.833 38.7692 53.833 47.4997C53.833 56.2302 46.7302 63.333 37.9997 63.333C29.2692 63.333 22.1663 56.2302 22.1663 47.4997C22.1663 38.7692 29.2692 31.6663 37.9997 31.6663ZM34.833 6.33301H22.1663V23.8067C25.9558 21.2709 30.3008 19.6861 34.833 19.1865V6.33301ZM53.833 6.33301H41.1663V19.1865C45.6985 19.6861 50.0435 21.2709 53.833 23.8067V6.33301Z"
					fill="currentColor"
				/>
				<path
					d="M31.7265 50.0678L30.2445 58.7002L37.9997 54.6247L45.7549 58.7002L44.2729 50.0678L50.5492 43.9498L41.8789 42.6895L37.9997 34.833L34.1205 42.6895L25.4502 43.9498L31.7265 50.0678Z"
					fill="currentColor"
				/>
			</svg>
		</div>
		<div class="text-4xl text-reward font-bold font-serif">
			{#if $nkReady}
				{#await updateMedals()}
					00
				{:then medals}
					{pad(medals, 2)}
				{/await}
			{:else}
				00
			{/if}
		</div>
	</div>
</div>
