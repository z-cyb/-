<template>
    <div class="footer">
        <div>{{time}}}</div>
    </div>
</template>

<script>
    export default {
        name: "footer",
        data(){
            return{
                time:new Date()
            }
        },
    }
</script>

<style scoped>
.footer{
    margin-bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #150c17;
    color: white;
    text-align: center;
    line-height: 50px;
    font-size: 1rem;
}
</style>