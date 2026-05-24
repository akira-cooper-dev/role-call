<script lang="ts">
  import "./app.css";
  let smallTextSize = "text-[0.65rem]";
  let recentJobs = [
    {
      position:
        "Software Engineer",
      company: "Google",
      status: {
        isApplied: true,
        isInterviewScheduled: true,
        isInterviewCompleted: true,
      },
      appliedOn: "2024-01-15",
    },
    {
      position: "Frontend Developer",
      company: "Facebook",
      appliedOn: "2024-02-20",
    },
    {
      position: "Data Scientist",
      company: "Amazon",
      appliedOn: "2024-03-10",
    },
    {
      position: "Software Engineer",
      company: "Google",
      appliedOn: "2024-01-15",
    },
    {
      position: "Frontend Developer",
      company: "Facebook",
      appliedOn: "2024-02-20",
    },
    {
      position: "Data Scientist",
      company: "Amazon",
      appliedOn: "2024-03-10",
    },
    {
      position: "Software Engineer",
      company: "Google",
      appliedOn: "2024-01-15",
    },
    {
      position: "Frontend Developer",
      company: "Facebook",
      appliedOn: "2024-02-20",
    },
    {
      position: "Data Scientist",
      company: "Amazon",
      appliedOn: "2024-03-10",
    },
  ];
</script>

<main>
  <p class="text-lg justify-self-center">Recently Added Jobs</p>
  <ul class="list">
    {#each recentJobs as job}
      <li class="list-row">
        <div class="">
          <div class="text-md font-semibold">{job.position}</div>
          <div class="text-sm opacity-60">{job.company}</div>
          <div class="flex flex-wrap gap-2 pt-1">
            {#if job?.status?.isApplied}
              <div class="badge badge-info {smallTextSize}">Applied</div>
            {/if}
            {#if job?.status?.isInterviewScheduled}
              <div class="badge badge-warning {smallTextSize}">Interview Scheduled</div>
            {/if}
            {#if job?.status?.isInterviewCompleted}
              <div class="badge badge-success {smallTextSize}">Interview Completed</div>
            {/if}
          </div>
        </div>
        <button class="btn btn-square btn-ghost ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25rem"
            height="1.25rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
            ></path>
          </svg>
        </button>
      </li>
    {/each}
  </ul>
</main>

<style>
</style>
