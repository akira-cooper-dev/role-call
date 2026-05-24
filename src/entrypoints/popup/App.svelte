<script lang="ts">
  import './app.css';
  let recentJobs = [
    { position: 'Software Engineer', company: 'Google', status: 'Accepted', appliedOn: '2024-01-15' },
    { position: 'Frontend Developer', company: 'Facebook', status: 'Pending', appliedOn: '2024-02-20' },
    { position: 'Data Scientist', company: 'Amazon', status: 'Rejected', appliedOn: '2024-03-10' },
  ];
</script>

<main>
<p class="text-lg justify-self-center">Recently Added Jobs</p>
<ul class="list">
  {#each recentJobs as job}
  <br>
    <li class="list-row">
      <div>
        <div class="text-md font-semibold">{job.position}</div>
        <div class="text-xs opacity-60">{job.company}</div>
      </div>
      <div class="ml-auto text-sm opacity-60">{job.appliedOn}</div>
    </li>
  {/each}  
</ul>
</main>

<style>
</style>
