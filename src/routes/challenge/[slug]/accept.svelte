<script lang="ts" context="module">
	import { availableChallenges } from '$testData/challenges';

	export async function load({ params, fetch, session, stuff }) {
		let challenge = availableChallenges.find((challenge) => challenge.slug === params.slug);
		return {
			status: 200,
			props: {
				challenge
			}
		};
	}
</script>

<script lang="ts">
	import ActionHeroSection from '$lib/components/challenge/action-hero-section.svelte';
	import BackToChallengesPageSection from '$lib/components/challenge/back-to-challenges-page-section.svelte';
	import DatePickerSection from '$lib/components/challenge/date-picker-section.svelte';
	import RecommendedChallengesSection from '$lib/components/challenge/recommended-challenges-section.svelte';
	import Confetti from '$lib/components/particles/confetti.svelte';
	import type { ChallengeV2 } from '$lib/types/challenges';
	import { onMount } from 'svelte';
	export let challenge: ChallengeV2;

	let playAt, confettiTgt;
	onMount(() => {
		console.log(confettiTgt);
		const { top, bottom } = confettiTgt.getBoundingClientRect();
		setTimeout(() => playAt({ clientY: (top + bottom) / 2 }), 250);
	});
</script>

<div class="flex flex-col pt-8">
	<Confetti id="challenge_accept_particles" bind:playAt quantity={35} height={10} />

	<div bind:this={confettiTgt}>
		<ActionHeroSection {challenge} index={0}>
			<div slot="title">Challenge angenommen</div>
			<div slot="description">{challenge.title}</div>
			<div slot="icon">
				<svg viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
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
		</ActionHeroSection>
	</div>
	<DatePickerSection {challenge} index={4} initialCheckpoint />
	<RecommendedChallengesSection {challenge} index={5} />
	<BackToChallengesPageSection last={true} index={6} />
</div>
