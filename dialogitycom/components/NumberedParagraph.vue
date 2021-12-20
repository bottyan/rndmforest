<template>
    <div class="numbered-paragraph">
        <div class="title">
            <div class="number">{{number}}.</div>
            <div class="title-text">{{title}}.</div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: ['number', 'title'],
  }
</script>


<style scoped lang="scss">
    .numbered-paragraph {
        margin: 2rem 2rem 0 0rem;
        max-width: 60rem;


        .title {
            font-weight: 600;

            .number {
                display: inline-block;    
            }

            .title-text {
                display: inline-block;
            }
        }

        ol {
            margin-block-start: 1rem;
            margin-block-end: 1rem;
            margin-inline-start: 0.5rem;
            padding-left: 1rem;

            li {
                margin-top: 0.5rem;
                text-align: justify;
            }
        }

        .paragraph-head {
            text-decoration: underline;
            display: block;
            margin-bottom: 0.3rem;
        }
    }
    
</style>