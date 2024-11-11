<script lang='ts'>
    import {ArrowRight} from 'lucide-svelte'
</script>

<div class="layout">
<div class="card">
    <div class="card-header">
        <img src="/palestine_flag.jpg" alt="">
    </div>
    <div class="card-content">
        Wir, die Heidelberger Studierenden, haben uns zusammengefunden, um uns solidarisch zu zeigen mit dem palästinensischen Volk!
        <br/>
        <a href="/about">Über Uns</a>
    </div>
</div>

<div class="event-tile card">
    <div class="event card-content">
        Upcoming Events
    </div>

</div>

<div class="">

</div>



</div>

<style>
    .card {
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 100%;
    }
    .card img {
        border-radius: 0;
    }
    .card-content {
        align-self: center;
        align-content: center;
        font-size: var(--font-size-fluid-1);
        padding: var(--size-6);
        font-family: var(--font-sans-content);
        font-weight: 600;
        height: 100%;
        color: var(--text-1);
        display: inline-block;
    }

    .card-content a {
        text-decoration: underline dashed 1px;
        color: var(--text-2);
        font-size: var(--font-size-1);
    
        &:hover {
            text-decoration: underline;
        }
    }
    .event-tile {
        grid-template-columns: 50% 50%;
        grid-row: inherit;
        margin-block: var(--size-5);
        border-radius: var(--radius-3);
        width: 100%;
    }
    .event{
        font-size: var(--font-size-fluid-2);
        font-family: var(--font-sans-title);
    }


    @media (max-width:768px){
        .card {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }
    } 
</style>