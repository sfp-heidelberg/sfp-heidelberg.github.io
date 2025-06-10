<script lang='ts'>
    import BlogCard from '$lib/components/BlogCard.svelte'
	import EventCard from '$lib/components/EventCard.svelte'
    import * as config from '$lib/config'
import {ArrowRight} from 'lucide-svelte'
export let data;
</script>

<svelte:head>
	<title>{config.main_title}</title>
	<meta name="description" content={config.main_description} />
</svelte:head>

<div class="layout">
<div class="card">
    <div class="card-header">
        <img src="/palestine_flag.jpg" alt="">
    </div>
    <div class="card-content">
        Wir, die Heidelberger Studierenden, haben uns zusammengefunden, um uns solidarisch zu zeigen mit dem palästinensischen Volk!
    </div>
    <div class="card-footer">
        <a href="https://wewriteweresist.substack.com/" target="_blank" rel="noopener noreferrer"
        ><button class="newsletter-btn"><span>Unser Newsletter</span></button
        ></a>
    </div>
</div>


<div class="event-card">
    <div class="event-card-header">
        Unsere Events
    </div>
    <div class="event-card-content">
        <EventCard events={data.topEvents}/>
    </div>
</div>

<div class="event-card">
    <div class="event-card-header">
        Aktuelle Beiträge
    </div>
    <div class="event-card-content">
        <BlogCard posts={data.topPosts}/>
    </div>
</div>

<div class="event-card">
    <div class="event-card-header">
        Newsletter
    </div>
    <div class="event-card-content">
        Checkout our <a href="https://wewriteweresist.substack.com/" target="_blank" rel="noopener noreferrer">Substack Newsletter</a>
    </div>
</div>





</div>

<style>
    .card {
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 70% 30%;
        grid-template-areas: 
        ' c-image c-content '
        ' c-image c-link'
        ;
    }
    .card img {
        border-radius: 0;
        grid-area: c-image;
    }
    .card-content {
        grid-area: c-content;
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

    .card-footer {
        grid-area: c-link;
        justify-self: center;
    }
    .card-footer a {
        text-decoration: underline dashed 1px;
        color: var(--text-2);
        font-size: var(--font-size-fluid-1);
    
        &:hover {
            text-decoration: underline;
        }
    }

    .event-card {
        display: grid;
        grid-template-columns: 30% 70%;
        grid-template-rows: 10% 90%;
        grid-template-areas: 
        'c-title c-title'
        'e-c-content e-c-content';
        margin-block: var(--size-5);
        width: 100%;
    }
    .event-card-header{
        grid-area: c-title;
        font-size: var(--font-size-fluid-3);
        font-family: var(--font-sans-title);
        font-weight: 900;
    }
    .event-card-content {
        grid-area: e-c-content;
        align-self: center;
        align-content: center;
        font-size: var(--font-size-fluid-1);
        padding: var(--size-6);
        font-family: var(--font-sans-content);
        height: 100%;
        color: var(--text-1);
        display: inline-block;
    }

    .newsletter-btn {
        transition: all 0.5s;
        cursor: pointer;
    }

    .newsletter-btn span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    }

    .newsletter-btn span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
    }

    .newsletter-btn:hover span {
        padding-right: var(--size-7);
    }

    .newsletter-btn:hover span:after {
        opacity: 1;
        right: 0;
    }

    @media (max-width:768px){
        .card {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 50px;
            grid-template-areas: 
            ' c-image'
            ' c-content'
            ' c-link';
        }
        .event-card {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 10% 90%;
        grid-template-areas: 
        'c-title '
        'e-c-content';
        margin-block: var(--size-5);
        width: 100%;
    }
    }

</style>
